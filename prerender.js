import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, 'dist')
const docsDir = path.resolve(__dirname, 'docs')
const ssrDir = path.resolve(__dirname, 'dist-ssr')

async function runPrerender() {
  console.log('\n🚀 Starting Vite SSG Prerendering for FSK Prototyping Services...')
  const startTime = Date.now()

  const templatePath = path.resolve(distDir, 'index.html')
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found at ${templatePath}. Run "vite build" first.`)
  }
  const rawTemplate = fs.readFileSync(templatePath, 'utf-8')

  // Import SSR bundle
  const serverBundlePath = path.resolve(ssrDir, 'entry-server.js')
  if (!fs.existsSync(serverBundlePath)) {
    throw new Error(`SSR bundle not found at ${serverBundlePath}. Run "vite build --ssr src/entry-server.jsx" first.`)
  }
  const { render, routes } = await import(`file://${serverBundlePath}`)

  const generatedFiles = []

  for (const route of routes) {
    const isRoot = route.path === '/'
    const pageId = route.pageId
    console.log(`  ⚡ Prerendering route: "${route.path}" (pageId: "${pageId}")...`)

    const appHtml = render(pageId)

    // Replace root container with prerendered app markup
    let html = rawTemplate.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${appHtml}</div>`
    )

    // Update <title>
    html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`)

    // Update <meta name="title" ...>
    if (html.includes('<meta name="title"')) {
      html = html.replace(
        /<meta name="title" content="[^"]*">/i,
        `<meta name="title" content="${route.title}">`
      )
    }

    // Update <meta name="description" ...>
    if (html.includes('<meta name="description"')) {
      html = html.replace(
        /<meta name="description" content="[^"]*">/i,
        `<meta name="description" content="${route.desc}">`
      )
    }

    // Update Open Graph tags
    if (html.includes('<meta property="og:title"')) {
      html = html.replace(
        /<meta property="og:title" content="[^"]*">/i,
        `<meta property="og:title" content="${route.title}">`
      )
    }
    if (html.includes('<meta property="og:description"')) {
      html = html.replace(
        /<meta property="og:description" content="[^"]*">/i,
        `<meta property="og:description" content="${route.desc}">`
      )
    }
    if (html.includes('<meta property="og:url"')) {
      html = html.replace(
        /<meta property="og:url" content="[^"]*">/i,
        `<meta property="og:url" content="${route.canonical}">`
      )
    }

    // Update Canonical URL
    if (html.includes('<link rel="canonical"')) {
      html = html.replace(
        /<link rel="canonical" href="[^"]*">/i,
        `<link rel="canonical" href="${route.canonical}">`
      )
    }

    // For nested routes (e.g. /about, /services, /contact):
    // Adjust relative asset links so they resolve cleanly from 1 directory depth
    if (!isRoot) {
      html = html
        .replace(/src="\.\/assets\//g, 'src="../assets/')
        .replace(/href="\.\/assets\//g, 'href="../assets/')
        .replace(/href="\.\/favicon/g, 'href="../favicon')
        .replace(/href="\.\/"/g, 'href="../"')
    }

    // Output directory structure
    const targetFolder = isRoot ? distDir : path.resolve(distDir, route.path.replace(/^\//, ''))
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true })
    }

    const outFilePath = path.resolve(targetFolder, 'index.html')
    fs.writeFileSync(outFilePath, html, 'utf-8')
    generatedFiles.push({ file: outFilePath, size: Buffer.byteLength(html, 'utf-8') })

    // If docs/ directory exists in project, keep it in sync for GitHub Pages
    if (fs.existsSync(docsDir)) {
      const docsTargetFolder = isRoot ? docsDir : path.resolve(docsDir, route.path.replace(/^\//, ''))
      if (!fs.existsSync(docsTargetFolder)) {
        fs.mkdirSync(docsTargetFolder, { recursive: true })
      }
      fs.writeFileSync(path.resolve(docsTargetFolder, 'index.html'), html, 'utf-8')
    }
  }

  // Also prerender custom 404 page with prerendered app
  console.log(`  ⚡ Prerendering fallback 404 page...`)
  const notFoundHtml = render('404')
  let html404 = rawTemplate.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${notFoundHtml}</div>`
  )
  html404 = html404.replace(/<title>.*?<\/title>/i, `<title>404 - Resource Not Found | FSK Prototyping Services</title>`)
  const out404 = path.resolve(distDir, '404.html')
  fs.writeFileSync(out404, html404, 'utf-8')
  if (fs.existsSync(docsDir)) {
    fs.writeFileSync(path.resolve(docsDir, '404.html'), html404, 'utf-8')
    if (fs.existsSync(path.resolve(distDir, 'sitemap.xml'))) {
      fs.copyFileSync(path.resolve(distDir, 'sitemap.xml'), path.resolve(docsDir, 'sitemap.xml'))
    }
    if (fs.existsSync(path.resolve(distDir, 'robots.txt'))) {
      fs.copyFileSync(path.resolve(distDir, 'robots.txt'), path.resolve(docsDir, 'robots.txt'))
    }
  }
  generatedFiles.push({ file: out404, size: Buffer.byteLength(html404, 'utf-8') })

  // Clean up temporary dist-ssr directory
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true })
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2)
  console.log(`\n✅ SSG Prerendering Completed Successfully in ${duration}s!`)
  console.log('📦 Generated Static Physical Files:')
  for (const item of generatedFiles) {
    const rel = path.relative(__dirname, item.file).replace(/\\/g, '/')
    console.log(`   - ${rel} (${(item.size / 1024).toFixed(1)} KB)`)
  }
}

runPrerender().catch((err) => {
  console.error('❌ SSG Prerender Error:', err)
  process.exit(1)
})

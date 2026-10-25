import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { getAssetUrl } from '../utils/assetUrl';

// Model normalization helper
function useNormalizedModel(path, targetDim) {
  const { scene } = useGLTF(path);

  return useMemo(() => {
    const root = new THREE.Group();
    const cloned = scene.clone();

    const box = new THREE.Box3().setFromObject(cloned);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    cloned.position.set(-center.x, -center.y, -center.z);
    root.add(cloned);

    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = targetDim / maxDim;
    root.scale.set(scale, scale, scale);

    root.traverse((child) => {
      if (child.isMesh && child.material) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.metalness = Math.min(child.material.metalness || 0.3, 0.7);
        child.material.roughness = Math.max(child.material.roughness || 0.35, 0.28);
      }
    });

    return root;
  }, [scene, targetDim]);
}

// Gentle Camera Parallax Rig: Smoothly shifts camera position with user's mouse
function CameraParallaxRig({ mouseRef, focalPoint = [1.8, 0.1, 0] }) {
  useFrame(({ camera }, delta) => {
    // Smooth dampening of mouse parallax shift
    const targetX = mouseRef.current.x * 0.7;
    const targetY = mouseRef.current.y * 0.45;

    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 2.2, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 2.2, delta);

    // Camera continuously aims toward focal center of the 3D hardware cluster
    camera.lookAt(focalPoint[0], focalPoint[1], focalPoint[2]);
  });

  return null;
}

// Elegant Micro-Orbit Precision Halo
function PrecisionOrbitHalo({
  radius = 1.3,
  color = '#0052ff',
  speed = 0.4,
  tilt = [0.45, 0.1, 0],
  tube = 0.007
}) {
  const haloRef = useRef();

  useFrame((state, delta) => {
    if (haloRef.current) {
      haloRef.current.rotation.z += delta * speed;
    }
  });

  return (
    <group rotation={tilt}>
      <mesh ref={haloRef}>
        <torusGeometry args={[radius, tube, 16, 64]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.28}
        />
      </mesh>
    </group>
  );
}

// Reusable Anti-Gravity Floating Hardware Board
function AntiGravityBoard({
  modelPath,
  targetDim,
  basePosition,
  baseRotation = [0.45, 0, 0],
  floatSpeed = 0.55,
  floatAmplitude = 0.14,
  rotSpeed = 0.18,
  phaseOffset = 0,
  haloColor = '#0052ff',
  haloRadius = 1.3,
  haloTilt = [0.5, 0.2, 0]
}) {
  const model = useNormalizedModel(modelPath, targetDim);
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() + phaseOffset;

    // Slow, weightless multi-harmonic anti-gravity vertical levitation
    const levitateY =
      Math.sin(t * floatSpeed) * floatAmplitude +
      Math.cos(t * floatSpeed * 0.47) * (floatAmplitude * 0.35);

    // Subtle planar drifting
    const driftX = Math.cos(t * floatSpeed * 0.65) * (floatAmplitude * 0.25);
    const driftZ = Math.sin(t * floatSpeed * 0.52) * (floatAmplitude * 0.2);

    const targetPosX = basePosition[0] + driftX;
    const targetPosY = basePosition[1] + levitateY;
    const targetPosZ = basePosition[2] + driftZ;

    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetPosX, 3.0, delta);
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetPosY, 3.0, delta);
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetPosZ, 3.0, delta);

    // Continuous tranquil rotation
    groupRef.current.rotation.y += delta * rotSpeed;

    // Gentle anti-gravity pitch & roll sway
    const pitchSway = Math.sin(t * floatSpeed * 0.8) * 0.08;
    const rollSway = Math.cos(t * floatSpeed * 0.6) * 0.06;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      baseRotation[0] + pitchSway,
      3.0,
      delta
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      baseRotation[2] + rollSway,
      3.0,
      delta
    );
  });

  return (
    <group ref={groupRef} position={basePosition} rotation={baseRotation}>
      <primitive object={model} />
      {haloColor && (
        <PrecisionOrbitHalo
          radius={haloRadius}
          color={haloColor}
          speed={rotSpeed * 2.2}
          tilt={haloTilt}
        />
      )}
    </group>
  );
}

// Precision CAD Blueprint Datum Rings on Studio Floor
function StudioBlueprintDatum({ position = [1.8, -2.1, 0] }) {
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  useFrame((state, delta) => {
    if (ringRef1.current) ringRef1.current.rotation.z += delta * 0.05;
    if (ringRef2.current) ringRef2.current.rotation.z -= delta * 0.08;
  });

  return (
    <group position={position} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Outer Precision Ring */}
      <mesh ref={ringRef1}>
        <ringGeometry args={[3.2, 3.22, 64]} />
        <meshBasicMaterial color="#0052ff" transparent opacity={0.18} side={THREE.DoubleSide} />
      </mesh>

      {/* Middle Reference Ring */}
      <mesh ref={ringRef2}>
        <ringGeometry args={[2.2, 2.22, 64]} />
        <meshBasicMaterial color="#94a3b8" transparent opacity={0.22} side={THREE.DoubleSide} />
      </mesh>

      {/* Soft Luminous Contact Shadow for Anti-Gravity Levitation Grounding */}
      <mesh position={[0, 0, -0.02]}>
        <circleGeometry args={[3.4, 64]} />
        <meshBasicMaterial color="#090d16" transparent opacity={0.05} />
      </mesh>
      <mesh position={[0, 0, -0.01]}>
        <circleGeometry args={[2.0, 48]} />
        <meshBasicMaterial color="#0052ff" transparent opacity={0.03} />
      </mesh>
    </group>
  );
}

// Master Hardware Cluster with Anti-Gravity Float
function AntiGravityHardwareScene({ mouseRef }) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 960 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 960);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop focal placement: Cleanly grouped on right side, layered with natural depth
  // Mobile: Centered composition
  const clusterOffset = isMobile ? [-0.2, 0.1, 0] : [0, 0, 0];

  return (
    <>
      {/* Dynamic Camera Parallax controller tracking user cursor */}
      <CameraParallaxRig mouseRef={mouseRef} focalPoint={isMobile ? [0, 0, 0] : [1.8, 0.1, 0]} />

      {/* Studio Daylight Lighting Matrix */}
      <ambientLight intensity={1.65} color="#ffffff" />
      <directionalLight position={[6, 12, 8]} intensity={2.6} color="#ffffff" />
      <directionalLight position={[-6, 7, 5]} intensity={1.3} color="#f0f9ff" />
      <directionalLight position={[2, -4, -6]} intensity={1.2} color="#0052ff" />

      <group position={clusterOffset}>
        {/* 1. ESP32 WROOM (Center Foreground Primary Anchor) */}
        <AntiGravityBoard
          modelPath={getAssetUrl('esp32_wroom_32_-_low_poly_photorealistic.glb')}
          targetDim={isMobile ? 2.2 : 2.75}
          basePosition={isMobile ? [0, -0.4, 0.4] : [1.8, -0.45, 0.7]}
          baseRotation={[0.5, 0.2, 0.08]}
          floatSpeed={0.52}
          floatAmplitude={0.16}
          rotSpeed={0.16}
          phaseOffset={0}
          haloColor="#0284c7"
          haloRadius={1.42}
          haloTilt={[0.55, -0.25, 0.15]}
        />

        {/* 2. Arduino Uno (Upper Left Flank - Depth Layer) */}
        <AntiGravityBoard
          modelPath={getAssetUrl('arduino_uno.glb')}
          targetDim={isMobile ? 1.8 : 2.25}
          basePosition={isMobile ? [-1.2, 0.8, -0.2] : [0.45, 0.95, -0.15]}
          baseRotation={[0.42, -0.3, -0.05]}
          floatSpeed={0.46}
          floatAmplitude={0.14}
          rotSpeed={0.14}
          phaseOffset={2.4}
          haloColor="#0052ff"
          haloRadius={1.25}
          haloTilt={[0.48, 0.35, -0.1]}
        />

        {/* 3. Raspberry Pi (Upper Right Flank - Depth Layer) */}
        <AntiGravityBoard
          modelPath={getAssetUrl('raspberry_pi.glb')}
          targetDim={isMobile ? 1.9 : 2.35}
          basePosition={isMobile ? [1.2, 0.75, -0.2] : [3.15, 0.85, -0.1]}
          baseRotation={[0.44, 0.25, 0.1]}
          floatSpeed={0.49}
          floatAmplitude={0.15}
          rotSpeed={0.15}
          phaseOffset={4.8}
          haloColor="#0052ff"
          haloRadius={1.3}
          haloTilt={[0.45, -0.3, 0.2]}
        />

        {/* Precision Blueprint Datum Floor */}
        <StudioBlueprintDatum position={isMobile ? [0, -1.9, 0] : [1.8, -2.1, 0]} />
      </group>
    </>
  );
}

export default function Hardware3DCanvas({ introStage = 'ready' }) {
  const mouseRef = useRef({ x: 0, y: 0 });
  const isRevealed = introStage === 'docking' || introStage === 'ready';

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates from -1 to +1
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
        opacity: isRevealed ? 1 : 0,
        transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 7.8], fov: 42 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        style={{ pointerEvents: 'none' }}
      >
        <AntiGravityHardwareScene mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Master Concentric Hologram Pedestal on the Floor
function HologramTrioRings({ position = [0, -1.8, 0] }) {
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const ringRef3 = useRef();

  useFrame((state, delta) => {
    if (ringRef1.current) ringRef1.current.rotation.z += delta * 0.12;
    if (ringRef2.current) ringRef2.current.rotation.z -= delta * 0.18;
    if (ringRef3.current) ringRef3.current.rotation.z += delta * 0.28;
  });

  return (
    <group position={position} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Outer Telemetry Ring */}
      <mesh ref={ringRef1}>
        <ringGeometry args={[2.9, 2.94, 64]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.22}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Middle Concentric Ring */}
      <mesh ref={ringRef2}>
        <ringGeometry args={[2.08, 2.12, 64]} />
        <meshBasicMaterial
          color="#94a3b8"
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner Fast Accent Ring */}
      <mesh ref={ringRef3}>
        <ringGeometry args={[1.28, 1.31, 48]} />
        <meshBasicMaterial
          color="#cbd5e1"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Deep Ground Shadow Core */}
      <mesh position={[0, 0, -0.05]}>
        <circleGeometry args={[3.3, 64]} />
        <meshBasicMaterial
          color="#06080d"
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

// Orbiting Individual Telemetry Energy Ring around each component
function OrbitingEnergyHalo({
  radius = 1.3,
  color = '#00e5ff',
  speed = 0.8,
  tilt = [0.4, 0, 0],
  tube = 0.012
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
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

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
        child.material.metalness = Math.min(child.material.metalness || 0.45, 0.85);
        child.material.roughness = Math.max(child.material.roughness || 0.3, 0.22);
      }
    });

    return root;
  }, [scene, targetDim]);
}

// -------------------------------------------------------------
// COMPONENT 1: ARDUINO UNO (Left Upper Flank)
// Kinematics: Lissajous Figure-8 Orbital Sweep + Mechanical Turntable Pitch
// -------------------------------------------------------------
function ArduinoUnoBoard({ targetDim, basePosition, mouseRef, isFocused }) {
  const model = useNormalizedModel('/arduino_uno.glb', targetDim);
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Lissajous Figure-8 harmonic float
    const lissajousX = Math.sin(t * 0.9) * 0.12;
    const lissajousY = Math.sin(t * 1.8) * 0.13;
    const lissajousZ = Math.cos(t * 0.9) * 0.08;

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    const targetX = basePosition[0] + (isFocused ? 0.3 : 0) + lissajousX + mx * 0.22;
    const targetY = basePosition[1] + (isFocused ? 0.25 : 0) + lissajousY - my * 0.22;
    const targetZ = basePosition[2] + (isFocused ? 0.6 : 0) + lissajousZ;

    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 3.5, delta);
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, 3.5, delta);
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, 3.5, delta);

    // Continuous turntable rotation with periodic chip-inspection tilt
    groupRef.current.rotation.y += delta * (isFocused ? 0.45 : 0.26);

    const pitchTilt = Math.sin(t * 1.1) * 0.12;
    const rollTilt = Math.cos(t * 0.8) * 0.09;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      0.5 + pitchTilt - my * 0.2,
      3.5,
      delta
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      0.05 + rollTilt + mx * 0.15,
      3.5,
      delta
    );

    const targetScale = isFocused ? 1.12 : 1.0;
    groupRef.current.scale.setScalar(
      THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 4, delta)
    );
  });

  return (
    <group ref={groupRef} position={basePosition}>
      <primitive object={model} />
      <OrbitingEnergyHalo radius={1.2} color="#c8ff00" speed={0.9} tilt={[0.55, 0.2, 0]} />
    </group>
  );
}

// -------------------------------------------------------------
// COMPONENT 2: ESP32 WROOM (Center Front Anchor)
// Kinematics: Quantum Levitation Wave + Gyroscopic Precession + Pulsing Beacon
// -------------------------------------------------------------
function Esp32Board({ targetDim, basePosition, mouseRef, isFocused }) {
  const model = useNormalizedModel('/esp32_wroom_32_-_low_poly_photorealistic.glb', targetDim);
  const groupRef = useRef();
  const beaconLightRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Compound magnetic levitation wave
    const waveY = Math.sin(t * 1.4) * 0.12 + Math.cos(t * 0.7) * 0.04;
    const waveX = Math.cos(t * 1.1) * 0.07;
    const waveZ = Math.sin(t * 0.9) * 0.05;

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    const targetX = basePosition[0] + waveX + mx * 0.3;
    const targetY = basePosition[1] + (isFocused ? 0.35 : 0) + waveY - my * 0.3;
    const targetZ = basePosition[2] + (isFocused ? 0.8 : 0) + waveZ;

    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 3.8, delta);
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, 3.8, delta);
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, 3.8, delta);

    // Continuous high-tech spin with gyroscopic precession wobble
    groupRef.current.rotation.y += delta * (isFocused ? 0.5 : 0.32);

    const gyroPitch = Math.sin(t * 1.2) * 0.14;
    const gyroRoll = Math.cos(t * 1.5) * 0.1;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      0.55 + gyroPitch - my * 0.22,
      3.8,
      delta
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      0.15 + gyroRoll + mx * 0.18,
      3.8,
      delta
    );

    if (beaconLightRef.current) {
      beaconLightRef.current.intensity = 2.5 + Math.sin(t * 3.5) * 1.8 + (isFocused ? 2.5 : 0);
    }

    const targetScale = isFocused ? 1.15 : 1.0;
    groupRef.current.scale.setScalar(
      THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 4, delta)
    );
  });

  return (
    <group ref={groupRef} position={basePosition}>
      <primitive object={model} />
      <OrbitingEnergyHalo radius={1.35} color="#00e5ff" speed={-1.1} tilt={[0.6, -0.3, 0.2]} />
      <pointLight ref={beaconLightRef} position={[0, -0.2, 0.2]} color="#00e5ff" distance={6} />
    </group>
  );
}

// -------------------------------------------------------------
// COMPONENT 3: RASPBERRY PI (Right Upper Flank)
// Kinematics: Aerodynamic Banking Glide Physics
// -------------------------------------------------------------
function RaspberryPiBoard({ targetDim, basePosition, mouseRef, isFocused }) {
  const model = useNormalizedModel('/raspberry_pi.glb', targetDim);
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Undulating flight glide
    const flightX = Math.cos(t * 0.95) * 0.14;
    const flightY = Math.sin(t * 1.3) * 0.13;
    const flightZ = Math.sin(t * 0.7) * 0.1;

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    const targetX = basePosition[0] - (isFocused ? 0.3 : 0) + flightX + mx * 0.25;
    const targetY = basePosition[1] + (isFocused ? 0.25 : 0) + flightY - my * 0.25;
    const targetZ = basePosition[2] + (isFocused ? 0.6 : 0) + flightZ;

    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 3.6, delta);
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, 3.6, delta);
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, 3.6, delta);

    // Banking physics
    const bankAngle = -Math.sin(t * 0.95) * 0.24;
    const pitchWobble = Math.cos(t * 1.1) * 0.11;

    groupRef.current.rotation.y += delta * (isFocused ? 0.42 : 0.28);
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      0.45 + pitchWobble - my * 0.2,
      3.6,
      delta
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      0.12 + bankAngle + mx * 0.16,
      3.6,
      delta
    );

    const targetScale = isFocused ? 1.12 : 1.0;
    groupRef.current.scale.setScalar(
      THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 4, delta)
    );
  });

  return (
    <group ref={groupRef} position={basePosition}>
      <primitive object={model} />
      <OrbitingEnergyHalo radius={1.28} color="#ff3cac" speed={0.75} tilt={[0.45, 0.4, -0.1]} />
    </group>
  );
}

// Master Stage aggregating the Trio anchored on the right background
function TrioHardwareStage({ mouseRef, activeTrackId }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 960;
  const masterPosition = isMobile ? [0, 0.2, 0] : [2.2, 0.0, 0];

  return (
    <group position={masterPosition}>
      {/* Studio Lighting Matrix */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[6, 8, 7]} intensity={3.0} />
      <directionalLight position={[-6, 4, -4]} intensity={2.2} color="#00e5ff" />

      {/* Tri-Color Specular Neon Accents */}
      <pointLight position={[-1.6, 0.6, 2.5]} color="#c8ff00" intensity={4.2} distance={10} />
      <pointLight position={[0, -1, 3]} color="#00e5ff" intensity={4.5} distance={12} />
      <pointLight position={[1.6, 0.6, 2.5]} color="#ff3cac" intensity={4.2} distance={10} />

      {/* Floating Micro-Sparks with Tri-Color Cyber Shimmer */}
      <Sparkles count={40} scale={10} size={2.4} color="#c8ff00" opacity={0.65} speed={0.4} />
      <Sparkles count={40} scale={10} size={2.2} color="#00e5ff" opacity={0.6} speed={0.4} />
      <Sparkles count={30} scale={9} size={2.0} color="#ff3cac" opacity={0.5} speed={0.35} />

      {/* 1. ESP32 WROOM (Center Front Anchor) */}
      <Esp32Board
        targetDim={isMobile ? 2.3 : 2.7}
        basePosition={[0, -0.65, 0.7]}
        mouseRef={mouseRef}
        isFocused={activeTrackId === 'scholars'}
      />

      {/* 2. Arduino Uno (Left Upper Flank) */}
      <ArduinoUnoBoard
        targetDim={isMobile ? 2.0 : 2.4}
        basePosition={[-1.4, 0.75, -0.2]}
        mouseRef={mouseRef}
        isFocused={activeTrackId === 'students'}
      />

      {/* 3. Raspberry Pi (Right Upper Flank) */}
      <RaspberryPiBoard
        targetDim={isMobile ? 2.1 : 2.5}
        basePosition={[1.4, 0.7, -0.2]}
        mouseRef={mouseRef}
        isFocused={activeTrackId === 'startups'}
      />

      {/* Holographic Pedestal on the Floor */}
      <HologramTrioRings
        position={[0, isMobile ? -1.6 : -1.8, 0]}
      />
    </group>
  );
}

export default function Hardware3DCanvas({ introStage = 'ready', activeTrackId = null }) {
  const mouseRef = useRef({ x: 0, y: 0 });
  const isRevealed = introStage === 'docking' || introStage === 'ready';

  useEffect(() => {
    const handleMouseMove = (e) => {
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
        camera={{ position: [0, 0, 7.8], fov: 44 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        style={{ pointerEvents: 'none' }}
      >
        <TrioHardwareStage
          mouseRef={mouseRef}
          activeTrackId={activeTrackId}
        />
      </Canvas>
    </div>
  );
}

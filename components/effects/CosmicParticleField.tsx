"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function CosmicPoints() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 2000;
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = THREE.MathUtils.randFloat(20, 60);
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);
      array.set([x, y, z], i * 3);
    }
    return array;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const elapsed = state.clock.getElapsedTime();
    ref.current.rotation.x = elapsed * 0.02;
    ref.current.rotation.y = elapsed * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00D9FF"
        size={0.15}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

export function CosmicParticleField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 35], fov: 60 }}>
        <color attach="background" args={["#030014"]} />
        <fog attach="fog" args={["#030014", 30, 120]} />
        <ambientLight intensity={0.2} />
        <CosmicPoints />
      </Canvas>
    </div>
  );
}

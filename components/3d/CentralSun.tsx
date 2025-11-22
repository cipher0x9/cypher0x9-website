"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function CentralSun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Animate the sun
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (glowRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.2 + 1;
      glowRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group>
      {/* Outer glow layers */}
      <Sphere ref={glowRef} args={[1.8, 32, 32]}>
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.15}
        />
      </Sphere>

      <Sphere args={[1.5, 32, 32]}>
        <meshBasicMaterial
          color="#00ff88"
          transparent
          opacity={0.2}
        />
      </Sphere>

      {/* Main sun sphere with avatar representation */}
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00d4ff"
          emissiveIntensity={1.5}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>

      {/* Inner core */}
      <Sphere args={[0.9, 32, 32]}>
        <meshBasicMaterial
          color="#00ff88"
          transparent
          opacity={0.6}
        />
      </Sphere>

      {/* Rotating rings around sun */}
      <mesh rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <ringGeometry args={[1.4, 1.5, 64]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
        <ringGeometry args={[1.5, 1.6, 64]} />
        <meshBasicMaterial
          color="#00ff88"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Point light emanating from sun */}
      <pointLight position={[0, 0, 0]} intensity={3} color="#ffffff" distance={50} />
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#00d4ff" distance={30} />
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#00ff88" distance={30} />
    </group>
  );
}

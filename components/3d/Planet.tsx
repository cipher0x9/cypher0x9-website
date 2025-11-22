"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { PlanetConfig } from "./SolarSystem";

interface PlanetProps extends PlanetConfig {
  index: number;
}

export default function Planet({
  name,
  color,
  glowColor,
  orbitRadius,
  size,
  speed,
  href,
  icon,
}: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Animate orbital rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed * 0.01;
    }
    if (meshRef.current) {
      // Rotate the planet on its own axis
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const handleClick = () => {
    // Navigate to the href
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <group ref={groupRef}>
      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitRadius - 0.02, orbitRadius + 0.02, 64]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.4 : 0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Planet group at orbit position */}
      <group position={[orbitRadius, 0, 0]}>
        {/* Planet glow */}
        <Sphere args={[size * 1.3, 32, 32]}>
          <meshBasicMaterial
            color={glowColor}
            transparent
            opacity={hovered ? 0.4 : 0.2}
          />
        </Sphere>

        {/* Main planet */}
        <Sphere
          ref={meshRef}
          args={[size, 32, 32]}
          onClick={handleClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.2 : 1}
        >
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 0.8 : 0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>

        {/* Planet label */}
        {hovered && (
          <Text
            position={[0, size + 0.8, 0]}
            fontSize={0.4}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#000000"
          >
            {icon} {name}
          </Text>
        )}

        {/* Floating particles around planet */}
        {hovered && (
          <>
            <Sphere args={[0.05, 8, 8]} position={[size * 1.5, 0.2, 0]}>
              <meshBasicMaterial color={color} />
            </Sphere>
            <Sphere args={[0.05, 8, 8]} position={[-size * 1.5, -0.2, 0]}>
              <meshBasicMaterial color={color} />
            </Sphere>
            <Sphere args={[0.05, 8, 8]} position={[0, 0.3, size * 1.5]}>
              <meshBasicMaterial color={color} />
            </Sphere>
          </>
        )}
      </group>
    </group>
  );
}

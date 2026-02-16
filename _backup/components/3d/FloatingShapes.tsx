'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Esfera central */}
      <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#4f46e5" 
          emissive="#312e81"
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Cubo flutuante */}
      <Box args={[0.8, 0.8, 0.8]} position={[2, 1, -1]}>
        <meshStandardMaterial 
          color="#06b6d4" 
          emissive="#155e75"
          roughness={0.3}
          metalness={0.7}
        />
      </Box>

      {/* Torus */}
      <Torus args={[0.8, 0.2, 16, 100]} position={[-2, -1, 1]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#a855f7" 
          emissive="#6b21a8"
          roughness={0.2}
          metalness={0.6}
        />
      </Torus>

      {/* Partículas */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.05, 8, 8]}
          position={[
            Math.sin(i * 0.5) * 3,
            Math.cos(i * 0.3) * 2,
            Math.sin(i * 0.7) * 2,
          ]}
        >
          <meshStandardMaterial color="#94a3b8" emissive="#334155" />
        </Sphere>
      ))}
    </group>
  );
}

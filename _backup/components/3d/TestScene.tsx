'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Environment } from '@react-three/drei';

export default function TestScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Box position={[-1.5, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={0.2} />
      </Box>
      
      <Box position={[1.5, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="blue" emissive="blue" emissiveIntensity={0.2} />
      </Box>
      
      <Box position={[0, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="purple" emissive="purple" emissiveIntensity={0.2} />
      </Box>
      
      <OrbitControls 
        enableDamping 
        dampingFactor={0.05}
        autoRotate 
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}
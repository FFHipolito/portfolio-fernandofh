'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';

interface SceneProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PerformanceScene({ children, className }: SceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{
          powerPreference: "high-performance",
          antialias: true,
          alpha: true,
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#000000']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#4f46e5" />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#a855f7" />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          {children}
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}

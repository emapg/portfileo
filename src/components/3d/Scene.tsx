import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import { FloatingLogo } from './FloatingLogo';
import { WorkspaceModel } from './WorkspaceModel';

export function Scene() {
  return (
    <Canvas className="w-full h-screen">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <Suspense fallback={null}>
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <FloatingLogo />
        <WorkspaceModel />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
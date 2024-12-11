import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { IntroScene } from './3d/IntroScene';
import { Environment } from './3d/Environment';
import { ProjectsDisplay } from './3d/ProjectsDisplay';

export function Scene() {
  return (
    <Canvas
      shadows
      className="w-full h-screen"
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Environment />
        <IntroScene />
        <ProjectsDisplay />
      </Suspense>
    </Canvas>
  );
}
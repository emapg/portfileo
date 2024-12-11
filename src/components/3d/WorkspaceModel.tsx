import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export function WorkspaceModel() {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/desk-lamp/model.gltf');

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return <primitive ref={meshRef} object={scene} scale={0.5} position={[0, -1, 0]} />;
}
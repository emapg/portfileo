import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

export function FloatingLogo() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [springs] = useSpring(() => ({
    scale: [1, 1, 1],
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <animated.mesh ref={meshRef} {...springs}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
        >
          Portfolio
          <meshStandardMaterial color="#4f46e5" />
        </Text3D>
      </Center>
    </animated.mesh>
  );
}
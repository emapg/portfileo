import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Float } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';

export function IntroScene() {
  const groupRef = useRef<THREE.Group>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (groupRef.current) {
      gsap.from(groupRef.current.position, {
        y: -10,
        duration: 2,
        ease: 'power3.out'
      });
    }
  }, []);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        <Text3D
          ref={textRef}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.8}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Portfolio
          <meshStandardMaterial
            color="#4f46e5"
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Float>
    </group>
  );
}
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

interface Project {
  title: string;
  description: string;
  image: string;
  position: [number, number, number];
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    position: [-2, 0, 0]
  },
  {
    title: "Portfolio Website",
    description: "Interactive 3D portfolio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    position: [0, 0, 0]
  },
  {
    title: "AI Dashboard",
    description: "AI-powered analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    position: [2, 0, 0]
  }
];

export function ProjectsDisplay() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => (
        <group key={index} position={new THREE.Vector3(...project.position)}>
          <mesh>
            <boxGeometry args={[1.5, 1, 0.1]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <Html
            transform
            position={[0, 0, 0.06]}
            className="w-48 pointer-events-none"
          >
            <div className="bg-white p-4 rounded shadow-lg">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}
'use client';
import { Canvas } from "@react-three/fiber";
import 'aframe';

export default function Home() {
  
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray w-full h-screen">
      {/* <Canvas className="w-full h-full">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[-Math.PI / 3, 0, 0]} position={[0, 0, 0]}>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas> */}
      <a-scene embedded>
        <a-box color="#f0cd21" position="0 1 -4" rotation="0 90 0"></a-box>
      </a-scene>
    </main>
  );
}
'use client';
import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = () => {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.x += 0.1;
    boxRef.current.rotation.y += 0.01;
  });
  return (
    <>
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
    </>
  );
};


export default function Home() {

  
  
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray w-full h-screen">
      <Canvas className="w-full h-full">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box/>
        <OrbitControls />
      </Canvas> 
      <div className="flex flex-col items-center justify-center w-full h-full bg-gray-200">
      <model-viewer src="macbook.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="neutral" poster="poster.webp" shadow-intensity="1" auto-rotate>
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png"/>
    </div>
</model-viewer>
      </div>
    </main>
  );
}
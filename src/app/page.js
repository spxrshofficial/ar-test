'use client';
import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import '@google/model-viewer';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white/20 w-full h-screen">
      <model-viewer
        src="/painting1.glb"
        ios-src="/painting1.usdz"
        ar
        camera-controls
        auto-rotate
        style={{ width: "100%", height: "100%" }}>
      </model-viewer>
    </main>
  );
}
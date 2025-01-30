'use client';

import React, { useRef, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import Script from 'next/script';
import * as THREE from "three";

const Box = () => {
  const boxRef = useRef();

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.1;
      boxRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const ARIntegration = () => {
  const { camera, scene } = useThree();

  useEffect(() => {
    const initAR = () => {
      if (!window.THREEx) return;
      const arToolkitSource = new window.THREEx.ArToolkitSource({
        sourceType: 'webcam',
      });

      arToolkitSource.init(() => {
        setTimeout(() => {
          arToolkitSource.onResize();
          arToolkitSource.copySizeTo(document.body);
        }, 2000);
      });

      const arToolkitContext = new window.THREEx.ArToolkitContext({
        cameraParametersUrl: 'https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/camera_para.dat',
        detectionMode: 'mono'
      });
      arToolkitContext.init(() => {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
      });

      const markerRoot = new THREE.Group();
      scene.add(markerRoot);
      new window.THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
        type: 'pattern',
        patternUrl: 'https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/patt.hiro'
      });

      const tick = () => {
        if (arToolkitSource.ready === false) return;
        arToolkitContext.update(arToolkitSource.domElement);
        requestAnimationFrame(tick);
      };
      tick();
    };

    if (window.THREEx && window.THREEx.ArToolkitContext) {
      initAR();
    } else {
      window.addEventListener('arjs-loaded', initAR);
    }
  }, [camera, scene]);

  return null;
};

export default function Home() {
  return (
    <>
      <Script
        src="https://cdn.rawgit.com/AR-js-org/AR.js/3.3.2/three.js/build/ar-threex.js"
        strategy="afterInteractive"
        onLoad={() => window.dispatchEvent(new Event('arjs-loaded'))}
      />
      <main className="flex min-h-screen flex-col items-center justify-between bg-white/10 w-full h-screen">
        <Canvas camera={{ position: [0, 0, 5], fov: 70 }} gl={{ alpha: true }}>
          <ARIntegration />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box />
          <OrbitControls />
        </Canvas>
      </main>
    </>
  );
}
"use client";

import { useEffect, useRef, useState } from 'react';

export default function ModelViewer({ model }) {
  const [mounted, setMounted] = useState(false);
  const modelViewerRef = useRef(null);

  useEffect(() => {
    // Dynamically import the <model-viewer> to avoid SSR issues
    const loadModelViewer = async () => {
      await import("@google/model-viewer");
      setMounted(true);
    };
    loadModelViewer();
  }, []);

  

  if (!mounted) return <div>Loading model viewer...</div>;

  return (
    <model-viewer
      ref={modelViewerRef}
      src={model.src}
      ios-src={model.iosSrc}
      alt="A 3D model"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      disable-zoom
      auto-rotate
      shadow-intensity="1.2"
      shadow-softness="1"
      style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
    >
    </model-viewer>
  );
}

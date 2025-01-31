'use client';

import { useEffect, useState } from 'react';

export default function ModelViewer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const loadModelViewer = async () => {
      await import('@google/model-viewer');
      setMounted(true);
    };
    loadModelViewer();
  }, []);

  if (!mounted) return <div>Loading model viewer...</div>;

  return (
    <model-viewer
      src="/painting1.glb"
      ios-src="/painting1.usdz"
      ar
      camera-controls
      auto-rotate
      style={{ width: '100%', height: '100%' }}
    />
  );
}
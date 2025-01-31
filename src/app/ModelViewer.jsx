'use client';

import { useEffect } from 'react';
import '@google/model-viewer';

export default function ModelViewer() {
  useEffect(() => {
    // Ensure model-viewer loads only on client
    window.LitElementPrefix = 'production';
  }, []);

  return (
    <model-viewer
      src="/painting1.glb"
      ios-src="/painting1.usdz"
      ar
      camera-controls
      auto-rotate
      style={{ width: '100%', height: '100%' }}
      loading="eager"
      reveal="auto"
      camera-orbit="0deg 75deg 105%"
      exposure="0.5"
      shadow-intensity="1"
      disable-zoom
    />
  );
}
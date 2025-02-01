"use client";
import { useEffect, useRef, useState } from 'react';
import ModelViewer from './ModelViewer';

export default function ExplodedViewer({ }) {
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
        <>
            <model-viewer
                ref={modelViewerRef}
                src='models/engine.glb'
                ios-src='models/engine.usdz'
                alt="A 3D model"
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                disable-zoom
                autoplay
                //   auto-rotate
                shadow-intensity="1.2"
                shadow-softness="1"
                // camera-orbit="175.5deg 72.59deg 135m"
                style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
            >

            </model-viewer>
        </>
    );
}

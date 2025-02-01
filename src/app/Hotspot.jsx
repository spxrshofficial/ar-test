"use client";

import { useEffect, useRef, useState } from 'react';

export default function HotspotViewer({ model }) {
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
            src='models/backpack.glb'
            ios-src='models/backpack.usdz'
            alt="A 3D model"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            disable-zoom
            //   auto-rotate
            shadow-intensity="1.2"
            shadow-softness="1"
            camera-orbit="175.5deg 72.59deg 135m"
            style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
        >
            <button className="Hotspot" slot="hotspot-1" data-position="-2.6054510755500617m 34.88931307403354m -10.345670906435892m" data-normal="-0.27895367091912754m 0.7137696136742729m -0.642431154347314m" data-visibility-attribute="visible">
            <div class="HotspotAnnotation">Gold Rims</div>
            </button>

            <button class="Hotspot" slot="hotspot-3" data-position="-10.842901010312108m 7.19093991188403m -13.864532760254887m" data-normal="-0.15227132426982543m 0.007326630724955808m -0.9883115724746594m" data-visibility-attribute="visible">
                <div class="HotspotAnnotation">Waterproof Leather</div></button>

            <div class="progress-bar hide" slot="progress-bar">
                <div class="update-bar"></div>
            </div>
        </model-viewer>
    );
}

'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import HotspotViewer from './Hotspot';
import ExplodedViewer from './Exploded';

const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});



export default function Home() {

  const ARModels = [
    {
      name: 'Chair',
      src: 'models/chair.glb',
      iosSrc: 'models/chair.usdz',
      placement: 'floor',
    },
    {
      name: 'Sculpture',
      src: 'models/sculpture.glb',
      iosSrc: 'models/sculpture.usdz',
      placement: 'floor',
    },
    {
      name: 'Backpack',
      src: 'models/backpack.glb',
      iosSrc: 'models/backpack.usdz',
      placement: 'floor',
    },
  ];

  const [heroModel, setHeroModel] = useState(ARModels[0]);

  return (
    <main className=" min-h-screen bg-gray-900 w-full mx-auto">
      <section id='hero' className="bg-gradient-to-br from-cyan-900 to-cyan-300  h-screen flex sm:flex-row flex-col items-center justify-center sm:px-[5rem] px-5">
        <div className='sm:w-1/2 w-full sm:h-full h-1/2  sm:items-center sm:px-10 px-2 justify-center flex flex-col'>
          <h1 className='text-3xl font-bold w-full sm:text-left text-left'>3D object showcase in AR</h1>
          <h2 className='text-md sm:text-left w-full text-left pt-2'>Immerse yourself in interactive 3D models using Model Viewer by Google.
            Explore product visualization, architecture previews, and more—right in your browser.
            <br />
            <br />
            For AR support, open this website on a mobile device, iPad or a VR headset.</h2>
          <div className='w-full flex items-center justify-start gap-4 pt-5'>
            {ARModels.map((model, index) => (
              <button key={index} onClick={() => setHeroModel(model)} className='bg-white/40 p-4 rounded-lg'>
                {model.name}
              </button>
            ))}
          </div>
        </div>
        <div className='sm:w-1/2 w-full sm:h-full  h-1/2 sm:pt-20 pt-2 pb-20 sm:px-2 px-20'><ModelViewer model={heroModel} /></div>
      </section>
      <section id='usecases' className='h-screen flex sm:flex-row flex-col items-center justify-center sm:px-[5rem] px-5'>
        <div className='sm:w-1/2 w-full h-full  sm:items-center sm:px-10 px-2 justify-center flex flex-col'>
          <h1 className='text-3xl font-bold w-full sm:text-left text-left'>Add hotspots to your 3D models</h1>
          <h2 className='text-md sm:text-left w-full text-left pt-2'>
            Adding hotspots to your 3D models allows users to navigate directly to specific locations within the 3D component and learn more about the product.</h2>
        </div>
        <div className='sm:w-1/2 w-full  h-full'>
        <HotspotViewer />
        </div>
      </section>
      <section id='usecases2' className='h-screen flex sm:flex-row flex-col items-center justify-center sm:px-[5rem] px-5'>
        <div className='sm:w-1/2 w-full h-full  sm:items-center sm:px-10 px-2 justify-center flex flex-col'>
          <h1 className='text-3xl font-bold w-full sm:text-left text-left'>Add Animations to your 3D models</h1>
          <h2 className='text-md sm:text-left w-full text-left pt-2'>
            Show prebuild animated models to demonstrate how the product works or to display the internal mechanisms</h2>
        </div>
        <div className='sm:w-1/2 w-full  h-full'>
        <ExplodedViewer />
        </div>
      </section>
    </main>
  );
}
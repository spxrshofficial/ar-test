import dynamic from 'next/dynamic';

const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white/20 w-full h-screen">
      <ModelViewer />
    </main>
  );
}
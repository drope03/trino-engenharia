export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted={false}
        controls
      >
        <source src="/video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </main>
  );
}

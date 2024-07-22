
export default function Home() {
  return (
    <main className="bg-white w-screen h-screen">
      <div>
        <video
          className=""
          autoPlay
          loop
          muted
        >
          <source src="./public/galaxia.mp4" type="video/mp4" />
          The video is not loading
        </video>
        <p className="text-black">Hey </p>

       </div>
    </main>
  );
}

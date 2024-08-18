import FullNavBar from "./FullNavBar";
import BotonLink from "./BotonLink";
import TopBar from "./mobile/mobileTop";
import News from "./news";

export default function Main() {
  return (
    <>
      <main className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-black via-black to-cyan-800 md:w-svw md:h-svh md:relative">
        <div className="md:w-svw md:h-svh md:relative md:flex ">
          <video
            className="hidden md:block md:w-svw md:h-svh md:absolute md:object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/galaxia.mp4" type="video/mp4" />
            The video is not loading
          </video>


          <TopBar></TopBar>

          <div className="h-svh flex md:flex-row md:relative md:z-20 md:h-full md:auto-cols-max md:justify-between">
            
            <div className="md:flex md:flex-col md:relative md:w-full md:justify-between">
              <div className="p-8 md:p-20 md:w-3/3 text-sm">
                <div className="my-8 md:my-12">
                  <p className="text-white text-7xl xl:text-8xl text-bold subpixel-antialiased font-semibold">
                    Welcome to Juan's coding{" "}
                    <a className="underline decoration-sky-300">space</a>
                  </p>
                </div>
                <div className="md:mt-10">
                  <p className="text-2xl md:text-3xl text-white lg:text-4xl xl:text-6xl text-bold subpixel-antialiased lg:font-medium">
                    I'm a Software Engineer at Cetys Universidad{" "}
                  </p>
                </div>
              </div>

              <div className="hidden md:flex md:px-20 md:py-12">
                <BotonLink texto={"Contact me!"} link={"contact"} />
                <div className="w-16"></div>
                <BotonLink texto={" Proyects "} />
              </div>
            </div>
           <News></News>
          </div>
          {/* <Navbar onClack={setShowNav} state={showNav}></Navbar> */}
        </div>
      </main>
    </>
  );
}
      
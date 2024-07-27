import React from "react";
import BotonLink from "./BotonLink";

export default function MainCont() {
  return (
      <div className="flex flex-col relative w-full justify-between">

        <div className="p-20 w-3/3">   
             <div className="my-12">
              <p className="text-white text-8xl text-bold subpixel-antialiased font-semibold">Welcome to Juan's happy <a className="underline decoration-sky-300">coding space</a></p>
              </div>
              <div className="my-20">
               <p className="text-white text-6xl text-bold subpixel-antialiased font-medium">I'm a Software Engineer </p>
              </div>

        </div>

          <div className=" flex p-20">
          <BotonLink
          texto={"Contact me!"}
          link={"contact"} />
             <div className="w-16"></div>
          <BotonLink
          texto={" Proyects "} /> 
          </div>

      </div>
  );
}

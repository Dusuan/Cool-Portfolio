"use client";

import React from "react";
import MainCont from "./components/Content";
import Navbar from "./components/navbar";
import FullNavBar from "./components/FullNavBar";
import {useState} from "react"
import { BrowserRouter as Router, Link, Route  } from "react-router-dom";

export default function Home() {

  const[showNav, setShowNav] = useState(false);

  return (
    <>
    <Router>
    <main className="bg-white w-max h-max relative">
      <div className="w-svw h-svh relative flex ">
        <video
          className="w-svw h-svh absolute object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/galaxia.mp4" type="video/mp4" />
          The video is not loading
        </video>

        <div className="flex flex-row relative z-20 h-full auto-cols-max justify-between">
           <MainCont/>
    
            <div className="border backdrop-blur-sm border-white w-5/12 mx-24 mt-32 mb-24">
                <p>  </p>
            </div>  
          <FullNavBar show={showNav}/>
        </div>

        <div>
        <Navbar onClack={()=> setShowNav(!showNav)}/>
        </div>
          
      </div>
    </main>
    </Router>
    </>  
  );
}

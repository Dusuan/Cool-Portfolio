"use client";

import React from "react";
import Main from "./components/main";
import Navbar from "./components/navbar";
import FullNavBar from "./components/FullNavBar";
import BotonLink from "./components/BotonLink"; 
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <main className="bg-white w-screen h-screen relative">
        <Main></Main>
        <About></About>
      </main>
    </>
  );
}

import React from "react";
import SidebarAndContent from "./components/SidebarAndContent";

export default function Home() {
  return (
    <main className="bg-white w-max h-max relative">
      <div className="w-svw h-svh relative">
        <video
          className="w-svw h-svh absolute object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/galaxia.mp4" type="video/mp4" />
          The video is not loading
        </video>

        <SidebarAndContent />
        
      </div>
    </main>
  );
}

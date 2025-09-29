"use client";

import { useState } from "react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Fonts import */}
<link
  href="https://api.fontshare.com/v2/css?f[]=satoshi@100,200,300,400,500,600,700,800,900&display=swap"
  rel="stylesheet"
/>


      {/* Navbar */}
      <nav className="w-full bg-transparent fixed text-white px-4 py-3 flex items-center justify-between z-50">
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-bold" style={{ fontFamily: "Satoshi, sans-serif" }}>
          <h1>911</h1>
        </div>

        {/* Tagline (always visible) */}
        <div className="flex items-center gap-2 text-lg " style={{ fontFamily: "Satoshi, sans-serif" }}>
          <p className="text-[13px] tracking-tighter font-medium">The essence of emotion</p>
        </div>

        {/* Hamburger Toggle */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-white "
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 32 24" stroke="currentColor">
            <path strokeWidth={2} d="M2 8h28M2 16h28" />
          </svg>
        </button>
      </nav>

      {/* Sidebar (full-screen, slides from top) */}
      <div
        className={`fixed inset-0 bg-[#edff92] z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-y-0" : "-translate-y-full"
        } flex flex-col items-center justify-center`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 text-gray-800"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Links */}
        <div className="flex flex-col text-black items-center  " style={{fontFamily: "Satoshi, sans-serif"}}>
        <a href="#" className=""><h1 className=" font-black text-black tracking-[-0.15em] text-[120px]" style={{fontFamily: "Satoshi, sans-serif"}} onClick={() => setSidebarOpen(false)}>HOME</h1></a>
        <a href="#" className=""><h1 className=" font-black text-black tracking-[-0.15em] text-[120px]" style={{fontFamily: "Satoshi, sans-serif"}} onClick={() => setSidebarOpen(false)}>ABOUT</h1></a>
        <a href="#" className=""><h1 className=" font-black text-black tracking-[-0.15em] text-[120px]" style={{fontFamily: "Satoshi, sans-serif"}} onClick={() => setSidebarOpen(false)}>WORKS</h1></a>

        </div>
      </div>

      {/* Optional overlay behind sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}

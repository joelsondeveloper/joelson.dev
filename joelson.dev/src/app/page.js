"use client";

import { useState, useEffect } from "react";

import HomeBack from "../../public/home.png";
import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  
  return (
    <main>
      <HeroBanner />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

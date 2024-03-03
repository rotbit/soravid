import Footbar from './ui/footbar'
import Navbar from './ui/navbar'
import Hero from './ui/hero'
import Videos from "./ui/videos"
import React from 'react';

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Videos />
      <Footbar />
    </main>
  )
}
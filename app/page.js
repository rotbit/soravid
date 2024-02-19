import Footbar from './ui/footbar'
import Navbar from './ui/navbar'
import Content from './ui/content'
import React from 'react';

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Content />
      <Footbar />
    </main>
  )
}
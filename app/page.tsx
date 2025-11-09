"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Stylists from "@/components/stylists"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-neutral-950 text-neutral-50">
      <Header />
      <Hero />
      <About />
      <Stylists />
      <Gallery />
      <Footer />
    </main>
  )
}

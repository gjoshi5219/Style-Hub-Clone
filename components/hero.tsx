"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Phone } from "lucide-react"


export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-[rgba(5,0,14,1)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
  {/* Logo */}
  <div className="mb-8 inline-block">
  <svg width="250" height="250" viewBox="0 0 100 100" className="mx-auto">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#f59e0b", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#b45309", stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    {/* Optional gradient border */}
    <rect
      x="1"
      y="1"
      width="98"
      height="98"
      fill="none"
      stroke="url(#logoGradient)"
      strokeWidth="2"
      rx="6"
    />

    {/* Image fills entire area */}
    <image
      href="/logo.png"  // ✅ inside /public folder
      x="0"
      y="0"
      width="100"
      height="100"
      preserveAspectRatio="xMidYMid slice"
      style={{
        borderRadius: "6px", // soft corners (remove if you want sharp)
      }}
    />
  </svg>
</div>




        <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4 text-neutral-50">Welcome to The Style Hub</h1>
        <p className="text-xl md:text-2xl text-neutral-400 mb-8 font-light">Where Style Meets Excellence</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="bg-neutral-50 text-neutral-950 hover:bg-amber-400 px-8 py-3 text-lg text-center leading-7">
            Book Your Appointment
          </Button>
          <Button
            variant="outline"
            className="border-amber-400 hover:bg-amber-400/10 px-8 py-3 text-lg bg-transparent text-[rgba(255,214,64,1)]"
          >
            <Phone className="w-5 h-5" />
          </Button>
        </div>

        {/* Service Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          <div className="text-neutral-950 px-6 py-2 font-semibold bg-[rgba(255,216,75,1)]">Hair Styles</div>
          <div className="text-neutral-950 px-6 py-2 font-semibold bg-[rgba(255,212,57,1)]">Skin Care</div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="mx-auto block text-neutral-500 hover:text-amber-400 transition animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  )
}

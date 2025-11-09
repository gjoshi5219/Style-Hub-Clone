"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          
          <span className="font-bold text-foreground font-serif text-xl">The Style Hub</span>
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-neutral-300 hover:text-amber-400 transition">
            Home
          </Link>
          <Link href="/#about" className="text-neutral-300 hover:text-amber-400 transition">
            About
          </Link>
          <Link href="/#stylists" className="text-neutral-300 hover:text-amber-400 transition">
            Stylists
          </Link>
          <Link href="/#contact" className="text-neutral-300 hover:text-amber-400 transition">
            Contact
          </Link>
        </nav>

        <div className="flex gap-3">
          <a href="https://wa.me/917018330781" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="border-neutral-700 text-neutral-300 hover:bg-neutral-900 bg-transparent hover:text-amber-400"
            >
              <Phone className="w-4 h-4" />
            </Button>
          </a>
          <Link href="/book-now">
            <Button className="text-neutral-950 hover:bg-amber-500 bg-[rgba(255,211,53,1)]">Book Now</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

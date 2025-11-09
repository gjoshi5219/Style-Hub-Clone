"use client"

import Link from "next/link"
import { Instagram, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-amber-500/10 py-16 bg-[rgba(0,1,24,1)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-3xl font-serif font-bold mb-4 text-[rgba(255,211,53,1)]">The Style Hub</div>
            <p className="text-neutral-400">Where Style Meets Excellence</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-neutral-50 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-neutral-400 hover:text-amber-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#stylists" className="text-neutral-400 hover:text-amber-400 transition">
                  Our Stylists
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-amber-400 transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-neutral-50 mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="tel:7018330781"
                className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 transition"
              >
                <Phone className="w-4 h-4" />
                +91 701-833-0781
              </a>
              <a href="#" className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 transition">
                <Instagram className="w-4 h-4" />
                @thestylehub
              </a>
              <a href="#" className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 transition">
                <MapPin className="w-4 h-4" />
                Visit Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-500/10 pt-8 text-center text-neutral-500">
          <p>© 2024 The Style Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

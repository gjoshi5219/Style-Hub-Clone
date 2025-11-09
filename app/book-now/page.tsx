"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hello! I would like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nService: ${formData.service}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/917018330781?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
    setSubmitted(true)

    setTimeout(() => {
      setFormData({ name: "", phone: "", date: "", service: "" })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <main className="bg-neutral-950 text-neutral-50 min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-2xl">
          <h1 className="text-5xl font-bold text-center mb-12 font-serif">Book an Appointment</h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/special-offers.pdf" target="_blank" rel="noopener noreferrer">
              <button className="w-full px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300">
                ✨ Special Offer ✨
              </button>
            </a>
            <Link href="/#stylists">
              <button className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
                📋 View All Services
              </button>
            </Link>
          </div>

          <div className="bg-slate-900/50 backdrop-blur rounded-xl p-8 border border-amber-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-6 py-4 text-neutral-50 placeholder-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-6 py-4 text-neutral-50 placeholder-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
              />

              <input
                type="text"
                name="date"
                placeholder="dd/mm/yyyy"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-6 py-4 text-neutral-50 placeholder-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-6 py-4 text-neutral-50 placeholder-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
              >
                <option value="" disabled>
                  Select a Service
                </option>
                <option value="Hair Styling">Hair Styling</option>
                <option value="Hair Coloring">Hair Coloring</option>
                <option value="Makeup">Makeup</option>
                <option value="Hair Treatment">Hair Treatment</option>
                <option value="Bridal Package">Bridal Package</option>
              </select>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
              >
                {submitted ? "✓ Message Sent! Opening WhatsApp..." : "Book Appointment"}
              </button>
            </form>
          </div>

          <p className="text-center text-neutral-500 mt-8 text-sm">
            We'll contact you via WhatsApp to confirm your appointment
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}

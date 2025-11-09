"use client"

interface Stylist {
  id: number
  name: string
  title: string
  description: string
  image: string
}

const stylists: Stylist[] = [
  {
    id: 1,
    name: "Farhan Sheikh",
    title: "Owner, Hair-Stylist/Colorist",
    description: "We bring years of expertise and a passion for hair, crafting your best look with natural products.",
    image: "/professional-hair-stylist-portrait.jpg",
  },
  {
    id: 2,
    name: "Sachin",
    title: "Hair-Stylist/Colorist",
    description: "Custom color treatments that maintain shine, blend roots, and cover grey with precision.",
    image: "/professional-colorist-at-work.jpg",
  },
  {
    id: 3,
    name: "Shahbaaz",
    title: "Makeup Artist",
    description: "Expert in bridal and fashion makeup, creating stunning looks for every occasion.",
    image: "/professional-makeup-artist-portfolio.jpg",
  },
]

export default function Stylists() {
  return (
    <section id="stylists" className="py-20 md:py-32 bg-[rgba(1,0,17,1)]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-16 text-center">Our Stylists</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stylists.map((stylist) => (
            <div key={stylist.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={stylist.image || "/placeholder.svg"}
                  alt={stylist.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/20 transition"></div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-neutral-50">{stylist.name}</h3>
                <p className="font-semibold text-sm text-[rgba(255,215,73,1)]">{stylist.title}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{stylist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

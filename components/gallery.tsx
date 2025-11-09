"use client"

export default function Gallery() {
  const galleryItems = [
    { id: 1, image: "/hair-styling-transformation.jpg" },
    { id: 2, image: "/color-treatment-result.jpg" },
    { id: 3, image: "/bridal-makeup-look.jpg" },
    { id: 4, image: "/professional-hair-cut.jpg" },
    { id: 5, image: "/salon-work-in-progress.jpg" },
    { id: 6, image: "/luxury-salon-styling.jpg" },
  ]

  const duplicatedItems = [...galleryItems, ...galleryItems]

  return (
    <section className="py-20 md:py-32 border-t border-amber-500/10 bg-[rgba(0,0,22,1)]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-16 text-center">Our Work</h2>

        <div className="relative w-full overflow-hidden">
          <style>{`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            
            .carousel-track {
              display: flex;
              animation: slide 30s linear infinite;
            }
            
            .carousel-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="carousel-track">
            {duplicatedItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg h-64 md:h-72 cursor-pointer flex-shrink-0"
                style={{ width: "calc(33.333% - 1rem)" }}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Gallery item ${item.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/40 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

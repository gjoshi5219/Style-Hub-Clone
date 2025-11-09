"use client"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-amber-500/10 bg-[rgba(6,0,25,1)]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-16 text-center">About Us</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
         <div className="relative">
  <video
    src="/salon-video.mp4"    // ✅ replace with your video file name (in /public)
    autoPlay
    loop
    muted
    playsInline
    className="w-full rounded-lg object-cover"
  ></video>

  {/* Border overlay */}
  <div className="absolute inset-0 border border-amber-500/30 rounded-lg"></div>
</div>


          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-neutral-300 leading-relaxed">
              The Style Hub is more than just a salon – it's a destination for transformation and self-expression. Our
              team of skilled professionals is dedicated to helping you look and feel your absolute best.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              With years of experience and a passion for beauty, we offer a wide range of services tailored to your
              unique style and preferences. From cutting-edge hair treatments to expert styling, we're here to enhance
              your natural beauty.
            </p>
            <div className="pt-6 border-t border-amber-500/20">
              <p className="font-semibold text-[rgba(255,215,71,1)]">✓ Expert Stylists</p>
              <p className="font-semibold text-[rgba(255,216,74,1)]">✓ Premium Products</p>
              <p className="font-semibold text-[rgba(255,218,83,1)]">✓ Personalized Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

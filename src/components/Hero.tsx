export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 sm:px-6 bg-gradient-to-b from-cream-100 to-cream-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-500 leading-tight text-balance">
          Home reset services for the spaces you keep meaning to tackle.
        </h1>

        <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-navy-400 leading-relaxed max-w-2xl mx-auto text-balance">
          From laundry piles and fridge deep cleans to full kitchen, bathroom, and room resets,
          Spectrum Home Reset helps busy households clear the overwhelm and finish the project —
          without judgment.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#request"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-hover text-center"
          >
            Request a Reset
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-navy-300 text-navy-500 hover:border-sage-400 hover:text-sage-500 font-semibold text-base transition-all duration-200 text-center"
          >
            View Services
          </a>
        </div>

        <p className="mt-8 text-sm text-navy-400/80 font-medium italic">
          No shame. No judgment. Just practical help getting your home back to manageable.
        </p>
      </div>
    </section>
  );
}

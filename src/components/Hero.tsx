export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 bg-gradient-to-b from-cream-100 to-cream-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">

          {/* Left: text content */}
          <div className="flex-1 flex flex-col items-start md:max-w-[48%]">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] lg:text-5xl font-semibold text-navy-500 leading-tight">
              Home reset services for the spaces you keep meaning to tackle.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-navy-400 leading-relaxed">
              From laundry piles and fridge deep cleans to full kitchen, bathroom, and room resets,
              Spectrum Home Reset helps busy households clear the overwhelm and finish the project —
              without judgment.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#request"
                className="px-7 py-3.5 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-hover text-center"
              >
                Request a Reset
              </a>
              <a
                href="#services"
                className="px-7 py-3.5 rounded-xl bg-cream-200 hover:bg-cream-300 border border-cream-300 text-navy-500 font-semibold text-base transition-all duration-200 text-center"
              >
                View Services
              </a>
            </div>

            <p className="mt-6 text-sm text-navy-400/75 italic">
              No shame. No judgment. Just practical help getting your home back to manageable.
            </p>
          </div>

          {/* Right: illustration */}
          <div className="w-full md:w-[52%] flex items-center justify-center">
            <img
              src="/images/80d31a9d-2499-49c2-9d3e-65e6503f51e9.png"
              alt="Spectrum Home Reset helper and client sorting household items."
              className="w-full h-auto object-contain max-h-[520px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

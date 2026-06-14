import { Heart, Home, Package } from 'lucide-react';

const chips = [
  {
    icon: Heart,
    title: 'Judgment-free',
    text: 'No shame. Just practical support.',
  },
  {
    icon: Home,
    title: 'Project-based help',
    text: 'One space, room, or priority at a time.',
  },
  {
    icon: Package,
    title: 'Donation-friendly resets',
    text: 'Help sorting and removing donation piles.',
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 sm:px-6 bg-gradient-to-b from-cream-100 to-cream-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left: text content */}
          <div className="flex flex-col items-start">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-navy-500 leading-tight text-balance">
              Home reset services for the spaces you keep meaning to tackle.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-navy-400 leading-relaxed">
              From laundry piles and fridge deep cleans to full kitchen, bathroom, and room resets,
              Spectrum Home Reset helps busy households clear the overwhelm and finish the project —
              without judgment.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#request"
                className="px-8 py-3.5 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-hover text-center"
              >
                Request a Reset
              </a>
              <a
                href="#services"
                className="px-8 py-3.5 rounded-xl bg-cream-200 hover:bg-cream-300 border border-cream-300 text-navy-500 hover:text-navy-600 font-semibold text-base transition-all duration-200 text-center"
              >
                View Services
              </a>
            </div>

            <p className="mt-5 text-sm text-navy-400/80 font-medium italic">
              No shame. No judgment. Just practical help getting your home back to manageable.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              {chips.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-white border border-cream-200 shadow-soft"
                >
                  <span className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-sage-600" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy-500">{title}</div>
                    <div className="text-xs text-navy-400 mt-0.5 leading-snug">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: illustration */}
          <div className="flex items-center justify-center order-last md:order-none">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cream-200 to-sage-50 opacity-60 blur-2xl scale-95" />
              <img
                src="/images/ff2edf4a-0d07-4865-b6e4-f921255b894a.png"
                alt="Spectrum Home Reset helper and client sorting household items."
                className="relative w-full h-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

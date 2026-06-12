import { Check } from 'lucide-react';

const regularItems = [
  'Cleans surfaces and routine areas',
  'Often expects pre-tidying',
  'Usually whole-home or recurring',
];

const resetItems = [
  'Focuses on one room, pile, appliance, or project',
  'Helps with tidying, sorting, cleaning, and resetting',
  'Can include donation drop-off for approved items',
];

export default function Explanation() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-500 leading-tight">
            Not quite a maid service. Not full-home organizing. Something more practical.
          </h2>
          <p className="mt-5 text-base md:text-lg text-navy-400 leading-relaxed">
            Spectrum Home Reset focuses on the rooms, piles, appliances, and household projects
            that need more than a quick surface clean. You choose the space or priority. We help
            sort, clean, reset, and follow through so the project actually gets finished.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Regular Cleaning */}
          <div className="rounded-2xl border border-cream-300 bg-cream-50 p-6 md:p-8">
            <h3 className="font-serif text-xl font-semibold text-navy-400 mb-5">
              Regular Cleaning
            </h3>
            <ul className="space-y-3">
              {regularItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-400">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-cream-200 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-navy-300" />
                  </span>
                  <span className="text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Home Reset */}
          <div className="rounded-2xl border border-sage-200 bg-sage-50 p-6 md:p-8">
            <h3 className="font-serif text-xl font-semibold text-sage-600 mb-5">
              Home Reset
            </h3>
            <ul className="space-y-3">
              {resetItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-500">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-sage-200 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-sage-600" />
                  </span>
                  <span className="text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-sm md:text-base text-navy-400/80 italic font-medium">
          The goal is to support you without taking over — helping your home feel manageable again, on your terms.
        </p>
      </div>
    </section>
  );
}

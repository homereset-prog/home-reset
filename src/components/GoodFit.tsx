import { Check, X } from 'lucide-react';

const goodFit = [
  'Laundry piles',
  'Fridge cleanouts',
  'Kitchen or bathroom resets',
  "Kids' rooms",
  'Pantry or closet projects',
  'Move-in boxes',
  'Donation piles',
  'Post-remodel room resets',
  'Busy households needing catch-up help',
];

const notOffered = [
  'Biohazards',
  'Mold remediation',
  'Pest-infested areas',
  'Heavy furniture hauling',
  'Hazardous materials',
  'Large-scale junk removal',
  'Unsafe working conditions',
  'Active construction-site cleanup',
  'Lead/asbestos/hazardous dust cleanup',
];

export default function GoodFit() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-500">
            Is Spectrum Home Reset a good fit?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Good fit */}
          <div className="rounded-2xl bg-sage-50 border border-sage-100 p-6 md:p-8">
            <h3 className="font-serif text-xl font-semibold text-sage-600 mb-5">
              Good fit
            </h3>
            <ul className="space-y-2.5">
              {goodFit.map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy-500">
                  <span className="w-5 h-5 rounded-full bg-sage-200 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-sage-600" />
                  </span>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not offered */}
          <div className="rounded-2xl bg-cream-50 border border-cream-200 p-6 md:p-8">
            <h3 className="font-serif text-xl font-semibold text-navy-400 mb-5">
              Not offered
            </h3>
            <ul className="space-y-2.5">
              {notOffered.map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy-400">
                  <span className="w-5 h-5 rounded-full bg-cream-200 flex items-center justify-center flex-shrink-0">
                    <X size={12} className="text-coral-400" />
                  </span>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

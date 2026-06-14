import { CheckCircle, AlertTriangle, Shirt, Refrigerator, Bath, Bed, Archive, Package, Heart, Paintbrush, Clock, Bug, Armchair, AlertCircle, Trash2, HardHat, ShieldAlert, Sparkles } from 'lucide-react';

const goodFitItems = [
  { label: 'Laundry piles', icon: Shirt },
  { label: 'Fridge cleanouts', icon: Refrigerator },
  { label: 'Kitchen or bathroom resets', icon: Bath },
  { label: "Kids' rooms", icon: Bed },
  { label: 'Pantry or closet projects', icon: Archive },
  { label: 'Move-in boxes', icon: Package },
  { label: 'Donation piles', icon: Heart },
  { label: 'Post-remodel room resets', icon: Paintbrush },
  { label: 'Busy households needing catch-up help', icon: Clock },
];

const notOfferedItems = [
  { label: 'Biohazards', icon: AlertTriangle },
  { label: 'Mold remediation', icon: ShieldAlert },
  { label: 'Pest-infested areas', icon: Bug },
  { label: 'Heavy furniture hauling', icon: Armchair },
  { label: 'Hazardous materials', icon: AlertCircle },
  { label: 'Large-scale junk removal', icon: Trash2 },
  { label: 'Unsafe working conditions', icon: AlertTriangle },
  { label: 'Active construction-site cleanup', icon: HardHat },
  { label: 'Lead/asbestos/hazardous dust cleanup', icon: ShieldAlert },
];

export default function GoodFit() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-500 mb-4">
            Is Spectrum Home Reset a good fit?
          </h2>
          <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-2xl mx-auto">
            Spectrum Home Reset specializes in practical, project-based help for everyday household overwhelm. Here's a quick guide to what we do — and what we don't.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {/* Good fit */}
          <div className="rounded-2xl bg-sage-50 border border-sage-200 shadow-soft p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-sage-600 flex items-center justify-center flex-shrink-0">
                <Sparkles size={20} className="text-white" />
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-sage-700">
                Good fit
              </h3>
            </div>
            <ul className="space-y-3">
              {goodFitItems.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/70 border border-sage-100 text-navy-500">
                    <span className="w-7 h-7 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-sage-600" />
                    </span>
                    <span className="text-sm md:text-base font-medium">{label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Not offered */}
          <div className="rounded-2xl bg-coral-50 border border-coral-100 shadow-soft p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-coral-500 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={20} className="text-white" />
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-coral-600">
                Not offered
              </h3>
            </div>
            <ul className="space-y-3">
              {notOfferedItems.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/70 border border-coral-100 text-navy-500">
                    <span className="w-7 h-7 rounded-full bg-coral-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-coral-500" />
                    </span>
                    <span className="text-sm md:text-base font-medium">{label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-navy-400 mb-4 max-w-lg mx-auto">
            Not sure if your project fits? Reach out and ask — we'll let you know if it sounds like a good match.
          </p>
          <a
            href="#request"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <CheckCircle size={18} />
            Request a Reset
          </a>
        </div>
      </div>
    </section>
  );
}

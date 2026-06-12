import { ShieldCheck } from 'lucide-react';

const points = [
  'Nothing is thrown away or donated without your approval.',
  'You decide what stays, what goes, and what needs extra attention.',
  'We can follow your priority note or help identify the best place to start.',
  'The goal is not perfection. The goal is relief, function, and a space that feels manageable again.',
];

export default function ControlTrust() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="flex-shrink-0 flex flex-col items-center md:items-start">
            <div className="w-14 h-14 rounded-2xl bg-sage-50 flex items-center justify-center text-sage-500 shadow-soft">
              <ShieldCheck size={28} />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-500 mb-8">
              You stay in control.
            </h2>
            <ul className="space-y-5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-sage-400 flex-shrink-0" />
                  <p className="text-base md:text-lg text-navy-400 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin } from 'lucide-react';

export default function ServiceArea() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 bg-cream-100">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-12 h-12 rounded-2xl bg-sage-50 flex items-center justify-center text-sage-500 mx-auto mb-5 shadow-soft">
          <MapPin size={24} />
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-500 mb-4">
          Service Area
        </h2>
        <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-xl mx-auto">
          Spectrum Home Reset serves local Colorado households. Specific service areas, travel
          availability, and any travel fees can be confirmed before booking.
        </p>
      </div>
    </section>
  );
}

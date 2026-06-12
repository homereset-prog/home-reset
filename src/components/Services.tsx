import {
  Shirt,
  UtensilsCrossed,
  Refrigerator,
  Bath,
  BedDouble,
  Package,
  Hammer,
  RefreshCw,
  CalendarClock,
  Truck,
  Info,
} from 'lucide-react';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const projectResets: Service[] = [
  {
    icon: <Shirt size={22} />,
    title: 'Laundry Reset',
    description:
      'For laundry piles, baskets that never get emptied, linens that need a home, seasonal clothing, folding, hanging, and laundry room cleanup.',
  },
  {
    icon: <UtensilsCrossed size={22} />,
    title: 'Kitchen Reset',
    description:
      'For counters, cabinets, pantry cleanouts, under-sink areas, appliance wipe-downs, and full kitchen catch-up projects.',
  },
  {
    icon: <Refrigerator size={22} />,
    title: 'Fridge & Freezer Deep Clean',
    description:
      'Expired food removal, shelf and drawer cleaning, wipe-downs, and a fresh restart for the appliance everyone avoids.',
  },
  {
    icon: <Bath size={22} />,
    title: 'Bathroom Reset',
    description:
      'Detailed bathroom cleaning, shower/tub refresh, vanity cleanout, product sorting, linen reset, floors, and surfaces.',
  },
  {
    icon: <BedDouble size={22} />,
    title: 'Room Rescue',
    description:
      "For kids' rooms, bedrooms, playrooms, guest rooms, closets, or any space that needs a focused reset.",
  },
  {
    icon: <Package size={22} />,
    title: 'Move-In / Box Reset',
    description:
      'For basement boxes, move-in overwhelm, unpacking help, sorting, breaking down boxes, and making storage areas usable again.',
  },
  {
    icon: <Hammer size={22} />,
    title: 'Post-Remodel Cleanup & Reset',
    description:
      'After small remodels, repairs, painting, or home projects, this service helps reset the room so it feels clean, usable, and put back together again. Good for kitchens, bathrooms, bedrooms, living areas, and spaces disrupted by completed home projects.',
  },
];

const ongoingSupport: Service[] = [
  {
    icon: <RefreshCw size={22} />,
    title: 'Quick Household Catch-Up',
    description:
      'A practical reset visit for visible clutter, clearing surfaces, switching laundry, putting items away, and helping the home feel manageable again.',
  },
  {
    icon: <CalendarClock size={22} />,
    title: 'Biweekly / Monthly Home Reset',
    description:
      'Recurring reset visits help keep the home from sliding back into overwhelm. Each visit focuses on agreed priorities within the scheduled time, such as kitchen catch-up, laundry support, bathroom refresh, visible clutter, or one rotating problem area.',
  },
];

const addons: Service[] = [
  {
    icon: <Truck size={22} />,
    title: 'Donation Drop-Off Add-On',
    description:
      "Approved donation items can be bagged and taken off-site so the project is not left half-finished.",
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl border border-cream-200 shadow-soft p-5 md:p-6 flex flex-col gap-3 hover:shadow-card transition-shadow duration-200">
      <div className="w-10 h-10 rounded-xl bg-sage-50 flex items-center justify-center text-sage-500 flex-shrink-0">
        {service.icon}
      </div>
      <h4 className="font-serif text-base md:text-lg font-semibold text-navy-500">
        {service.title}
      </h4>
      <p className="text-sm md:text-base text-navy-400 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

function AddonCard({ service }: { service: Service }) {
  return (
    <div className="bg-warm-100 rounded-2xl border border-coral-100 shadow-soft p-5 md:p-6 flex flex-col gap-3">
      <div className="w-10 h-10 rounded-xl bg-coral-50 flex items-center justify-center text-coral-400 flex-shrink-0">
        {service.icon}
      </div>
      <h4 className="font-serif text-base md:text-lg font-semibold text-navy-500">
        {service.title}
      </h4>
      <p className="text-sm md:text-base text-navy-400 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 bg-cream-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-500">
            Choose the reset that fits your home.
          </h2>
          <p className="mt-4 text-base md:text-lg text-navy-400 leading-relaxed">
            Every service is project-based — you pick the space or priority, and we help tackle it start to finish.
          </p>
        </div>

        {/* Group 1 */}
        <div className="mb-12 md:mb-16">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy-400 mb-6 md:mb-8 flex items-center gap-3">
            <span className="w-1 h-7 rounded-full bg-sage-400 inline-block" />
            Project-Based Resets
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projectResets.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>

        {/* Group 2 */}
        <div className="mb-12 md:mb-16">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy-400 mb-6 md:mb-8 flex items-center gap-3">
            <span className="w-1 h-7 rounded-full bg-coral-300 inline-block" />
            Ongoing Support
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {ongoingSupport.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>

        {/* Group 3 */}
        <div className="mb-10 md:mb-12">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy-400 mb-6 md:mb-8 flex items-center gap-3">
            <span className="w-1 h-7 rounded-full bg-warm-300 inline-block" />
            Add-On
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {addons.map((s) => (
              <AddonCard key={s.title} service={s} />
            ))}
          </div>
        </div>

        {/* Note card */}
        <div className="bg-white rounded-2xl border border-cream-200 shadow-soft p-6 md:p-8 mt-4">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-cream-200 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Info size={16} className="text-navy-400" />
            </div>
            <h4 className="font-serif text-lg font-semibold text-navy-500">
              Helpful service notes
            </h4>
          </div>
          <ul className="space-y-3 text-sm md:text-base text-navy-400 leading-relaxed pl-11">
            <li>
              Post-remodel reset is intended for completed small remodels, repairs, painting, or
              home projects. It is not intended for heavy construction cleanup, hazardous dust
              removal, mold/asbestos/lead remediation, large debris hauling, or unsafe active job
              sites.
            </li>
            <li>
              Recurring reset visits are available after an initial consultation or first reset
              session. They are not unlimited whole-house deep cleaning unless specifically quoted.
            </li>
            <li>
              Donation drop-off is available only for approved household items and depends on item
              type, volume, vehicle space, and local donation center rules. Nothing is removed
              without client approval.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

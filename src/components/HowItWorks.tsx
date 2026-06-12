const steps = [
  {
    number: '01',
    title: 'Send a request',
    description: 'Fill out the short request form with your contact info and a little about your home.',
  },
  {
    number: '02',
    title: 'Tell us what needs help',
    description: 'Describe the space or project — laundry pile, fridge, kitchen, a whole room, or something else.',
  },
  {
    number: '03',
    title: 'Get a simple follow-up and estimate',
    description: "We'll follow up to confirm details and give you a straightforward estimate before anything is scheduled.",
  },
  {
    number: '04',
    title: 'Schedule your reset',
    description: "Once you're ready, we'll pick a time that works and show up prepared to help — no judgment, no hassle.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 bg-cream-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-500">
            How It Works
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl shadow-soft p-6 md:p-7 flex flex-col gap-4"
            >
              {/* connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-sage-100 z-0 -translate-y-px" style={{ width: 'calc(100% - 3rem)', left: 'calc(100% + 0px)' }} />
              )}
              <span className="font-serif text-3xl font-bold text-sage-200 select-none">
                {step.number}
              </span>
              <h3 className="font-serif text-base md:text-lg font-semibold text-navy-500">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-navy-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

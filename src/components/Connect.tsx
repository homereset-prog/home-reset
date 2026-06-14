import { ExternalLink, Phone, Mail } from 'lucide-react';

const actions = [
  {
    label: 'Request a Reset',
    description: 'Tell us what kind of reset you need.',
    href: '#request',
    icon: <ExternalLink size={20} />,
  },
  {
    label: 'Call or Text',
    description: '720-778-0980',
    href: 'tel:+17207780980',
    icon: <Phone size={20} />,
  },
  {
    label: 'Email',
    description: 'spectrumhomereset@gmail.com',
    href: 'mailto:spectrumhomereset@gmail.com',
    icon: <Mail size={20} />,
  },
];

export default function Connect() {
  return (
    <section id="connect" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-500 mb-3">
          Connect with Spectrum Home Reset
        </h2>
        <p className="text-base md:text-lg text-navy-400 leading-relaxed mb-10">
          Request a reset, ask a question, or reach out directly.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="flex flex-col items-center text-center gap-3 px-6 py-6 rounded-xl bg-white border border-cream-200 shadow-soft hover:shadow-card hover:border-cream-300 transition-all duration-200"
            >
              <span className="flex-shrink-0 text-sage-600">{action.icon}</span>
              <div>
                <div className="font-semibold text-sm text-navy-500">{action.label}</div>
                <div className="text-sm text-navy-400 mt-1">{action.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

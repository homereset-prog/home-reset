import { ExternalLink, Phone, Mail, DollarSign } from 'lucide-react';

const FORM_DIRECT = 'https://docs.google.com/forms/d/e/1FAIpQLSeHkE6yR0ZedJcaKDQ-ejIFIIRQ44DYvTDqUCJdKFOLvZXXyg/viewform';

type ConnectAction = {
  label: string;
  href: string;
  icon: React.ReactNode;
  variant: 'primary' | 'secondary' | 'neutral';
  note?: string;
};

const actions: ConnectAction[] = [
  {
    label: 'Request a Reset',
    href: FORM_DIRECT,
    icon: <ExternalLink size={18} />,
    variant: 'primary',
  },
  {
    label: 'Visit Website',
    href: '#home',
    icon: <ExternalLink size={18} />,
    variant: 'secondary',
  },
  {
    label: 'Call or Text',
    href: 'tel:+1',
    icon: <Phone size={18} />,
    variant: 'neutral',
    note: 'Google Voice number — confirmed at booking',
  },
  {
    label: 'Email',
    href: 'mailto:spectrumhomereset@gmail.com',
    icon: <Mail size={18} />,
    variant: 'neutral',
    note: 'Business email — confirmed at booking',
  },
  {
    label: 'Pay with Venmo',
    href: 'https://venmo.com',
    icon: <DollarSign size={18} />,
    variant: 'neutral',
    note: 'After confirming service details',
  },
  {
    label: 'Pay with Cash App',
    href: 'https://cash.app',
    icon: <DollarSign size={18} />,
    variant: 'neutral',
    note: 'After confirming service details',
  },
];

const variantClasses: Record<ConnectAction['variant'], string> = {
  primary: 'bg-sage-600 hover:bg-sage-700 text-white shadow-md hover:shadow-hover',
  secondary: 'bg-navy-500 hover:bg-navy-600 text-white shadow-md hover:shadow-hover',
  neutral:
    'bg-white hover:bg-cream-100 text-navy-500 border border-cream-200 shadow-soft hover:shadow-card',
};

export default function Connect() {
  return (
    <section id="connect" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-500 mb-3">
          Connect with Spectrum Home Reset
        </h2>
        <p className="text-base md:text-lg text-navy-400 leading-relaxed mb-10">
          Request a reset, ask a question, or make a payment after your service.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 md:gap-4 text-left mb-8">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl font-semibold text-sm transition-all duration-200 ${variantClasses[action.variant]}`}
            >
              <span className="flex-shrink-0">{action.icon}</span>
              <div>
                <div>{action.label}</div>
                {action.note && (
                  <div className="text-xs font-normal opacity-70 mt-0.5">{action.note}</div>
                )}
              </div>
            </a>
          ))}
        </div>

        <p className="text-sm text-navy-400/70 italic">
          Please only send payment after confirming service details with Spectrum Home Reset.
        </p>
      </div>
    </section>
  );
}

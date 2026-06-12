import { ExternalLink } from 'lucide-react';

const FORM_DIRECT = 'https://docs.google.com/forms/d/e/1FAIpQLSeHkE6yR0ZedJcaKDQ-ejIFIIRQ44DYvTDqUCJdKFOLvZXXyg/viewform';
const FORM_EMBED = 'https://docs.google.com/forms/d/e/1FAIpQLSeHkE6yR0ZedJcaKDQ-ejIFIIRQ44DYvTDqUCJdKFOLvZXXyg/viewform?embedded=true';

export default function RequestForm() {
  return (
    <section id="request" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-500 mb-4">
            Request a Reset
          </h2>
          <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-xl mx-auto">
            Tell us what kind of reset you need, how soon you need help, and the best way to
            contact you. We'll follow up with next steps.
          </p>
        </div>

        {/* Embedded form */}
        <div className="rounded-2xl overflow-hidden shadow-card border border-cream-200 bg-cream-50 mb-6">
          <iframe
            src={FORM_EMBED}
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Spectrum Home Reset Request Form"
            className="block w-full"
            style={{ minHeight: '600px' }}
          >
            Loading form…
          </iframe>
        </div>

        {/* Fallback button */}
        <div className="text-center">
          <a
            href={FORM_DIRECT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-hover"
          >
            Open Request Form
            <ExternalLink size={16} />
          </a>
          <p className="mt-3 text-sm text-navy-400/70">
            The form will open in Google Forms. Responses go directly to Spectrum Home Reset.
          </p>
        </div>
      </div>
    </section>
  );
}

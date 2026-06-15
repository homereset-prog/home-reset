import { ExternalLink, ClipboardList, ImagePlus } from 'lucide-react';

const FORM_DIRECT = 'https://docs.google.com/forms/d/e/1FAIpQLSeHkE6yR0ZedJcaKDQ-ejIFIIRQ44DYvTDqUCJdKFOLvZXXyg/viewform';

export default function RequestForm() {
  return (
    <section id="request" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-500 mb-4">
            Request a Reset
          </h2>
          <p className="text-base md:text-lg text-navy-400 leading-relaxed max-w-xl mx-auto">
            Tell us what kind of reset you need, how soon you need help, and the best way to
            contact you. We'll follow up with next steps.
          </p>
        </div>

        <div className="rounded-2xl border border-cream-200 bg-cream-50 shadow-card p-8 md:p-10">
          <div className="flex items-start gap-4 mb-6">
            <span className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
              <ClipboardList size={24} className="text-sage-600" />
            </span>
            <div>
              <h3 className="font-serif text-xl font-semibold text-navy-500 mb-1">
                Spectrum Home Reset — Service Request Form
              </h3>
              <p className="text-sm text-navy-400 leading-relaxed">
                Tell us what kind of home reset, detailed cleaning, or project help you need. You
                may also upload photos through the form to help us better understand the space.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-cream-200 text-navy-400 text-sm mb-7">
            <ImagePlus size={16} className="text-sage-500 flex-shrink-0" />
            <span>Photo uploads are supported — share images of the space to help us prepare.</span>
          </div>

          <a
            href={FORM_DIRECT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full px-7 py-4 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-hover"
          >
            Fill Out Request Form
            <ExternalLink size={17} />
          </a>

          <p className="mt-4 text-center text-xs text-navy-400/70 leading-relaxed">
            The form opens securely in Google Forms. Photo uploads may require signing into a Google account.
          </p>
        </div>
      </div>
    </section>
  );
}

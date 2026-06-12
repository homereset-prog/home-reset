export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-cream-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-500 mb-10">
          Hi, I'm Keri.
        </h2>

        <div className="space-y-5 text-base md:text-lg text-navy-400 leading-relaxed">
          <p>I'm a mom of three and the founder of Spectrum Home Reset.</p>

          <p>
            I created Spectrum Home Reset because I know what it's like when life gets overwhelming.
            Laundry piles up. Boxes stay packed. A room becomes a catch-all space. The fridge needs
            attention. Projects get started but never seem to get finished.
          </p>

          <p>Sometimes people don't need a cleaning service.</p>

          <p className="font-medium text-navy-500">They need a place to start.</p>

          <p>
            My background includes professional cleaning, trauma-informed yoga, peer support
            training, mindfulness education, and years of supporting families through real-life
            challenges. Those experiences taught me that clutter, unfinished projects, and
            overwhelming spaces are often about more than housekeeping.
          </p>

          <p className="font-medium text-navy-500">That's why Spectrum Home Reset takes a different approach.</p>

          <p>
            This isn't a traditional maid service, and it isn't full-home organizing. I help people
            tackle the rooms, projects, and household tasks that have become difficult to manage
            alone. Whether it's a laundry reset, kitchen catch-up, bedroom rescue, move-in boxes, a
            cluttered pantry, or a space that simply isn't functioning anymore, I'm here to help
            without judgment.
          </p>

          <p>
            I believe every family is different. Every home is different. There is no one "right"
            way to keep a house. My goal is to help create practical, manageable systems that work
            for your real life — not someone else's version of perfection.
          </p>

          <p>
            Many of the people I work with are balancing busy schedules, parenting, caregiving
            responsibilities, executive dysfunction, ADHD, autism, health challenges, life
            transitions, or simply too much on their plate. Whatever brought you here, you don't
            need to be embarrassed by the current state of your home.
          </p>
        </div>

        {/* Callout block */}
        <div className="my-8 md:my-10 rounded-2xl bg-white border-l-4 border-sage-400 shadow-soft px-6 py-6 md:px-8 md:py-7 space-y-3">
          {[
            "You don't need to clean before I arrive.",
            "You don't need to apologize for the laundry pile.",
            "You don't need to have it all figured out.",
          ].map((line) => (
            <p key={line} className="font-serif text-base md:text-lg font-medium text-sage-600 leading-relaxed">
              {line}
            </p>
          ))}
        </div>

        <div className="space-y-5 text-base md:text-lg text-navy-400 leading-relaxed">
          <p>You just need a place to start.</p>

          <p>
            At Spectrum Home Reset, the goal isn't perfection.
          </p>

          <p>
            The goal is helping your home feel functional, manageable, and supportive of your
            everyday life again.
          </p>

          <p className="font-serif text-lg md:text-xl font-medium text-navy-500 italic">
            Because life happens.
          </p>
        </div>
      </div>
    </section>
  );
}

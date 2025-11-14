// components/TestimonialSection.tsx
const TestimonialSection = () => {
  return (
    <section className="section-card space-y-4" id="testimonials">
      <p className="section-title">Make it easy for people to trust you</p>
      <h2 className="section-heading">
        I plug in one or two short reviews from your real customers.
      </h2>

      <p className="section-body">
        You send me a couple of short quotes and names; I drop them in here so
        visitors see real-world proof that you do good work.
      </p>

      <div className="space-y-4">
        <figure className="border border-slate-700/70 rounded-xl p-4 bg-slate-900/80">
          <p className="testimonial-quote">
            “Super easy process. I sent the info, and in a couple of days my
            website actually looked like my business, not a random template.”
          </p>
          <figcaption className="testimonial-name">
            – Happy Client (example text)
          </figcaption>
        </figure>

        <figure className="border border-slate-700/70 rounded-xl p-4 bg-slate-900/80">
          <p className="testimonial-quote">
            “Customers keep saying they found us online now. The site loads fast
            on phones and looks professional.”
          </p>
          <figcaption className="testimonial-name">
            – Another Client (example text)
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TestimonialSection;


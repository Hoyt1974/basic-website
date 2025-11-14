// app/components/TestimonialSection.tsx

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="mt-16 border-t border-slate-500/60 pt-12"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">

        <h3 className="text-lg font-semibold text-slate-200 uppercase tracking-wide">
          Plug in one or two short reviews from your real customers.
        </h3>

        <p className="mt-3 text-sm text-slate-300/80">
          You send me a couple of short quotes and names — I drop them in here so visitors see real-world proof that you do good work.
        </p>

        {/* Wrapper for testimonial cards */}
        <div className="mt-10 flex flex-col items-center gap-6">

          {/* Testimonial 1 */}
          <div className="max-w-lg w-full rounded-xl border border-slate-400/70 bg-slate-900/40 p-5 shadow-md
                          hover:-translate-y-1 hover:shadow-xl hover:border-sky-400/80 hover:bg-slate-900/70
                          transition-all duration-200">

            <p className="text-sm text-slate-200 italic">
              “Super easy process. I sent the info, and in a couple of days my website actually looked like my business — not a random template.”
            </p>

            <p className="mt-3 text-xs font-semibold text-sky-300 uppercase tracking-wide">
              — Happy Client (example text)
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="max-w-lg w-full rounded-xl border border-slate-400/70 bg-slate-900/40 p-5 shadow-md
                          hover:-translate-y-1 hover:shadow-xl hover:border-sky-400/80 hover:bg-slate-900/70
                          transition-all duration-200">

            <p className="text-sm text-slate-200 italic">
              “Customers keep saying they found us online now. The site loads fast on phones and looks professional.”
            </p>

            <p className="mt-3 text-xs font-semibold text-sky-300 uppercase tracking-wide">
              — Another Client (example text)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}


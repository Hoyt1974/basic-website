// app/components/ContactSection.tsx

const EMAIL = "your-email@example.com"; // TODO: replace with your real contact email

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-20 border-t border-slate-600/60 pt-12 pb-16"
    >
      <div className="max-w-2xl mx-auto text-center px-4">
        {/* Small label */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-300">
          Next step
        </p>

        {/* Main heading */}
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-50">
          Ready for a Basic website that doesn&apos;t feel basic?
        </h2>

        {/* Short explainer */}
        <p className="mt-4 text-sm sm:text-base text-slate-300/90">
          Send me your content, photos, and contact info. I&apos;ll plug
          everything into this layout, tweak the colors to match your brand,
          and deliver a clean website you can share with customers.
        </p>

        {/* Call to action row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${EMAIL}?subject=Basic%20Website%20Package%20details`}
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold bg-sky-500 text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.55)] hover:bg-sky-400 hover:shadow-[0_0_35px_rgba(56,189,248,0.75)] transition"
          >
            Email me your details
          </a>

          <span className="text-xs sm:text-sm text-slate-400/85">
            Or message me on Fiverr after ordering – I&apos;ll walk you
            through it step-by-step.
          </span>
        </div>

        {/* Reassurance line */}
        <p className="mt-6 text-[11px] text-slate-400/75">
          I typically reply within 1 business day. We&apos;ll keep everything
          simple, clear, and ready to publish.
        </p>
      </div>
    </section>
  );
}

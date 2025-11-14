// components/ContactSection.tsx
const ContactSection = () => {
  return (
    <section className="section-card space-y-5" id="contact">
      <p className="section-title">Ready for a Basic website that doesn&apos;t feel basic?</p>

      <h2 className="section-heading">
        Send me your details and I&apos;ll take it from there.
      </h2>

      <p className="section-body">
        On Fiverr, I&apos;ll plug your content, photos, and contact info into
        this layout, tweak the colors to match your brand, and deliver a clean
        website you can share with customers.
      </p>

      <div className="contact-row">
        <a href="mailto:YOURBUSINESS@EXAMPLE.COM" className="btn-primary">
          Email me the details
        </a>
        <p className="section-body text-xs sm:text-sm max-w-md">
          Or message me directly on Fiverr with your business name, what you do,
          and any links you already have.
        </p>
      </div>

      <p className="site-footer">
        © {new Date().getFullYear()} HackingHoyt — Basic Website Package · Built
        with Next.js & Tailwind.
      </p>
    </section>
  );
};

export default ContactSection;

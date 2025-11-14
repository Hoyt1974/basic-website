// components/ServicesSection.tsx
const ServicesSection = () => {
  return (
    <section className="section-card space-y-6" id="services">
      <p className="section-title">What you get with the Basic package</p>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-sky-300">Layout & pages</h3>
          <p className="section-body">
            One scrolling page that includes hero, about, services, testimonials
            and a clear contact call-to-action.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-sky-300">Mobile-ready design</h3>
          <p className="section-body">
            Looks good on phones, tablets, and desktops. No tiny text or
            awkward zooming to read your info.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-sky-300">SEO foundation</h3>
          <p className="section-body">
            I set your site title, description, and basic tags so you&apos;re
            not invisible to search engines.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-700/70 pt-4">
        <h3 className="font-semibold text-slate-100 mb-2">
          During the intro promo:
        </h3>
        <ul className="feature-list list-disc list-inside">
         <li>
          <strong>Intro bonus (first 5 clients):</strong> one custom background
            image <em>plus</em> a simple up-to-3-image gallery wired in for you.
         </li>

          <li>I plug in your text, photos, and contact details for you.</li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;

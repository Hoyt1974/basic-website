// components/AboutSection.tsx
const AboutSection = () => {
  return (
    <section className="section-card space-y-4" id="about">
      {/* <p className="section-title">Built for real-world small businesses</p> */}
      <p className="text-center text-slate-400 text-sm mb-4">
  Built for real-world small businesses
</p>


      <h2 className="section-heading">
        Give people a simple, professional place to learn who you are.
      </h2>

      <p className="section-body">
        The Basic package is a focused one-page website: a clear introduction,
        what you offer, why people should trust you, and how to contact you. No
        confusing menus. No gimmicks. Just a clean home base for your business.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold text-slate-100 mb-2">Perfect for:</h3>
          <ul className="feature-list list-disc list-inside">
            <li>Local services (plumbers, cleaners, barbers, etc.)</li>
            <li>Artists & makers who need a simple home base</li>
            <li>Cabin rentals and Airbnbs that need a legit link</li>
            <li>Anyone who says “I just need it to look legit.”</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-100 mb-2">
            What I focus on:
          </h3>
          <ul className="feature-list list-disc list-inside">
            <li>Clear layout & structure (no one gets lost)</li>
            <li>Fast load times, even on slower connections</li>
            <li>
              Consistent fonts & colors so your brand doesn&apos;t look thrown
              together
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

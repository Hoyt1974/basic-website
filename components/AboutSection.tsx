// components/AboutSection.tsx
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-slate-200">
          Built for real-world small businesses
        </h3>

        <p className="mt-4 text-slate-300">
          Give people a simple, professional place to learn who you are.
        </p>

        <p className="mt-4 text-slate-300 leading-relaxed">
          The Basic package is a focused one-page website: a clear introduction,
          what you offer, why people should trust you, and how to contact you.
          No confusing menus. No gimmicks. Just a clean home base for your
          business.
        </p>

        {/* "Perfect for" section */}
        <h4 className="text-lg font-semibold mt-10 text-slate-200">
          Perfect for:
        </h4>

        <ul className="mt-4 space-y-2 text-slate-300 text-left mx-auto max-w-md">
          <li>✔ Local services (plumbers, cleaners, barbers, etc.)</li>
          <li>✔ Artists & creators needing something simple</li>
          <li>✔ New small businesses just getting online</li>
          <li>✔ Anyone who wants a “just the basics” pro site</li>
        </ul>

        {/* What’s included */}
        <h4 className="text-lg font-semibold mt-10 text-slate-200">
          What you get with the Basic package
        </h4>

        <ul className="mt-4 space-y-2 text-slate-300 text-left mx-auto max-w-md">
          <li>✔ Clear layout & structure (no extra bloat)</li>
          <li>✔ Professionally coded Next.js + Tailwind site</li>
          <li>✔ Mobile-ready design</li>
          <li>✔ Consistent fonts & colors so your brand doesn’t look thrown together</li>
        </ul>

        {/* Layout overview */}
        <h4 className="text-lg font-semibold mt-10 text-slate-200">
          What’s on the page
        </h4>

        <ul className="mt-4 space-y-2 text-slate-300 text-left mx-auto max-w-md">
          <li>✔ One scrolling page with hero, about, services, testimonials & contact</li>
          <li>✔ SEO foundation (titles, descriptions, tags)</li>
          <li>✔ Optional intro gallery (if your offer includes up to 3 photos)</li>
          <li>✔ Clean, minimal design tuned for phones, tablets & desktops</li>
        </ul>

        {/* Final line */}
        <p className="mt-10 text-slate-300">
          Everything is professionally assembled and delivered clean — ready for you to publish.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;


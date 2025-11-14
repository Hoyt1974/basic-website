// components/HeroSection.tsx
const HeroSection = () => {
  return (
    <section className="section-card" id="top">
      <div className="flex flex-col gap-6 items-center text-center">
        <span className="pill">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Basic Website Package · Fiverr intro offer
        </span>

        <div className="space-y-3 max-w-3xl">
          <p className="section-title">Your business, online & ready</p>

          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            A clean, modern website that actually makes you look open for
            business.
          </h1> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-sky-300">
  A clean, modern website that actually makes you look open for
  business.
</h1>


          <p className="section-body">
            Professionally coded with Next.js and Tailwind, tuned for phones,
            tablets, and desktops. You send the content and photos—I wire
            everything together and hand you a site you can proudly share.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-6">
  <a
    href="#contact"
    className="text-sky-300 font-semibold hover:underline"
  >
    Get your Basic website
  </a>

  <a
    href="#services"
    className="text-sky-300 font-semibold hover:underline"
  >
    See what's included
  </a>
</div>

        {/* <div className="flex flex-col items-center gap-3 mt-6">
  <a
    href="#contact"
    className="text-sky-300 font-semibold hover:underline"
  >
    Get your Basic website
  </a>

  <a
    href="#services"
    className="text-sky-300 font-semibold hover:underline"
  >
    See what's included
  </a>
</div> */}

        
      </div>
    </section>
  );
};

export default HeroSection;

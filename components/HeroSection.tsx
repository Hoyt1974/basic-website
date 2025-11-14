export default function HeroSection() {
  return (
    <section
      id="hero"
      className="border-b border-slate-600 py-10 px-4 sm:px-6 lg:px-8"
    >
      {/* Top text block */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <p className="text-sm text-slate-300 uppercase tracking-wide">
          Basic Website Package · Fiverr intro offer
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          A clean, modern website that actually makes you look open for
          business.
        </h1>

        <p className="text-slate-200">
          Professionally coded with Next.js and Tailwind, tuned for phones,
          tablets, and desktops. You send the content and photos—I'll wire
          everything together and hand you a site you can proudly share.
        </p>
      </div>

      {/* Background hero image card */}
      <div className="mt-10 flex justify-center">
        <div
          className="w-full max-w-2xl h-[380px] sm:h-[430px] md:h-[460px] bg-cover bg-center rounded-xl shadow-2xl ring-2 ring-slate-300/40 overflow-hidden"
          style={{ backgroundImage: "url('/background-demo.jpg')" }}
        >
          <span className="sr-only">Historic Gatlinburg street photo</span>
        </div>
      </div>

      {/* Links row */}
      <div className="mt-8 flex justify-center gap-[10rem] text-sm font-semibold">
        <a
          href="#contact"
          className="text-sky-300 hover:text-sky-200 underline underline-offset-4"
        >
          [ Get your Basic website ]
        </a>
        <a
          href="#about"
          className="text-sky-300 hover:text-sky-200 underline underline-offset-4"
        >
          [ See what&apos;s included ]
        </a>
      </div>

      {/* Built-for line */}
      <p className="mt-4 text-center text-slate-200">
        Built for real-world small businesses.
      </p>
    </section>
  );
}

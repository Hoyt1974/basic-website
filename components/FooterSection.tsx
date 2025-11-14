// app/components/FooterSection.tsx

export default function FooterSection() {
  return (
    <footer className="mt-16 border-t border-slate-600/60 pt-8 pb-6">
      <div className="max-w-3xl mx-auto px-4 text-center text-slate-400 text-xs sm:text-sm">

        <p className="font-semibold text-slate-100">
          Basic Website Package · Fiverr intro offer
        </p>

        <p className="mt-2">
          Built with Next.js & Tailwind CSS – mobile-ready, fast loading, and tuned
          for small-business landing pages.
        </p>

        <p className="mt-1">
          Upgrade options available for blogs, extra features, and multi-page sites.
        </p>

        {/* COPYRIGHT WITH ALIEN ICONS + PULSE + GLOW */}
        <p className="mt-4 text-slate-500 text-xs tracking-wide flex items-center justify-center gap-3">
          <span
            className="
              text-lg
              text-cyan-300
              animate-pulse
              transition
              duration-300
              hover:animate-none
              hover:text-emerald-300
              hover:drop-shadow-[0_0_10px_rgba(45,212,191,0.9)]
            "
          >
            👽
          </span>

          <span>
            © {new Date().getFullYear()} Hacking Hoyt &amp; AGUL · All rights reserved.
          </span>

          <span
            className="
              text-lg
              text-cyan-300
              animate-pulse
              transition
              duration-300
              hover:animate-none
              hover:text-emerald-300
              hover:drop-shadow-[0_0_10px_rgba(45,212,191,0.9)]
            "
          >
            👽
          </span>
        </p>

      </div>
    </footer>
  );
}

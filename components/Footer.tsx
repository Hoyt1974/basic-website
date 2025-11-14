// components/Footer.tsx

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/95 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {year} HackingHoyt · Basic Website Package · Built with Next.js &
          Tailwind.
        </p>
        <p className="text-[0.7rem] text-slate-500">
          Upgrade paths available for blogs, AI features & multi-page sites.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

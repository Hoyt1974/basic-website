// components/GallerySection.tsx
// Note: simple gallery placeholder. For the intro offer only.
const GallerySection = () => {
  return (
    <section className="section-card space-y-3" id="gallery">
      <p className="section-title">Optional intro gallery</p>
      <h2 className="section-heading">Show off up to 3 photos.</h2>
      <p className="section-body">
        If you choose the gallery option, I&apos;ll wire in up to three photos
        (for example: your storefront, your work, or your team) in this section.
        Later we can upgrade this into a fuller gallery when you&apos;re ready.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="h-32 rounded-xl border border-dashed border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-xs text-slate-400">
          Photo 1 placeholder
        </div>
        <div className="h-32 rounded-xl border border-dashed border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-xs text-slate-400">
          Photo 2 placeholder
        </div>
        <div className="h-32 rounded-xl border border-dashed border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-xs text-slate-400">
          Photo 3 placeholder
        </div>
      </div>
    </section>
  );
};

export default GallerySection;


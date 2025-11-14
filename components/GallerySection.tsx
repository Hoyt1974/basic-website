// app/components/GallerySection.tsx

import Image from "next/image";
import React from "react";

export default function GallerySection() {
  return (
    <section id="gallery" className="mt-16 border-t border-slate-500/60 pt-12">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h3 className="text-lg font-semibold tracking-wide text-slate-200 uppercase">
          Show off up to 3 photos.
        </h3>

        <p className="mt-3 text-sm text-slate-200/80">
          During the intro promo, you can choose a simple image strip with up to three photos.
          Later this can grow into a full gallery when you&apos;re ready.
        </p>

        <p className="mt-4 text-xs text-sky-300/80">
          Drop the photos in your <code className="font-mono">/public</code> folder using these filenames.
        </p>

        {/* Photo grid */}
    <div className="mt-10 grid gap-8 grid-cols-3">



          {/* CARD 1 */}
          <div className="rounded-xl border border-slate-400/70 bg-slate-900/40 p-4 shadow-md
                          hover:-translate-y-1 hover:shadow-xl hover:border-sky-400/80 hover:bg-slate-900/70
                          transition-all duration-200 ease-out">

            <Image
              src="/gallery-main.jpg"
              alt="Main business photo"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-40"
            />

            <p className="mt-3 text-xs font-semibold text-sky-300 uppercase tracking-wide">
              Main photo (hero shot)
            </p>
            <p className="text-[11px] text-slate-300/80 font-mono">
              /gallery-main.jpg
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl border border-slate-400/70 bg-slate-900/40 p-4 shadow-md
                          hover:-translate-y-1 hover:shadow-xl hover:border-sky-400/80 hover:bg-slate-900/70
                          transition-all duration-200 ease-out">

            <Image
              src="/gallery-detail-1.jpg"
              alt="Detail photo 1"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-40"
            />

            <p className="mt-3 text-xs font-semibold text-sky-300 uppercase tracking-wide">
              Detail photo 1
            </p>
            <p className="text-[11px] text-slate-300/80 font-mono">
              /gallery-detail-1.jpg
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl border border-slate-400/70 bg-slate-900/40 p-4 shadow-md
                          hover:-translate-y-1 hover:shadow-xl hover:border-sky-400/80 hover:bg-slate-900/70
                          transition-all duration-200 ease-out">

            <Image
              src="/gallery-detail-2.jpg"
              alt="Detail photo 2"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-40"
            />

            <p className="mt-3 text-xs font-semibold text-sky-300 uppercase tracking-wide">
              Detail photo 2
            </p>
            <p className="text-[11px] text-slate-300/80 font-mono">
              /gallery-detail-2.jpg
            </p>
          </div>

        </div>

        <p className="mt-6 text-xs text-slate-300/80">
          When you&apos;re ready, I&apos;ll swap these placeholders for your real photos 
          so the site actually looks like your business — not a random template.
        </p>
      </div>
    </section>
  );
}

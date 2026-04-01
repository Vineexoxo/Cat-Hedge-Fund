import Image from "next/image";
import Link from "next/link";
import { catImages } from "@/lib/cat-images";

const catPanels = [
  { src: catImages.hero, alt: "Aloo Tikki", className: "landing-float-a" },
  { src: catImages.philosophy, alt: "Aloo Tikki", className: "landing-float-b" },
  { src: catImages.cioPortrait, alt: "Aloo Tikki", className: "landing-float-c" },
] as const;

export function HomeHero() {
  return (
    <div className="flex min-h-[min(100dvh,900px)] flex-col justify-center px-4 py-16 md:px-6 md:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-4xl text-center">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Aloo Tikki Hedge Fund
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          We operate where trading meets technology—with engineers, cats, and
          algorithms. We work with people who have too much money but too little
          time. Indian markets, feline intuition.
        </p>
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="text-sm font-medium text-foreground md:text-base">
            Aloo Tikki, Senior Most Quant
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">
            <span
              className="size-2 shrink-0 rounded-full bg-foreground"
              aria-hidden
            />
            <span>Currently napping, markets active</span>
          </div>
        </div>
        <p className="mt-8">
          <Link
            href="/who-we-are"
            className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:underline"
          >
            Explore
          </Link>
        </p>
      </div>

      <div className="mx-auto mt-14 grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 md:mt-20">
        {catPanels.map((panel) => (
          <div
            key={panel.src}
            className={`relative flex aspect-square items-center justify-center rounded-lg border border-border bg-muted/30 p-6 ${panel.className}`}
          >
            <Image
              src={panel.src}
              alt={panel.alt}
              width={280}
              height={280}
              className="h-auto max-h-[min(240px,40vw)] w-full max-w-[240px] object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function AlphaChartStub() {
  return (
    <div className="relative flex min-h-[220px] flex-1 flex-col">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-5xl font-medium tracking-tight text-foreground/90 md:text-6xl">
          +342% Alpha
        </span>
      </div>
      <div className="relative z-[1] mt-auto flex w-full flex-col gap-2 md:gap-0">
        <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground md:hidden">
          Treats Generated
        </p>
        <div className="relative flex w-full min-w-0 flex-1 flex-col md:pl-6">
          <span
            className="hidden md:absolute md:top-1/2 md:left-0 md:block md:w-24 md:-translate-y-1/2 md:-rotate-90 md:text-center md:text-[10px] md:font-medium md:uppercase md:tracking-wider md:text-muted-foreground"
            aria-hidden
          >
            Treats Generated
          </span>
          <svg
            className="h-32 w-full flex-1 text-foreground sm:h-40 md:h-44"
            viewBox="0 0 480 160"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="alphaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(0 0 0 / 0.12)" />
                <stop offset="100%" stopColor="rgb(0 0 0 / 0)" />
              </linearGradient>
            </defs>
            <line
              x1="36"
              y1="8"
              x2="36"
              y2="132"
              stroke="currentColor"
              strokeOpacity={0.25}
              strokeWidth={1}
            />
            <line
              x1="36"
              y1="132"
              x2="472"
              y2="132"
              stroke="currentColor"
              strokeOpacity={0.25}
              strokeWidth={1}
            />
            {[40, 72, 104].map((y) => (
              <line
                key={y}
                x1="36"
                y1={y}
                x2="472"
                y2={y}
                stroke="currentColor"
                strokeOpacity={0.08}
                strokeWidth={1}
              />
            ))}
            <path
              d="M 36 118 C 120 108, 180 96, 240 72 S 380 28, 472 14 L 472 132 L 36 132 Z"
              fill="url(#alphaFill)"
            />
            <path
              d="M 36 118 C 120 108, 180 96, 240 72 S 380 28, 472 14"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center pt-1 pl-0 text-[10px] font-medium uppercase tracking-wider text-muted-foreground md:pl-6">
        <span>Fiscal Quarter</span>
      </div>
    </div>
  );
}

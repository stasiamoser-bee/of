import domeGlow from "@/assets/dome-glow.png.asset.json";

const orbitItems = [
  "результат",
  "влияние",
  "смыслы",
  "внутренняя сила",
  "пространства",
  "системы",
  "эстетика",
];

export function OrbitingLanguages() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[520px] md:max-w-[680px]">
      {/* dome backdrop under the circles */}
      <img
        src={domeGlow.url}
        alt=""
        aria-hidden
        className="dome-glow pointer-events-none absolute left-1/2 top-[62%] w-[135%] max-w-none -translate-x-1/2 opacity-60"
      />

      {/* soft glow */}
      <div className="pointer-events-none absolute inset-[14%] rounded-full bg-[var(--gradient-sphere)] opacity-70 blur-2xl" />


      {/* orbit ring */}
      <div className="pointer-events-none absolute inset-[8%] rounded-full border border-border/60" />

      {/* center */}
      <div className="absolute inset-[22%] flex items-center justify-center rounded-full border-2 border-primary/70 bg-[image:var(--gradient-orbit-center)] p-4 text-center shadow-[var(--shadow-soft)]">
        <p className="display-xl text-base font-semibold uppercase tracking-[0.14em] leading-tight text-primary-foreground sm:text-2xl md:text-3xl">
          Лидер
        </p>
      </div>

      {/* orbiting labels */}
      <div className="absolute inset-0 animate-[orbit-spin_48s_linear_infinite]">
        {orbitItems.map((label, i) => {
          const a = ((2 * Math.PI) / orbitItems.length) * i;
          const r = 42;
          const left = 50 + r * Math.sin(a);
          const top = 50 - r * Math.cos(a);
          return (
            <span
              key={label}
              className="absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary/70 bg-[image:var(--gradient-orbit-label)] px-1 text-center text-[0.5rem] leading-tight tracking-[0.14em] font-semibold uppercase text-primary-foreground backdrop-blur-sm animate-[orbit-spin-reverse_48s_linear_infinite] sm:h-24 sm:w-24 sm:text-[0.6rem] md:h-28 md:w-28 md:text-[0.68rem]"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

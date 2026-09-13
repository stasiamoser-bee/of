import { useEffect, useState } from "react";

import pearlGirl from "@/assets/art-pearl-girl.png.asset.json";
import dragon from "@/assets/art-dragon.png.asset.json";
import kandinsky from "@/assets/art-kandinsky.png.asset.json";
import samurai from "@/assets/art-samurai.png.asset.json";
import ladyCup from "@/assets/art-lady-cup.png.asset.json";


const slides = [
  { url: pearlGirl.url, alt: "Девушка с жемчужной серёжкой" },
  { url: kandinsky.url, alt: "Абстрактная композиция Кандинского" },
  { url: samurai.url, alt: "Хромированная скульптура самурая" },
  { url: ladyCup.url, alt: "Дама с чашкой чая" },
  { url: dragon.url, alt: "Хромированная скульптура дракона" },
];

export function HeroArtCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      1500,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] md:max-w-[340px]">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[var(--gradient-sphere)] opacity-60 blur-2xl" />
      {slides.map((s, i) => (
        <img
          key={s.url}
          src={s.url}
          alt={s.alt}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-contain transition-[opacity,transform] duration-700 ease-out ${
            i === index ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        />
      ))}
    </div>
  );

}


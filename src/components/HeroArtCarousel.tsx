import { useEffect, useState } from "react";

import samuraiClouds from "@/assets/hero-samurai-clouds.png.asset.json";
import davidClouds from "@/assets/hero-david-clouds.png.asset.json";
import faceSky from "@/assets/hero-face-sky.png.asset.json";
import lionClouds from "@/assets/hero-lion-clouds.png.asset.json";
import emperorClouds from "@/assets/hero-emperor-clouds.png.asset.json";
import pegasusClouds from "@/assets/hero-pegasus-clouds.png.asset.json";


const slides = [
  { url: samuraiClouds.url, alt: "Самурай с небом и облаками" },
  { url: davidClouds.url, alt: "Скульптурный портрет с небом и птицей" },
  { url: faceSky.url, alt: "Скульптурное лицо с небом и птицей" },
  { url: lionClouds.url, alt: "Лев с небом и облаками" },
  { url: emperorClouds.url, alt: "Император с небом и облаками" },
  { url: pegasusClouds.url, alt: "Крылатый конь с небом и облаками" },
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


import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { HeroArtCarousel } from "@/components/HeroArtCarousel";
import { OrbitingLanguages } from "@/components/OrbitingLanguages";

import logoKrossart from "@/assets/logo-krossart.png.asset.json";
import heroBg from "@/assets/hero-bg-kandinsky.jpg.asset.json";

import progMirror from "@/assets/prog-mirror.png.asset.json";
import progCoinLady from "@/assets/prog-coin-lady.png.asset.json";
import progDragon from "@/assets/prog-dragon.png.asset.json";
import progAbstract from "@/assets/prog-abstract.png.asset.json";
import progSamurai from "@/assets/prog-samurai.png.asset.json";
import progBookMan from "@/assets/prog-book-man.png.asset.json";
import blueSweep from "@/assets/blue-sweep.png.asset.json";


import pearlShell from "@/assets/pearl-shell-plain.png.asset.json";
import expert1 from "@/assets/expert-anastasia.jpg.asset.json";
import expert2 from "@/assets/expert-maria.jpg.asset.json";
import requestArt from "@/assets/request-abstract.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "КРОССАРТ — пространство эксклюзивного развития лидеров" },
      {
        name: "description",
        content:
          "КРОССАРТ — кросс-функциональные программы развития лидеров на основе бизнес-знаний, науки, культуры, искусства, биохакинга и квантовой физики.",
      },
      { property: "og:title", content: "КРОССАРТ — пространство эксклюзивного развития" },
      {
        property: "og:description",
        content: "Создаём среду, где разные языки, смыслы и коды сталкиваются и искрят.",
      },
    ],
  }),
  component: Index,
});


const programs = [
  {
    title: "Зеркала Лидера",
    lang: "Язык смыслов",
    text: "Как вести за собой, когда нет карты.",
    img: progMirror.url,
    imgAlt: "Антикварное серебряное зеркало",
  },
  {
    title: "Коммерческое мышление",
    lang: "Язык результата",
    text: "Видеть деньги там, где их не видят другие.",
    img: progCoinLady.url,
    imgAlt: "Женщина с золотой монетой",
  },
  {
    title: "Императорское мышление (визионерское)",
    lang: "Язык влияния",
    text: "Лидер не управляет другими, он управляет собой — и от этого выстраивается империя.",
    img: progDragon.url,
    imgAlt: "Хромированная скульптура дракона",
  },
  {
    title: "Эстетическое мышление как жизнестойкость",
    lang: "Язык эстетики",
    text: "Создавать инновации, актуальные времени, с минимальными затратами.",
    img: progAbstract.url,
    imgAlt: "Абстрактная композиция",
  },
  {
    title: "Самурайская игра",
    lang: "Язык внутренней силы",
    text: "Стратегия, дисциплина и решение под давлением.",
    img: progSamurai.url,
    imgAlt: "Хромированная скульптура самурая",
  },
  {
    title: "Кросс-путешествия",
    lang: "Язык пространств",
    text: "Интеллектуальные пространства.",
    img: progBookMan.url,
    imgAlt: "Мужчина с книгой вместо лица",
  },
];


const principles = [
  {
    n: "01",
    text: "Находить природную частоту лидеров, потому что человек в потоке выдает в 3 раза больше результативности, чем человек под давлением. Мы учим держать фокус на результате в кризис.",
  },
  {
    n: "02",
    text: "Превращаем шум в диалог, где каждый слышит партию другого. Кросс-коммуникация — основа быстрых достижений с меньшими затратами.",
  },
  {
    n: "03",
    text: "Учим не «командовать», а зажигать. Когда за лидером идут, потому что он создает смыслы, которые преодолевают давление внешнего контура.",
  },
  {
    n: "04",
    text: "Прокачиваем гибкую силу и умение владеть сложной ситуацией, не ломая людей. Вести компанию к целям, делая путь проходимым в мире, наполненном черными лебедями.",
  },
];


const formats = [
  "Оффлайн | Онлайн",
  "Модульные программы",
  "Мастер-классы",
  "Интерактивные практикумы и лекции",
];

function Index() {
  const [activeProgram, setActiveProgram] = useState<number | null>(null);
  const [activeProgram2, setActiveProgram2] = useState<number | null>(null);

  return (
    <main className="theme-light [overflow-x:clip] min-h-screen bg-background">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img
            src={heroBg.url}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 pt-12 pb-0 md:px-10">
          <h1 className="flex justify-center">
            <img
              src={logoKrossart.url}
              alt="КроссАрт"
              width={1245}
              height={240}
              className="logo-krossart w-full max-w-[560px] md:max-w-[720px]"
            />
          </h1>
          <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
            <p className="label-xs text-xl text-foreground md:text-3xl">пространство</p>
            <p className="label-xs text-right text-xl text-foreground md:max-w-[26rem] md:text-3xl">
              эксклюзивного
              <br />
              развития
            </p>
          </div>
        </div>

        <div className="relative mx-auto mt-8 max-w-[1400px] px-6 md:px-10">
          <HeroArtCarousel />
          <div className="mt-8 flex flex-col items-center gap-5 px-6 pb-8 text-center">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Мы — образовательная компания для развития мышления лидеров на основе
              междисциплинарных знаний.
            </p>
          </div>
          <div className="flex justify-end px-6 pb-8">
            <a
              href="#request"
              className="rounded-md bg-primary px-6 py-2.5 text-xs tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Оставить заявку
            </a>
          </div>
        </div>

      </section>


      {/* LANGUAGES */}
      <section className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="display-xl mx-auto mb-14 max-w-4xl text-center text-2xl leading-tight text-accent md:text-4xl">
            Современный лидер должен владеть несколькими языками и КроссАрт знает как их развить
            через свои программы
          </h2>
          <OrbitingLanguages />
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="display-xl text-2xl md:text-4xl">
            Программы для развития современного лидера
          </h2>

          {[0, 1].map((group) => {
            const items = programs.slice(group * 3, group * 3 + 3);
            const active = group === 0 ? activeProgram : activeProgram2;
            const setActive = group === 0 ? setActiveProgram : setActiveProgram2;
            return (
              <div
                key={group}
                className={`grid gap-x-12 gap-y-4 md:grid-cols-2 ${group === 0 ? "mt-4" : "mt-0"}`}
                onMouseLeave={() => setActive(null)}
              >
                <div className="relative hidden md:block">
                  <div className="absolute left-0 top-0 aspect-[3/4] w-full max-w-md">
                    <div
                      className={`pointer-events-none absolute inset-0 -z-10 rounded-full bg-[var(--gradient-sphere)] blur-2xl transition-opacity duration-500 ${
                        active === null ? "opacity-0" : "opacity-50"
                      }`}
                    />
                    {items.map((p, i) => (
                      <img
                        key={p.img}
                        src={p.img}
                        alt={p.imgAlt}
                        loading="lazy"
                        className={`absolute inset-0 h-full w-full object-contain transition-[opacity,transform] duration-500 ease-out ${
                          i === active ? "scale-100 opacity-100" : "scale-95 opacity-0"
                        }`}
                      />
                    ))}
                  </div>
                  <img
                    src={blueSweep.url}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className={`pointer-events-none absolute left-0 top-[25rem] hidden w-full max-w-md select-none object-contain transition-opacity duration-500 md:block ${
                      active === null ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </div>

                <div className="flex flex-col gap-4">
                  {items.map((p, i) => (
                    <a
                      key={p.title}
                      href="#request"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="panel group block cursor-pointer rounded-xl p-6 transition-all duration-300 hover:border-accent hover:bg-secondary/60 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:p-8"
                    >
                      <h3 className="text-lg font-semibold tracking-[0.12em] uppercase text-primary md:text-xl">
                        {p.title}
                      </h3>
                      <p className="label-xs mt-6 text-foreground/90">{p.lang}</p>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground">
                        {p.text}
                      </p>
                      <img
                        src={p.img}
                        alt={p.imgAlt}
                        loading="lazy"
                        className="mt-4 h-40 w-full object-contain md:hidden"
                      />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>



      {/* MANIFEST */}
      <section className="relative py-24 md:py-36">
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h2 className="display-xl text-3xl leading-tight text-accent md:text-5xl">
                КроссАрт — передача живых знаний, на которые лидер может опираться ежедневно
              </h2>
              <a
                href="#request"
                className="mt-10 inline-block rounded-md bg-primary px-6 py-2.5 text-xs tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
              >
                Оставить заявку
              </a>
            </div>
            <img
              src={pearlShell.url}
              alt="Серебряная раковина с жемчужиной"
              width={1280}
              height={853}
              loading="lazy"
              className="pointer-events-none w-full select-none object-contain"
            />
          </div>


          <p className="relative mx-auto mt-20 max-w-4xl text-center text-base leading-relaxed tracking-[0.1em] uppercase text-foreground md:text-2xl">
            Разработка кросс-функциональных программ для развития лидеров под запрос на основе
            бизнес-знаний, психологии, культуры, искусства, истории, науки.
          </p>

          <h3 className="display-xl mt-16 text-center text-2xl text-accent md:text-4xl">
            Для КроссАрта важно:
          </h3>

          <div className="mt-12 grid gap-10 text-left md:grid-cols-4">

            {principles.map((p) => (
              <div key={p.n}>
                <p className="font-display text-2xl text-accent">({p.n})</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="display-xl text-center text-2xl text-accent md:text-4xl">
            Кроссарт настраивает не процессы, а ритмы
          </h2>

          <div className="mt-16">
            <div className="flex-1 text-center">
              <p className="label-xs">форматы работы</p>
              <ul className="mt-5 space-y-2">
                {formats.map((f) => (
                  <li
                    key={f}
                    className="display-xl text-xl text-foreground md:text-3xl"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs tracking-[0.12em] uppercase text-muted-foreground">
                От 1 дня до годовых программ с сопровождением
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-4 px-6 md:grid-cols-2 md:px-10">
          <div className="panel flex flex-col justify-end rounded-xl p-8 md:p-12">
            <p className="display-xl text-xl leading-tight md:text-3xl">
              Кроссарт — создаём инсайты, которые остаются надолго
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <figure>
              <img
                src={expert1.url}
                alt="Анастасия Мозер, CEO и вдохновитель КроссАрт"
                width={600}
                height={760}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-xl object-cover"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-foreground">
                <span className="font-semibold">Анастасия Мозер</span>
                <br />
                <span className="text-muted-foreground">
                  CEO и вдохновитель КроссАрт
                </span>
              </figcaption>
            </figure>
            <figure>
              <img
                src={expert2.url}
                alt="Мария Дмитриева, академических дел мастер"
                width={600}
                height={760}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-xl object-cover"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-foreground">
                <span className="font-semibold">Мария Дмитриева</span>
                <br />
                <span className="text-muted-foreground">
                  Академических дел мастер
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>


      {/* REQUEST */}
      <section id="request" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="panel grid gap-10 rounded-xl p-8 md:grid-cols-2 md:p-14">
            <div>
              <h2 className="display-xl text-2xl text-accent md:text-4xl">Оставить заявку</h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Расскажите о своей задаче — подберём формат участия и программу.
              </p>
              <img
                src={requestArt.url}
                alt="Абстрактная композиция"
                width={1536}
                height={1024}
                loading="lazy"
                className="mt-10 w-full max-w-sm"
              />
            </div>

            <form
              className="flex flex-col gap-5 self-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field label="Имя" type="text" />
              <Field label="Компания" type="text" />
              <Field label="Телефон" type="tel" />
              <Field label="Корпоративный E-mail" type="email" />
              <label className="mt-2 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary"
                />
                <span className="text-xs leading-relaxed text-muted-foreground">
                  Согласен на обработку персональных данных в соответствии с Политикой
                  конфиденциальности и обработки персональных данных.
                </span>
              </label>
              <button
                type="submit"
                className="mt-2 rounded-md bg-primary px-6 py-3 text-xs tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
              >
                Оставить заявку
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="overflow-hidden pt-10">
        <div className="flex justify-center px-6">
          <img
            src={logoKrossart.url}
            alt="КроссАрт"
            width={1245}
            height={240}
            loading="lazy"
            className="w-full max-w-[900px] opacity-90"
          />
        </div>

        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-4 px-6 pt-8 md:px-10">
          <p className="label-xs">© 2026 Кроссарт</p>
          <p className="label-xs">пространство эксклюзивного развития</p>
        </div>

        <div className="mx-auto max-w-[1400px] space-y-1 px-6 pb-10 pt-4 text-xs leading-relaxed text-muted-foreground md:px-10">
          <p>ИП Мозер Анастасия Сергеевна</p>
          <p>ИНН 233909442711</p>
          <p>Адрес: Российская Федерация, 129344, г. Москва, Искры ул., 19</p>
          <p>
            Сайт:{" "}
            <a href="https://crossartpro.ru" className="transition-colors hover:text-accent">
              crossartpro.ru
            </a>
          </p>
          <p>
            E-mail:{" "}
            <a href="mailto:a.moser@crossartpro.ru" className="transition-colors hover:text-accent">
              a.moser@crossartpro.ru
            </a>
          </p>
          <p>MAX: +7 980 470-48-88</p>
          <p>
            <a href="#" className="underline underline-offset-4 transition-colors hover:text-accent">
              Политика конфиденциальности и обработки персональных данных
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}


function Field({ label, type }: { label: string; type: string }) {
  return (
    <label className="block">
      <span className="label-xs">{label}</span>
      <input
        type={type}
        className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}

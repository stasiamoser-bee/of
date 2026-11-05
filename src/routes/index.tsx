import { createFileRoute } from "@tanstack/react-router";

import { HeroArtCarousel } from "@/components/HeroArtCarousel";

import logoKrossart from "@/assets/logo-krossart.png.asset.json";
import progMirror from "@/assets/prog-mirror.png.asset.json";
import progDragon from "@/assets/prog-dragon.png.asset.json";
import progSamurai from "@/assets/prog-samurai.png.asset.json";
import expert1 from "@/assets/expert-anastasia.jpg.asset.json";
import expert2 from "@/assets/expert-maria.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "КРОССАРТ — искусство лидерства | Программы развития мышления лидеров" },
      {
        name: "description",
        content:
          "Развиваем бизнес-мышление лидеров — от кадрового резерва до первых лиц. Уникальные программы, 50+ мастер-классов, эксперты-практики. Нам доверяют ВТБ, Сбер, Газпром нефть.",
      },
      { property: "og:title", content: "КРОССАРТ — искусство лидерства" },
      {
        property: "og:description",
        content: "Развиваем человеческое мышление лидеров в эпоху ИИ.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pains = [
  "Тренинги не меняют поведение руководителей",
  "Привычные модели управления перестали работать",
  "Решения принимаются медленно и «по инструкции»",
  "Лидеры выгорают и теряют ресурс под давлением",
];

const thinking = [
  ["Лидерское", "Вести за собой, когда нет карты"],
  ["Коммерческое", "Видеть деньги там, где их не видят другие"],
  ["Адаптивное", "Меняться быстрее, чем меняется среда"],
  ["Исследовательское", "Пересобирать картину реальности"],
  ["Инновационное", "Превращать креатив в бизнес-процесс"],
];

const scale = [
  ["Кадровый резерв", "ответственность, смелость, управленческая позиция"],
  ["Средние руководители", "делегирование, решения в неопределённости, команда"],
  ["Топ-менеджмент", "стратегия, лидерство в кризисе, трансформация"],
];

const unique = [
  { title: "Самурайская игра", img: progSamurai.url, text: "Среда давления, где видны реальные модели поведения лидера." },
  { title: "Императорское мышление", img: progDragon.url, text: "Управлять системой целиком — без избыточного контроля." },
  { title: "Зеркала лидера", img: progMirror.url, text: "Увидеть свои слепые зоны и расширить лидерский репертуар." },
];

const results = [
  ["видят больше", "связи, риски и возможности"],
  ["действуют смелее", "без пряток за согласованиями"],
  ["быстрее адаптируются", "к меняющейся реальности"],
  ["дают результат", "в решениях, команде и цифрах"],
];

const steps = ["Ваша бизнес-задача", "Диагностика", "Программа под вас", "Практика", "Измерение результата"];

const clients = ["ВТБ", "Альфа-Банк", "Сбер", "Газпром нефть", "Газпромбанк", "Норникель", "Билайн", "Ростелеком", "МКБ", "JTI", "Miele", "BORK", "Kaspi.kz", "ВТБ Лизинг"];

const btn =
  "inline-block rounded-md bg-primary px-7 py-3.5 text-xs tracking-[0.18em] uppercase text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5";

function Index() {
  return (
    <main className="theme-light [overflow-x:clip] min-h-screen bg-background">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-4 -z-10 rounded-sm border border-primary/60 md:inset-6" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-6 pt-12 md:px-10">
          <h1 className="flex justify-center">
            <img src={logoKrossart.url} alt="КроссАрт" width={1245} height={240} className="logo-krossart w-full max-w-[560px] md:max-w-[720px]" />
          </h1>
          <p className="label-xs mt-6 text-center text-xl text-foreground md:text-3xl">Искусство лидерства</p>
        </div>
        <div className="relative mx-auto mt-8 max-w-[1400px] px-6 md:px-10">
          <HeroArtCarousel />
          <div className="mt-8 flex flex-col items-center gap-6 px-6 pb-16 text-center">
            <p className="display-xl max-w-3xl text-2xl leading-tight text-primary md:text-4xl">
              Развиваем мышление лидеров — от кадрового резерва до первых лиц
            </p>
            <p className="max-w-xl text-muted-foreground">
              Не очередной тренинг навыков, а новый способ думать, решать и вести команду в эпоху ИИ и турбулентности.
            </p>
            <a href="#request" className={btn}>Обсудить задачу</a>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="display-xl text-center text-2xl text-accent md:text-4xl">Знакомо, если вы отвечаете за развитие лидеров?</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {pains.map((p) => (
              <div key={p} className="panel flex items-center gap-4 rounded-xl p-6">
                <span className="font-display text-3xl text-accent">✕</span>
                <p className="text-foreground">{p}</p>
              </div>
            ))}
          </div>
          <p className="display-xl mt-12 text-center text-xl text-foreground md:text-3xl">
            Причина не в навыках. Причина — в мышлении.
          </p>
        </div>
      </section>

      {/* SOLUTION — bright */}
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <p className="text-center text-xs tracking-[0.25em] uppercase opacity-70">Решение КроссАрт</p>
          <h2 className="display-xl mt-3 text-center text-3xl md:text-5xl">Развиваем 5 типов мышления</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {thinking.map(([t, d], i) => (
              <div key={t} className="rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 p-6 transition-colors hover:bg-primary-foreground/20">
                <p className="font-display text-3xl opacity-60">0{i + 1}</p>
                <p className="mt-3 text-sm font-semibold tracking-[0.05em] uppercase">{t}</p>
                <p className="mt-2 text-sm opacity-80">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {scale.map(([t, d]) => (
              <div key={t} className="rounded-xl bg-background p-6 text-foreground">
                <p className="font-semibold tracking-[0.1em] uppercase text-primary">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="display-xl text-center text-3xl text-accent md:text-5xl">Программы, которых нет у других</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {unique.map((p) => (
              <a key={p.title} href="#request" className="panel group rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl">
                <img src={p.img} alt={p.title} loading="lazy" className="h-56 w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                <h3 className="mt-4 text-xl font-semibold tracking-[0.1em] uppercase text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            + библиотека из 50+ мастер-классов по 1,5 часа · онлайн и оффлайн
          </p>
        </div>
      </section>

      {/* RESULTS — bright */}
      <section className="bg-accent py-20 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="display-xl text-center text-3xl md:text-5xl">Что получает бизнес</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {results.map(([t, d]) => (
              <div key={t} className="border-t border-primary-foreground/40 pt-5">
                <p className="display-xl text-2xl">Лидеры {t}</p>
                <p className="mt-2 text-sm opacity-85">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <p className="label-xs">Нам доверяют развитие лидеров</p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <span key={c} className="display-xl text-xl text-primary md:text-2xl">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
          <h2 className="display-xl text-2xl text-accent md:text-4xl">Как мы работаем с HR</h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s} className="panel rounded-xl p-5">
                <p className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-primary-foreground">{i + 1}</p>
                <p className="mt-3 text-sm tracking-[0.08em] uppercase text-foreground">{s}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-2xl text-sm text-muted-foreground">
            Начните с одного мастер-класса — или соберём модульную программу на год.
          </p>
        </div>
      </section>

      {/* EXPERTS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="display-xl text-center text-2xl text-accent md:text-4xl">Эксперты-практики</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { img: expert1.url, n: "Анастасия Мозер", d: "CEO КроссАрт, 10+ лет CEO в IT, эксперт школы управления РБК" },
              { img: expert2.url, n: "Мария Дмитриева", d: "Искусствовед, методолог программ для Газпром нефти и Хоум Кредит" },
            ].map((e) => (
              <figure key={e.n} className="grid grid-cols-[120px_1fr] items-center gap-5">
                <img src={e.img} alt={e.n} loading="lazy" className="aspect-[3/4] w-full rounded-xl object-cover" />
                <figcaption>
                  <p className="font-semibold text-foreground">{e.n}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.d}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            А также Бронислав Виногродский, Марина Бондаренко, Татьяна Беляева, Андрей Евдокимов, Андрей Кравцов
          </p>
        </div>
      </section>

      {/* REQUEST — bright */}
      <section id="request" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-10 rounded-2xl bg-primary p-8 text-primary-foreground shadow-2xl md:grid-cols-2 md:p-14">
            <div>
              <h2 className="display-xl text-3xl md:text-5xl">Обсудим задачу ваших лидеров?</h2>
              <p className="mt-4 max-w-sm text-sm opacity-85">
                Оставьте заявку — за 30 минут подберём формат и программу под вашу бизнес-задачу.
              </p>
              <div className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
                <div>
                  <p className="font-semibold">Анастасия Мозер</p>
                  <p className="opacity-70">CEO КроссАрт</p>
                  <a href="mailto:a.moser@crossartpro.ru" className="block hover:underline">a.moser@crossartpro.ru</a>
                  <a href="tel:+79166426258" className="block hover:underline">+7 916 642 62 58</a>
                </div>
                <div>
                  <p className="font-semibold">Валерия Гамова</p>
                  <p className="opacity-70">Директор по развитию</p>
                  <a href="mailto:v.gamova@crossartpro.ru" className="block hover:underline">v.gamova@crossartpro.ru</a>
                  <a href="tel:+79112999047" className="block hover:underline">+7 911 299 90 47</a>
                </div>
              </div>
            </div>
            <form className="flex flex-col gap-4 self-center rounded-xl bg-background p-6 text-foreground md:p-8" onSubmit={(e) => e.preventDefault()}>
              <Field label="Имя" type="text" />
              <Field label="Компания" type="text" />
              <Field label="Телефон" type="tel" />
              <Field label="Корпоративный E-mail" type="email" />
              <label className="mt-2 flex cursor-pointer items-start gap-3">
                <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary" />
                <span className="text-xs leading-relaxed text-muted-foreground">
                  Согласен на обработку персональных данных в соответствии с Политикой конфиденциальности.
                </span>
              </label>
              <button type="submit" className={`${btn} mt-2`}>Получить предложение</button>
            </form>
          </div>
        </div>
      </section>
      <footer className="overflow-hidden pt-10">
        <div className="flex justify-center px-6">
          <img src={logoKrossart.url} alt="КроссАрт" width={1245} height={240} loading="lazy" className="logo-krossart w-full max-w-[900px] opacity-90" />
        </div>
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-4 px-6 pt-8 md:px-10">
          <p className="label-xs">© 2026 Кроссарт</p>
          <p className="label-xs">искусство лидерства</p>
        </div>
        <div className="mx-auto max-w-[1400px] space-y-1 px-6 pb-10 pt-4 text-xs leading-relaxed text-muted-foreground md:px-10">
          <p>ИП Мозер Анастасия Сергеевна</p>
          <p>ИНН 233909442711</p>
          <p>Адрес: Российская Федерация, 129344, г. Москва, Искры ул., 19</p>
          <p>Сайт: <a href="https://crossartpro.ru" className="hover:text-accent">crossartpro.ru</a></p>
          <p>E-mail: <a href="mailto:a.moser@crossartpro.ru" className="hover:text-accent">a.moser@crossartpro.ru</a></p>
          <p>MAX: +7 980 470-48-88</p>
          <p><a href="#" className="underline underline-offset-4 hover:text-accent">Политика конфиденциальности и обработки персональных данных</a></p>
        </div>
      </footer>
    </main>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <label className="block">
      <span className="label-xs">{label}</span>
      <input type={type} className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-accent" />
    </label>
  );
}

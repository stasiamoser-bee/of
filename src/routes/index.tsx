import { createFileRoute } from "@tanstack/react-router";

import { HeroArtCarousel } from "@/components/HeroArtCarousel";
import { OrbitingLanguages } from "@/components/OrbitingLanguages";

import logoKrossart from "@/assets/logo-krossart.png.asset.json";
import progMirror from "@/assets/prog-mirror.png.asset.json";
import progDragon from "@/assets/prog-dragon.png.asset.json";
import progSamurai from "@/assets/prog-samurai.png.asset.json";
import pearlShell from "@/assets/pearl-shell-plain.png.asset.json";
import expert1 from "@/assets/expert-anastasia.jpg.asset.json";
import expert2 from "@/assets/expert-maria.jpg.asset.json";
import requestArt from "@/assets/request-abstract.png.asset.json";

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

const limits = ["Слепота данных", "Сужение внимания", "Когнитивные искажения", "Иллюзия истины", "Скорость мышления"];

const thinking = [
  { t: "Лидерское мышление", d: "Вести за собой, когда нет карты. Работать со смыслом, брать ответственность, проявлять смелость и создавать результат." },
  { t: "Коммерческое мышление", d: "Находить деньги там, где их не видят другие. Видеть возможности и результат управленческих решений." },
  { t: "Адаптивное мышление", d: "Менять способ действия быстрее, чем меняется среда. Превращать напряжение в ресурс развития." },
  { t: "Исследовательское мышление", d: "Пересобирать картину реальности, замечать интеллектуальные ловушки, развивать когнитивную автономию." },
  { t: "Инновационное мышление", d: "Создавать инновационные решения и продукты. Превращать креативность в управляемый бизнес-процесс." },
];

const scale = [
  { t: "Кадровый резерв", d: "ответственность · самостоятельность · дерзость · смелость · управленческая позиция · коммуникация · умение вести за собой" },
  { t: "Руководители среднего звена", d: "делегирование · команда · решения в неопределённости · коммерческое мышление · адаптивность · работа со смыслом" },
  { t: "Топ-менеджмент", d: "стратегическое мышление · лидерство в кризисе · культура · влияние · сложные решения · наследие · трансформация бизнеса" },
];

const unique = [
  {
    title: "Самурайская игра",
    author: "Марина Бондаренко",
    img: progSamurai.url,
    lead: "Моделирует среду давления, неопределённости и выбора — и показывает реальные модели поведения лидера.",
    points: ["как лидер принимает решения под давлением", "как взаимодействует с командой и где отказывается от ответственности", "как реагирует на поражение и на что опирается"],
    quote: "Управленческое зеркало, которое сложно создать обычным тренингом.",
  },
  {
    title: "Императорское мышление",
    author: "Бронислав Виногродский",
    img: progDragon.url,
    lead: "Управление системой через традицию китайской управленческой мысли — взгляд человека, который видит целое.",
    points: ["видеть систему и последствия решений", "управлять без избыточного контроля", "отделять стратегически важное от шума", "создавать преемственность и наследие"],
    quote: "Руководитель создаст систему, которая способна удерживать себя сама.",
  },
  {
    title: "Зеркала лидера",
    author: "Анастасия Мозер",
    img: progMirror.url,
    lead: "То, чего лидер не замечает в себе, проявляется в команде. Программа делает слепые зоны видимыми.",
    points: ["видеть свои управленческие слепые зоны", "отделять проблему от собственной реакции", "расширять лидерский репертуар", "работать со смыслом и точнее видеть людей"],
    quote: "Руководитель поймёт, как его мышление создаёт часть реальности, и сможет её менять.",
  },
];

const masterclasses = [
  ["Лидер перемен", "Как сохранять движение, когда меняется сама цель."],
  ["Энергия лидера = энергия команды", "Как вдохновлять на результат и работать с выгоранием."],
  ["Пересобрать реальность", "Критическое мышление для сложной среды."],
  ["Насмотренность для бизнеса", "Как искусство помогает замечать то, что упускают другие."],
  ["Антихрупкое лидерство", "Как выдерживать кризис и становиться сильнее."],
  ["Архитектура новых решений", "Сильные идеи, когда привычное не работает."],
  ["Эстетика инноваций", "Продукты, опережающие время."],
  ["Luxury & Premium", "Сервис для премиального клиента."],
  ["Коммерческое бесстрашие", "Как снять ограничения, тормозящие коммерческий результат."],
];

const approach = [
  ["Работа с причиной", "Исследуем мышление и внутренние ограничения, из которых возникает поведение."],
  ["Реальная бизнес-среда", "Программы проверены с руководителями банков, IT, промышленности, телекома и фармы."],
  ["Междисциплинарность", "Увеличивает количество доступных руководителю решений."],
  ["Нестандартный опыт", "Самурайская игра, культурологические кейсы, исторические модели, интеллектуальные эксперименты."],
  ["Практики-методисты", "Переводят сложные идеи в инструменты, применимые на следующий день."],
];

const results = [
  ["видят больше", "Замечают связи, ограничения и возможности, которые раньше были вне внимания."],
  ["действуют смелее", "Не прячутся за процессами, когда ситуация требует лидерского решения."],
  ["быстрее адаптируются", "Не держатся за первоначальный план, если изменилась реальность."],
  ["лучше работают со сложностью", "Удерживают противоречия и решают без иллюзии полной определённости."],
  ["превращают мышление в результат", "Переносят изменения в решения, команду и бизнес-показатели."],
];

const steps = ["Бизнес-задача", "Диагностика", "Методология", "Образовательный опыт", "Практика", "Измерение"];

const clients = ["ВТБ", "Альфа-Банк", "BORK", "МКБ", "ВТБ Лизинг", "Газпром нефть", "Билайн", "Miele", "Сбер", "Kaspi.kz", "Норникель", "JTI", "Ростелеком", "Газпромбанк"];

const experts = [
  ["Бронислав Виногродский", "Ведущий русский китаевед, автор более 100 книг, стратегический советник руководителей."],
  ["Марина Бондаренко", "Психолог, врач, бизнес-тренер, региональный партнёр The Samurai Game Associates."],
  ["Татьяна Беляева", "Бизнес-психолог, «Лучший преподаватель НИУ ВШЭ 2024», «Фасилитатор года»."],
  ["Андрей Евдокимов", "Бизнес-психолог, executive coach MCC ICF, преподаватель НИУ ВШЭ."],
  ["Андрей Кравцов", "Предприниматель, эксперт международной деловой коммуникации, автор книг."],
];

const btn =
  "inline-block rounded-md bg-primary px-6 py-3 text-xs tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-90";

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
            <p className="max-w-2xl text-lg leading-relaxed text-foreground md:text-2xl">
              Развиваем человеческое мышление лидеров в эпоху ИИ — от кадрового резерва до первых лиц.
            </p>
            <a href="#request" className={btn}>Обсудить задачу</a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <h2 className="display-xl text-2xl leading-tight text-accent md:text-4xl">
            Преимущество сегодня создаёт качество и скорость мышления
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Мы помогаем лидерам видеть больше, принимать сильные решения и действовать, достигая результата.
          </p>
          <p className="label-xs mt-14">Ограничения в мышлении лидера сегодня</p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
            {limits.map((l) => (
              <div key={l} className="panel rounded-xl px-4 py-6 text-sm tracking-[0.1em] uppercase text-primary">{l}</div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="display-xl mx-auto mb-14 max-w-4xl text-center text-2xl leading-tight text-accent md:text-4xl">
            Современный лидер владеет несколькими языками — КроссАрт знает, как их развить
          </h2>
          <OrbitingLanguages />
        </div>
      </section>

      {/* 5 THINKING */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="display-xl text-2xl md:text-4xl">Развиваем 5 типов мышления</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {thinking.map((t, i) => (
              <div key={t.t} className="grid gap-3 py-7 md:grid-cols-[80px_1fr_1.4fr] md:items-baseline">
                <span className="font-display text-2xl text-accent">0{i + 1}</span>
                <h3 className="text-lg font-semibold tracking-[0.12em] uppercase text-primary">{t.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.d}</p>
              </div>
            ))}
          </div>

          <h3 className="display-xl mt-20 text-center text-2xl text-accent md:text-3xl">Масштаб лидера</h3>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {scale.map((s) => (
              <div key={s.t} className="panel rounded-xl p-8">
                <p className="text-base font-semibold tracking-[0.1em] uppercase text-primary">{s.t}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE PROGRAMS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="label-xs text-center">Уникальные программы</p>
          <h2 className="display-xl mt-3 text-center text-3xl text-accent md:text-5xl">Только у нас</h2>
          <div className="mt-14 space-y-16">
            {unique.map((p, i) => (
              <article key={p.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
                <img src={p.img} alt={p.title} loading="lazy" className="mx-auto h-72 w-full object-contain md:h-[420px]" />
                <div className="panel rounded-xl p-8 md:p-10">
                  <p className="label-xs">Автор программы · {p.author}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[0.12em] uppercase text-primary md:text-3xl">{p.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-foreground">{p.lead}</p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {p.points.map((x) => (
                      <li key={x}>— {x}</li>
                    ))}
                  </ul>
                  <p className="mt-6 border-l-2 border-accent pl-4 text-sm italic text-foreground">{p.quote}</p>
                  <a href="#request" className={`${btn} mt-8`}>Хочу программу</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERDISCIPLINARY */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 md:grid-cols-2 md:px-10">
          <div>
            <p className="label-xs">Междисциплинарный подход</p>
            <h2 className="display-xl mt-3 text-3xl text-accent md:text-5xl">Мы соединяем</h2>
            <ul className="mt-8 space-y-2">
              {["управление", "психологию", "практики бизнеса", "культуру", "историю", "технологии, инновации и ИИ"].map((x) => (
                <li key={x} className="display-xl text-xl text-foreground md:text-2xl">{x}</li>
              ))}
            </ul>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              Инструменты, которые помогают выйти за пределы привычной бизнес-логики и расширить репертуар решений.
            </p>
          </div>
          <img src={pearlShell.url} alt="Серебряная раковина с жемчужиной" loading="lazy" className="w-full object-contain" />
        </div>
        <p className="mx-auto mt-16 max-w-3xl px-6 text-center text-lg italic leading-relaxed text-foreground md:text-2xl">
          «Искусство лидерства — искусство находить решения в реальности, где готового ответа нет.»
        </p>
      </section>

      {/* MASTERCLASSES */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="display-xl text-2xl md:text-4xl">Библиотека мастер-классов</h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            50+ коротких интеллектуальных форматов под конкретную бизнес-задачу · онлайн и оффлайн · 1,5 часа · теория + практика
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {masterclasses.map(([t, d]) => (
              <div key={t} className="panel rounded-xl p-6 transition-colors hover:border-accent">
                <p className="font-semibold tracking-[0.1em] uppercase text-primary">{t}</p>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#request" className={btn}>Получить каталог</a>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="display-xl text-center text-2xl text-accent md:text-4xl">Почему КроссАрт</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {approach.map(([t, d], i) => (
              <div key={t}>
                <p className="font-display text-2xl text-accent">(0{i + 1})</p>
                <p className="mt-3 font-semibold text-foreground">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="display-xl mt-14 text-center text-xl text-foreground md:text-3xl">Лидер получает новый способ думать.</p>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <p className="label-xs">Результат</p>
          <h2 className="display-xl mt-3 text-3xl md:text-5xl">С нами лидеры…</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {results.map(([t, d]) => (
              <div key={t} className="grid gap-2 py-6 md:grid-cols-2">
                <p className="display-xl text-xl text-accent md:text-2xl">{t}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
          <h2 className="display-xl text-2xl text-accent md:text-4xl">Как мы создаём программы</h2>
          <ol className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <li key={s} className="panel rounded-xl p-5">
                <p className="font-display text-xl text-accent">{i + 1}</p>
                <p className="mt-2 text-sm tracking-[0.08em] uppercase text-foreground">{s}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Можем начать с одного мастер-класса, собрать модульную программу или создать корпоративную архитектуру развития
            лидерского мышления. Форматы — от 1 дня до годовых программ с сопровождением.
          </p>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <h2 className="display-xl text-2xl md:text-4xl">Нам доверяют развитие лидеров</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-5">
            {clients.map((c) => (
              <span key={c} className="display-xl text-xl text-primary md:text-2xl">{c}</span>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Программы работают в разных бизнес-культурах: от банков и IT до промышленности и FMCG.
          </p>
        </div>
      </section>

      {/* EXPERTS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="display-xl text-2xl text-accent md:text-4xl">Постоянные эксперты КроссАрт</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { img: expert1.url, n: "Анастасия Мозер", d: "CEO КроссАрт, стратегический лидер в EdTech, 10+ лет на позиции CEO в IT-компаниях. Эксперт школы управления РБК." },
              { img: expert2.url, n: "Мария Дмитриева", d: "Академический эксперт, искусствовед, методолог управленческих программ. Автор программ для Газпром нефти, Хоум Кредит, Ренова." },
            ].map((e) => (
              <figure key={e.n} className="grid grid-cols-[140px_1fr] gap-5 md:grid-cols-[200px_1fr]">
                <img src={e.img} alt={e.n} loading="lazy" className="aspect-[3/4] w-full rounded-xl object-cover" />
                <figcaption className="self-center">
                  <p className="font-semibold text-foreground">{e.n}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {experts.map(([n, d]) => (
              <div key={n} className="panel rounded-xl p-5">
                <p className="font-semibold text-foreground">{n}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST */}
      <section id="request" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="panel grid gap-10 rounded-xl p-8 md:grid-cols-2 md:p-14">
            <div>
              <h2 className="display-xl text-2xl text-accent md:text-4xl">Помогаем бизнесу достигать результатов в эпоху турбулентности</h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Расскажите о задаче — подберём формат и программу для ваших лидеров.
              </p>
              <div className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-foreground">Анастасия Мозер</p>
                  <p className="text-muted-foreground">CEO КроссАрт</p>
                  <a href="mailto:a.moser@crossartpro.ru" className="block hover:text-accent">a.moser@crossartpro.ru</a>
                  <a href="tel:+79166426258" className="block hover:text-accent">+7 916 642 62 58</a>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Валерия Гамова</p>
                  <p className="text-muted-foreground">Директор по развитию</p>
                  <a href="mailto:v.gamova@crossartpro.ru" className="block hover:text-accent">v.gamova@crossartpro.ru</a>
                  <a href="tel:+79112999047" className="block hover:text-accent">+7 911 299 90 47</a>
                </div>
              </div>
              <img src={requestArt.url} alt="Абстрактная композиция" loading="lazy" className="mt-10 w-full max-w-sm" />
            </div>
            <form className="flex flex-col gap-5 self-center" onSubmit={(e) => e.preventDefault()}>
              <Field label="Имя" type="text" />
              <Field label="Компания" type="text" />
              <Field label="Телефон" type="tel" />
              <Field label="Корпоративный E-mail" type="email" />
              <label className="mt-2 flex cursor-pointer items-start gap-3">
                <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary" />
                <span className="text-xs leading-relaxed text-muted-foreground">
                  Согласен на обработку персональных данных в соответствии с Политикой конфиденциальности и обработки персональных данных.
                </span>
              </label>
              <button type="submit" className={`${btn} mt-2`}>Обсудить задачу</button>
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

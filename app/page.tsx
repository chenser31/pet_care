"use client";

import { useEffect, useState } from "react";

const phoneNumber = "13800000000";

const services = [
  {
    icon: "bath",
    title: "基础洗澡",
    body: "清洁、护毛、吹干、梳理、耳道清洁与指甲修剪，适合日常维护。"
  },
  {
    icon: "trim",
    title: "造型美容",
    body: "根据品种和生活习惯修剪造型，兼顾好看、透气和日常打理难度。"
  },
  {
    icon: "care",
    title: "皮毛护理",
    body: "针对换毛、打结、干燥和敏感皮肤，提供深层梳理与舒缓护理。"
  },
  {
    icon: "adapt",
    title: "幼宠适应",
    body: "降低水声、风声和陌生环境压力，循序渐进建立洗护安全感。"
  }
];

const pricing = [
  {
    tag: "日常推荐",
    title: "基础洗护",
    price: "¥88",
    featured: false,
    items: ["温和清洁与护毛", "耳道清洁、指甲修剪", "吹干梳理与基础检查"],
    cta: "预约基础洗护"
  },
  {
    tag: "人气套餐",
    title: "精致美容",
    price: "¥168",
    featured: true,
    items: ["基础洗护全套内容", "局部或全身造型修剪", "毛结处理与护理建议"],
    cta: "预约精致美容"
  },
  {
    tag: "敏感适用",
    title: "舒缓护理",
    price: "¥128",
    featured: false,
    items: ["皮毛状态评估", "低刺激洗剂与舒缓护理", "换毛季深层梳理"],
    cta: "预约舒缓护理"
  }
];

const advantages = [
  {
    icon: "shield",
    title: "工具一客一消",
    body: "毛巾、梳具、剪刀和操作台按流程清洁，减少交叉接触风险。"
  },
  {
    icon: "clock",
    title: "预约制不赶工",
    body: "根据宠物状态预留足够时间，避免因为排队和噪音增加压力。"
  },
  {
    icon: "feedback",
    title: "护理后反馈",
    body: "结束后同步皮肤、耳道、牙口和毛结观察，给出居家护理建议。"
  }
];

const steps = [
  ["预约沟通", "确认体型、年龄、性格、过敏史和期望服务。"],
  ["到店评估", "检查毛结、皮肤、耳道和指甲状态，再确认价格。"],
  ["温和洗护", "按宠物耐受度安排清洁、吹干、梳理和修剪。"],
  ["交付反馈", "同步护理结果，提醒下一次洗护周期和居家要点。"]
];

const reviews = [
  {
    body: "我家小狗很怕吹风，这里会分段吹干，中间还让它休息。回家后毛很蓬，也没有焦躁。",
    initial: "L",
    name: "李女士",
    meta: "比熊主人"
  },
  {
    body: "猫咪第一次洗澡，工作人员提前说清楚流程，结束后还拍了耳朵和皮肤状态给我看。",
    initial: "C",
    name: "陈先生",
    meta: "英短主人"
  },
  {
    body: "价格说得很明白，没有临时加项目。长毛犬打结处理得很耐心，造型也清爽。",
    initial: "W",
    name: "王女士",
    meta: "萨摩耶主人"
  },
  {
    body: "预约前会先问清楚过敏史和性格，到了店里也没有催我们。洗完还把毛结位置标出来，回家护理更有方向。",
    initial: "Z",
    name: "赵女士",
    meta: "布偶猫主人"
  },
  {
    body: "以前洗澡总是很抗拒，这次美容师一直轻声安抚，还把吹风时间拆开。第二次来明显没那么紧张了。",
    initial: "H",
    name: "何先生",
    meta: "柴犬主人"
  },
  {
    body: "店里味道很清爽，猫狗分时段安排让我放心。洗护结束后毛发顺了很多，指甲也修得很圆滑。",
    initial: "M",
    name: "马女士",
    meta: "暹罗猫主人"
  },
  {
    body: "老年犬腿脚不太好，工作人员会配合它的节奏，没有硬抱硬拉。护理后还提醒了关节和皮肤要注意的地方。",
    initial: "S",
    name: "孙先生",
    meta: "金毛主人"
  },
  {
    body: "造型沟通得很细，会先确认想保留的长度。最后修出来清爽但不夸张，很适合夏天日常打理。",
    initial: "Q",
    name: "钱女士",
    meta: "泰迪主人"
  },
  {
    body: "临走前会把耳道、脚垫和皮肤状态都说一遍，不只是洗干净。小细节很多，感觉是真的懂宠物。",
    initial: "Y",
    name: "杨先生",
    meta: "柯基主人"
  }
];

const faqs = [
  [
    "洗护需要提前多久预约？",
    "建议提前一天预约。周末和节假日时段较紧，长毛犬和猫咪请尽量提前沟通。"
  ],
  [
    "胆小或应激的宠物可以洗吗？",
    "可以先到店评估，我们会根据状态调整声音、时长和接触方式，必要时建议分阶段适应。"
  ],
  [
    "严重打结怎么收费？",
    "到店评估后确认处理方案，轻度打结可梳开，严重打结会说明是否需要剃短和额外费用。"
  ],
  [
    "可以上门接送吗？",
    "门店周边可预约接送服务，具体范围和时间以电话确认为准。"
  ]
];

const carouselImages = [
  "/images/warm-paws-shop.png",
  "/images/warm-paws-cat-care.png",
  "/images/warm-paws-dog-bath.png"
];

const appointmentTimes = ["今天 10:30", "今天 14:00", "今天 17:30", "明天上午"];

function Icon({ name }: { name: string }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none"
  };

  const paths: Record<string, React.ReactNode> = {
    paw: (
      <>
        <circle cx="11" cy="16" r="4" />
        <circle cx="6" cy="10" r="2" />
        <circle cx="11" cy="7" r="2" />
        <circle cx="16" cy="10" r="2" />
        <circle cx="18" cy="15" r="2" />
      </>
    ),
    bath: (
      <>
        <path d="M4 14h16" />
        <path d="M7 14v5" />
        <path d="M17 14v5" />
        <path d="M8 10a4 4 0 0 1 8 0v4H8z" />
        <path d="M9 6 7 4" />
        <path d="m15 6 2-2" />
      </>
    ),
    trim: (
      <>
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M8 17h8" />
        <path d="M5 4h14v16H5z" />
      </>
    ),
    care: (
      <>
        <path d="M12 3c3 3 5 6 5 10a5 5 0 0 1-10 0c0-4 2-7 5-10z" />
        <path d="M9 14c1.2 1.5 2.8 2.2 5 2" />
      </>
    ),
    adapt: (
      <>
        <path d="M4 12c3-5 6-7 8-7s5 2 8 7c-3 5-6 7-8 7s-5-2-8-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5l3 2" />
      </>
    ),
    feedback: (
      <>
        <path d="M8 19c-2-1-3-3-3-6a7 7 0 0 1 14 0c0 3-1 5-3 6" />
        <path d="M8 19h8" />
        <path d="M10 22h4" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6.27 6.27l1.29-1.29a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    )
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" {...common}>
      {paths[name]}
    </svg>
  );
}

function BookingLink({
  children,
  primary = false
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 font-bold transition hover:-translate-y-0.5 ${
        primary
          ? "border-transparent bg-coral text-white shadow-[0_12px_28px_rgba(233,133,111,0.28)]"
          : "border-line bg-white text-mint-dark"
      }`}
      href="#contact"
    >
      {children}
    </a>
  );
}

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % carouselImages.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="relative min-h-[430px] overflow-hidden rounded-[18px] bg-[#eef8f2] shadow-soft md:min-h-[360px]"
      role="region"
      aria-label="暖爪宠物洗护门店与洗护环境轮播图"
    >
      {carouselImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition duration-700 ${
            index === current ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center gap-2">
        {carouselImages.map((image, index) => (
          <button
            key={image}
            className={`h-2.5 w-2.5 rounded-full border border-white/90 shadow-[0_4px_12px_rgba(36,48,47,0.16)] ${
              index === current ? "bg-coral" : "bg-white/60"
            }`}
            type="button"
            aria-label={`第 ${index + 1} 张`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

function ReviewCarousel() {
  const reviewPages = Array.from({ length: Math.ceil(reviews.length / 3) }, (_, index) =>
    reviews.slice(index * 3, index * 3 + 3)
  );
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % reviewPages.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [reviewPages.length]);

  const goToPrevious = () => {
    setCurrent((index) => (index - 1 + reviewPages.length) % reviewPages.length);
  };

  const goToNext = () => {
    setCurrent((index) => (index + 1) % reviewPages.length);
  };

  return (
    <div className="relative" role="region" aria-label="客户评价轮播">
      <div className="relative min-h-[720px] overflow-hidden md:min-h-[270px]">
        {reviewPages.map((page, pageIndex) => (
          <div
            key={page.map((review) => review.name).join("-")}
            className={`absolute inset-0 grid grid-cols-1 gap-5 transition duration-700 ease-out md:grid-cols-3 ${
              pageIndex === current
                ? "translate-x-0 opacity-100"
                : pageIndex < current
                  ? "-translate-x-8 opacity-0"
                  : "translate-x-8 opacity-0"
            }`}
            aria-hidden={pageIndex !== current}
          >
            {page.map((review) => (
              <article key={review.name} className="flex min-h-[220px] flex-col rounded-lg border border-line bg-white p-6 shadow-card">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-lg text-gold" aria-label="五星评价">
                    ★★★★★
                  </div>
                  <span className="rounded-full bg-[#fff0eb] px-2.5 py-1 text-xs font-extrabold text-coral-dark">
                    真实反馈
                  </span>
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-7 text-muted">{review.body}</p>
                <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-[42px] w-[42px] place-items-center rounded-full bg-mint font-black text-mint-dark">
                    {review.initial}
                  </span>
                  <div>
                    <strong className="block">{review.name}</strong>
                    <span className="text-[13px] text-muted">{review.meta}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex gap-2" aria-label="选择评价页">
          {reviewPages.map((page, index) => (
            <button
              key={page[0].name}
              className={`h-2.5 rounded-full transition-all ${
                index === current ? "w-8 bg-coral" : "w-2.5 bg-mint-dark/25 hover:bg-mint-dark/45"
              }`}
              type="button"
              aria-label={`第 ${index + 1} 页评价`}
              aria-pressed={index === current}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white font-black text-mint-dark shadow-card transition hover:-translate-y-0.5"
            type="button"
            aria-label="上一页评价"
            onClick={goToPrevious}
          >
            ←
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white font-black text-mint-dark shadow-card transition hover:-translate-y-0.5"
            type="button"
            aria-label="下一页评价"
            onClick={goToNext}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [preferredTime, setPreferredTime] = useState(appointmentTimes[0]);

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur">
        <nav
          className="mx-auto flex min-h-[68px] w-[min(1120px,calc(100%-32px))] items-center justify-between gap-5"
          aria-label="主导航"
        >
          <a className="inline-flex items-center gap-2.5 font-extrabold" href="#top" aria-label="暖爪宠物洗护首页">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-mint to-[#fff4d8] text-mint-dark shadow-[inset_0_0_0_1px_rgba(50,107,91,0.13)]">
              <Icon name="paw" />
            </span>
            <span className="text-[15px] sm:text-base">暖爪宠物洗护</span>
          </a>
          <div className="hidden items-center gap-5 whitespace-nowrap text-sm text-muted md:flex" aria-label="页面导航">
            <a className="hover:text-mint-dark" href="#services">
              服务
            </a>
            <a className="hover:text-mint-dark" href="#pricing">
              套餐
            </a>
            <a className="hover:text-mint-dark" href="#process">
              流程
            </a>
            <a className="hover:text-mint-dark" href="#reviews">
              口碑
            </a>
            <a className="hover:text-mint-dark" href="#contact">
              联系
            </a>
          </div>
          <a
            className="inline-flex min-h-10 items-center justify-center rounded-lg bg-coral px-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(233,133,111,0.28)] transition hover:-translate-y-0.5 sm:min-h-11 sm:px-5"
            href={`tel:${phoneNumber}`}
            aria-label="拨打预约电话"
          >
            电话预约
          </a>
        </nav>
      </header>

      <main id="top">
        <section
          className="bg-[radial-gradient(circle_at_90%_10%,rgba(244,197,111,0.26),transparent_28%),linear-gradient(180deg,#fffaf2_0%,#f7fbf8_100%)]"
          aria-labelledby="hero-title"
        >
          <div className="mx-auto grid min-h-[calc(100vh-68px)] w-[min(1120px,calc(100%-32px))] grid-cols-1 items-center gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.88fr)]">
            <div>
              <span className="inline-flex min-h-[30px] items-center gap-2 rounded-full border border-mint-dark/15 bg-mint/40 px-3 text-[13px] font-bold text-mint-dark">
                猫犬洗护 · 美容修剪 · 皮毛护理
              </span>
              <h1 id="hero-title" className="mt-5 max-w-[720px] text-[42px] font-extrabold leading-[1.02] sm:text-[58px] lg:text-[78px]">
                把每一次洗护，都做成宠物安心的小仪式
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                暖爪宠物洗护为猫咪和狗狗提供一对一评估、低刺激清洁、专业吹护与精修服务，让毛孩子干净舒服，也让主人放心。
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <BookingLink primary>立即预约</BookingLink>
                <a className="inline-flex min-h-11 items-center justify-center rounded-lg border border-line bg-white px-5 font-bold text-mint-dark transition hover:-translate-y-0.5" href={`tel:${phoneNumber}`}>
                  拨打电话
                </a>
              </div>
              <div className="mt-4 max-w-[650px] rounded-lg border border-line bg-white/75 p-4 shadow-[0_12px_30px_rgba(36,48,47,0.06)]">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <label className="text-sm font-bold text-mint-dark" htmlFor="preferred-time">
                    期望到店时间
                  </label>
                  <span className="text-xs text-muted">电话确认后为你保留时段</span>
                </div>
                <div id="preferred-time" className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="选择期望到店时间">
                  {appointmentTimes.map((time) => {
                    const selected = preferredTime === time;

                    return (
                      <button
                        key={time}
                        className={`min-h-10 rounded-lg border px-3 text-sm font-bold transition hover:-translate-y-0.5 ${
                          selected ? "border-coral bg-coral text-white shadow-[0_10px_24px_rgba(233,133,111,0.22)]" : "border-line bg-white text-mint-dark"
                        }`}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setPreferredTime(time)}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-3 text-sm text-muted">已选择：{preferredTime} 到店，可在电话中调整猫犬分时段安排。</p>
              </div>
              <div className="mt-7 grid max-w-[650px] grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  ["透明护理", "进店评估，过程可沟通"],
                  ["分区消毒", "猫犬分时段，工具一客一消"],
                  ["温和产品", "按皮肤和毛发状态选择洗剂"]
                ].map(([title, body]) => (
                  <div key={title} className="min-h-[92px] rounded-lg border border-line bg-white/70 p-4">
                    <strong className="block">{title}</strong>
                    <span className="text-[13px] text-muted">{body}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="relative min-h-[380px] overflow-hidden rounded-xl bg-cover bg-center shadow-soft sm:min-h-[420px] lg:min-h-[540px] lg:rounded-[18px]"
              style={{ backgroundImage: "linear-gradient(135deg,rgba(207,231,220,0.22),rgba(255,244,216,0.18)),url('/images/grooming-appointment.png')" }}
              role="img"
              aria-label="干净明亮的宠物洗护空间"
            >
              <div className="absolute bottom-5 right-5 w-[min(300px,calc(100%-40px))] rounded-lg bg-paper/95 p-5 shadow-[0_14px_32px_rgba(36,48,47,0.16)]">
                <strong className="block">今日可预约时段</strong>
                <span className="text-sm text-muted">10:30、14:00、17:30。幼宠、长毛犬和胆小猫建议提前电话沟通。</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 sm:py-20" aria-labelledby="services-title">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <SectionHead id="services-title" title="常用洗护服务" body="从基础清洁到造型护理，按宠物体型、毛量、皮肤状态和性格安排合适的护理节奏。" />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article key={service.title} className="min-h-[220px] rounded-lg border border-line bg-white p-6 shadow-card">
                  <IconBubble name={service.icon} />
                  <h3 className="mb-2 text-[19px] font-bold">{service.title}</h3>
                  <p className="text-[15px] text-muted">{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-soft py-16 sm:py-20" aria-labelledby="pricing-title">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <SectionHead id="pricing-title" title="清晰套餐价格" body="以下为参考价，最终按体型、毛量、打结程度和护理需求确认。" />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {pricing.map((plan) => (
                <article
                  key={plan.title}
                  className={`relative overflow-hidden rounded-lg border bg-white p-7 shadow-card ${
                    plan.featured ? "border-coral/40 shadow-[0_18px_42px_rgba(233,133,111,0.16)]" : "border-line"
                  }`}
                >
                  <span className="mb-5 inline-block rounded-full bg-[#fff0eb] px-2.5 py-1 text-xs font-extrabold text-coral-dark">
                    {plan.tag}
                  </span>
                  <h3 className="text-[19px] font-bold">{plan.title}</h3>
                  <div className="my-4 flex items-baseline gap-1">
                    <strong className="text-[38px] leading-none">{plan.price}</strong>
                    <span className="text-muted">起</span>
                  </div>
                  <ul className="mb-6 grid gap-2.5 text-[15px] text-muted">
                    {plan.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="font-black text-mint-dark">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <BookingLink primary={plan.featured}>{plan.cta}</BookingLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20" aria-labelledby="advantages-title">
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] grid-cols-1 items-center gap-7 lg:grid-cols-[0.95fr_1.05fr]">
            <div
              className="min-h-[360px] rounded-[18px] bg-cover bg-center shadow-soft lg:min-h-[460px]"
              style={{ backgroundImage: "linear-gradient(135deg,rgba(50,107,91,0.18),rgba(244,197,111,0.22)),url('https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=1000&q=80')" }}
              role="img"
              aria-label="被护理后的干净宠物"
            />
            <div>
              <h2 id="advantages-title" className="mb-7 text-[30px] font-extrabold leading-tight sm:text-[42px]">
                让主人放心的细节
              </h2>
              <div className="grid gap-3.5">
                {advantages.map((item) => (
                  <article key={item.title} className="grid min-h-[120px] grid-cols-1 gap-4 rounded-lg border border-line bg-white p-5 shadow-card sm:grid-cols-[auto_1fr]">
                    <IconBubble name={item.icon} />
                    <div>
                      <h3 className="mb-2 text-[19px] font-bold">{item.title}</h3>
                      <p className="text-[15px] text-muted">{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="bg-soft py-16 sm:py-20" aria-labelledby="process-title">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <SectionHead id="process-title" title="四步完成安心洗护" body="流程简单清楚，第一次来的毛孩子也能慢慢适应。" />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([title, body], index) => (
                <article
                  key={title}
                  className="group relative min-h-[208px] overflow-hidden rounded-lg border border-line bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-mint-dark via-mint to-gold" />
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-mint/35 transition duration-200 group-hover:scale-110" />
                  <div className="relative mb-8 flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[#fff0eb] text-sm font-black text-coral shadow-[inset_0_0_0_1px_rgba(233,133,111,0.16)]">
                      0{index + 1}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-mint-dark/70" />
                  </div>
                  <h3 className="relative mb-2 text-xl font-extrabold">{title}</h3>
                  <p className="relative text-[15px] leading-7 text-muted">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-16 sm:py-20" aria-labelledby="reviews-title">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <SectionHead id="reviews-title" title="附近宠物主的评价" body="更多来自猫狗主人的真实反馈，自动轮播也可以手动切换。" />
            <ReviewCarousel />
          </div>
        </section>

        <section className="bg-soft py-16 sm:py-20" aria-labelledby="faq-title">
          <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
            <SectionHead id="faq-title" title="常见问题" body="预约前可以先了解这些细节，特殊情况建议直接电话沟通。" />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {faqs.map(([title, body]) => (
                <article key={title} className="rounded-lg border border-line bg-white p-6 shadow-card">
                  <h3 className="mb-1.5 text-lg font-bold">{title}</h3>
                  <p className="text-[15px] text-muted">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[linear-gradient(135deg,rgba(207,231,220,0.72),rgba(255,244,216,0.8)),#f5f0e8] py-16 sm:py-20" aria-labelledby="contact-title">
          <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] grid-cols-1 gap-7 lg:grid-cols-2">
            <div className="rounded-lg border border-line bg-white p-8 shadow-card">
              <span className="inline-flex min-h-[30px] items-center rounded-full border border-mint-dark/15 bg-mint/40 px-3 text-[13px] font-bold text-mint-dark">
                欢迎预约到店体验
              </span>
              <h2 id="contact-title" className="mt-4 text-[30px] font-extrabold leading-tight sm:text-[44px]">
                暖爪宠物洗护
              </h2>
              <p className="mt-3 text-muted">告诉我们宠物的品种、年龄、体重、毛发状态和是否怕水怕风，我们会帮你安排合适的洗护时间。</p>
              <div className="my-6 grid gap-3.5">
                <ContactRow icon="phone" title="138-0000-0000" body="电话预约更适合第一次到店" />
                <ContactRow icon="clock" title={`期望到店：${preferredTime}`} body="如需更早或更晚，可电话沟通调整" />
                <ContactRow icon="pin" title="城市中心宠物友好街区 88 号" body="近社区停车点，支持短暂停车接送" />
                <ContactRow icon="clock" title="周一至周日 09:30-20:30" body="节假日营业时间以门店通知为准" />
              </div>
              <div className="flex flex-wrap gap-3">
                <a className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg bg-coral px-5 font-bold text-white shadow-[0_12px_28px_rgba(233,133,111,0.28)] transition hover:-translate-y-0.5 sm:flex-none" href={`tel:${phoneNumber}`}>
                  电话预约
                </a>
                <a className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg border border-line bg-white px-5 font-bold text-mint-dark transition hover:-translate-y-0.5 sm:flex-none" href="https://maps.google.com/?q=城市中心宠物友好街区88号" target="_blank" rel="noopener noreferrer">
                  查看地址
                </a>
              </div>
            </div>
            <Carousel />
          </div>
        </section>
      </main>

      <footer className="bg-[#213331] py-6 text-sm text-white/70">
        <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col justify-between gap-2 sm:flex-row">
          <span>© 2026 暖爪宠物洗护</span>
          <span>占位信息可替换为真实门店资料</span>
        </div>
      </footer>
    </>
  );
}

function SectionHead({ id, title, body }: { id: string; title: string; body: string }) {
  return (
    <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
      <h2 id={id} className="text-[28px] font-extrabold leading-tight sm:text-[42px]">
        {title}
      </h2>
      <p className="max-w-[430px] text-muted">{body}</p>
    </div>
  );
}

function IconBubble({ name }: { name: string }) {
  return (
    <span className="mb-5 grid h-[42px] w-[42px] place-items-center rounded-full bg-[#eef8f2] text-mint-dark">
      <Icon name={name} />
    </span>
  );
}

function ContactRow({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="grid min-h-[58px] grid-cols-[46px_1fr] items-center gap-3">
      <span className="grid h-[42px] w-[42px] place-items-center rounded-full bg-[#eef8f2] text-mint-dark">
        <Icon name={icon} />
      </span>
      <div>
        <strong className="block">{title}</strong>
        <span className="text-sm text-muted">{body}</span>
      </div>
    </div>
  );
}

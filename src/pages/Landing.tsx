import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate, useScroll, useTransform } from "framer-motion";
import {
  Dumbbell,
  Utensils,
  LineChart,
  MessageCircle,
  ClipboardList,
  Salad,
  Check,
  Instagram,
  Youtube,
  Flame,
  ArrowLeft,
  Zap,
  Trophy,
  Target,
  Plus,
  Minus,
  Sparkles,
  MapPin,
  AtSign,
  Menu,
  X,
  Award,
  Medal,
} from "lucide-react";
import { ASSETS } from "@/lib/assets";

/* ---------------- constants ---------------- */
const WHATSAPP_URL = "https://wa.me/message/IGNFTDLW4O4CD1";
const INSTAGRAM_URL = "https://www.instagram.com/mo.husseiny/";
const YOUTUBE_URL = "https://www.youtube.com/@mo.husseiny";
const THREADS_URL = "https://www.threads.com/@mo.husseiny";

/* ---------------- progress bar ---------------- */
function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-gradient-to-r from-primary via-accent to-primary origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

/* ---------------- floating WhatsApp ---------------- */
function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      initial={{ opacity: 0, scale: 0 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-primary text-white grid place-items-center shadow-glow hover:scale-110 transition-transform animate-pulse-ring"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}

/* ---------------- section divider ---------------- */
function SectionDivider() {
  return (
    <div className="relative flex justify-center py-6 md:py-10">
      <div className="w-32 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
}

/* ---------------- helpers ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const value = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v).toLocaleString("ar-EG")),
    });
    return controls.stop;
  }, [inView, to, value]);
  const isPrefix = suffix === "+";
  const isWord = /[\u0600-\u06FF]/.test(suffix);
  return (
    <span ref={ref} dir="ltr" className="inline-block whitespace-nowrap">
      {isPrefix ? (
        <>
          {suffix}
          {display}
        </>
      ) : (
        <>
          {display}
          {isWord ? <span className="mr-1">{suffix}</span> : suffix}
        </>
      )}
    </span>
  );
}

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ---------------- page ---------------- */
export default function Landing() {
  useEffect(() => {
    document.title = "Mohammed Husseiny — كوتش أونلاين لتغيير جسمك وحياتك";
  }, []);

  return (
    <main className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <ProgressBar />
      <Nav />
      <Hero />
      <SectionDivider />
      <Marquee />
      <SectionDivider />
      <Stats />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Transforms />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Pricing />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <FinalCTA />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}

/* ---------------- Nav (sticky, transparent → solid on scroll) ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { h: "#about", t: "الكوتش" },
    { h: "#transforms", t: "التحولات" },
    { h: "#pricing", t: "الباقات" },
    { h: "#faq", t: "أسئلة" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? "backdrop-blur-2xl bg-background/80 border-b border-white/10" : "bg-transparent border-b border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 h-16 md:h-20 flex items-center justify-between gap-3">
        <a href="#" className="flex min-w-0 items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 shrink-0 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
            <Flame className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="font-black text-sm tracking-tight truncate">M. HUSSEINY</div>
            <div className="text-[9px] tracking-[0.25em] text-white/40 truncate">ONLINE COACH</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map((l) => (
            <a
              key={l.h}
              href={l.h}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.t}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="group relative inline-flex items-center gap-2 h-10 md:h-11 px-4 md:px-6 rounded-full bg-gradient-primary text-white text-xs md:text-sm font-black shadow-glow hover:shadow-[0_0_40px_oklch(0.72_0.19_45/0.6)] hover:-translate-y-0.5 transition-all"
          >
            <span className="whitespace-nowrap">احجز مكانك</span>
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-0.5 transition-transform" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
            className="md:hidden w-11 h-11 grid place-items-center rounded-full border border-white/15 text-white/80"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden border-t border-white/10"
      >
        <nav className="px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.h}
              href={l.h}
              onClick={() => setOpen(false)}
              className="py-4 px-3 rounded-xl text-sm text-white/80 hover:bg-white/5 min-h-[44px] flex items-center"
            >
              {l.t}
            </a>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}

/* ---------------- Hero (larger coach + dark overlay + distinct CTAs) ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="relative lg:min-h-[100svh] pt-20 md:pt-24 overflow-hidden">
      {/* Ambient bg glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-glow" />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px] animate-glow"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute inset-0 noise-bg opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center pb-16 md:pb-24">
        {/* Text col */}
        <div className="relative z-10 order-2 lg:order-1">
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-black leading-[0.88] tracking-tight text-[clamp(2.8rem,9vw,6.5rem)]">
              <span className="block">غيّر</span>
              <span className="block text-gradient">جسمك.</span>
              <span className="block text-white/25 text-[0.55em] font-black">غيّر حياتك.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-lg text-base md:text-lg text-white/70 leading-relaxed">
              كوتش <span className="text-white font-bold">محمد حسيني</span> — نظام تدريب وتغذية مصمم
              لك أنت، مع متابعة يومية حقيقية. مش قوالب جاهزة، ومش وعود فاضية.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {/* Primary CTA — filled gradient with glow */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto h-14 px-7 md:px-8 rounded-full bg-gradient-primary text-white font-black text-base md:text-lg shadow-glow hover:-translate-y-1 hover:shadow-[0_25px_60px_-10px_oklch(0.72_0.19_45/0.7)] transition-all"
              >
                <Sparkles className="w-5 h-5 shrink-0" />
                ابدأ التحدي
                <ArrowLeft className="w-5 h-5 shrink-0 group-hover:-translate-x-1 transition-transform" />
              </a>
              <a
                href="#transforms"
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto h-14 px-7 rounded-full bg-white/5 backdrop-blur border border-white/15 text-white font-bold hover:bg-white/10 hover:border-white/40 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                شوف النتائج
              </a>
            </div>
          </Reveal>
        </div>

        {/* Image col — large coach photo w/ dark gradient overlay */}
        <motion.div style={{ y }} className="relative order-1 lg:order-2 z-0">
          <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-elegant">
            <img
              src={ASSETS.coach1}
              alt="Coach Mohammed Husseiny"
              className="absolute inset-0 w-full h-full object-cover object-center scale-105"
            />
            {/* dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/30" />
            {/* signature card */}
            <div className="absolute bottom-5 right-5 left-5 md:left-auto md:max-w-[70%] rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 p-4">
              <div className="text-[10px] tracking-[0.3em] text-primary font-bold">
                CERTIFIED COACH
              </div>
              <div className="mt-1 text-lg md:text-xl font-black text-white">Mohammed Husseiny</div>
              <div className="text-xs text-white/60">Strength · Nutrition · Mindset</div>
            </div>
          </div>
          {/* floating stat bubble */}
          <div className="hidden md:flex absolute -top-6 -left-6 flex-col items-center justify-center w-28 h-28 rounded-full bg-gradient-primary shadow-glow rotate-[-8deg]">
            <div className="text-3xl font-black text-white leading-none">+500</div>
            <div className="text-[10px] font-bold text-white/80 mt-1">متدرب</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const words = [
    "تدريب مخصص",
    "تغذية علمية",
    "متابعة يومية",
    "نتائج حقيقية",
    "بدون مكملات وهمية",
    "تحدي 12 أسبوع",
  ];
  const line = [...words, ...words];
  return (
    <div className="bg-primary/5 py-6 overflow-hidden">
      <div className="flex gap-8 sm:gap-12 whitespace-nowrap animate-marquee-fast">
        {line.map((w, i) => (
          <div
            key={i}
            className="flex items-center gap-8 sm:gap-12 text-xl sm:text-2xl md:text-4xl font-black"
          >
            <span className="text-gradient">{w}</span>
            <Flame className="w-5 h-5 text-primary shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Stats (card style A: bordered glow cards) ---------------- */
function Stats() {
  const stats = [
    { icon: Trophy, n: 500, s: "+", l: "متدرب حقق هدفه" },
    { icon: Zap, n: 12, s: "أسبوع", l: "تحول" },
    { icon: Target, n: 98, s: "%", l: "نسبة الالتزام" },
    { icon: Flame, n: 5, s: "سنوات", l: "خبرة فعلية" },
  ];
  return (
    <section className="py-16 md:py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.13}>
            <div className="group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-primary/50 hover:bg-white/[0.06] transition-all hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-transparent transition-opacity" />
              <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
              <div className="text-xl sm:text-2xl md:text-5xl font-black text-white overflow-hidden">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="text-xs md:text-sm text-white/50 mt-2">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About (with photo collage) ---------------- */
function About() {
  return (
    <section id="about" className="py-16 md:py-28 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-primary blur-3xl opacity-25" />
            <div className="relative grid grid-cols-5 grid-rows-5 gap-3 h-[400px] sm:h-[520px] md:h-[600px]">
              <img
                src={ASSETS.coach2}
                alt="Coach"
                className="col-span-3 row-span-5 rounded-3xl w-full h-full object-cover shadow-elegant"
              />
              <img
                src={ASSETS.coach3}
                alt="Coach back"
                className="col-span-2 row-span-3 rounded-3xl w-full h-full object-cover shadow-elegant"
              />
              <img
                src={ASSETS.coach4}
                alt="Coach"
                className="col-span-2 row-span-2 rounded-3xl w-full h-full object-cover shadow-elegant"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 md:-left-8 bg-white text-black px-5 py-4 rounded-2xl shadow-2xl rotate-[-4deg]">
              <div className="text-[10px] font-bold text-black/60 tracking-[0.2em]">CERTIFIED</div>
              <div className="text-xl md:text-2xl font-black">Online Coach</div>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="text-primary font-black text-xs md:text-sm tracking-[0.3em]">
              / 01 — MEET YOUR COACH
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-black leading-[1.05]">
              أنا <span className="text-gradient">محمد حسيني</span>،<br />
              مش هبيعلك حلم.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-base md:text-lg text-white/75 leading-loose">
              <span className="text-white font-bold">مدرب معتمد دولياً ولاعب كمال أجسام طبيعي</span>{" "}
              — بساعدك توصل لهدفك بأسهل الطرق الممكنة، من خلال دايت وتمرين مخصصين ليك انت شخصياً،
              بالمتابعة الأونلاين معايا أنا شخصياً. بقدّملك محتوى علمي بطريقة سهلة وبسيطة، وكمان
              بعلّمك ازاي تنظّم وقتك بين شغلك أو دراستك مع الدايت والتمرين.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs font-bold text-primary">
                <Award className="w-3.5 h-3.5" /> مدرب معتمد دولياً
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-white/80">
                <Medal className="w-3.5 h-3.5 text-primary" /> لاعب كمال أجسام طبيعي
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <ul className="mt-8 space-y-3">
              {[
                "تدريب مبني على العلم مش الترند",
                "تغذية عربية واقعية بدون حرمان",
                "متابعة يومية على واتساب",
                "تعديل الخطة كل أسبوعين حسب نتايجك",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/30 grid place-items-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Check className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-white/80 pt-1">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gradient-primary text-white font-black text-sm shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> تواصل معايا الآن
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services (card style B: numbered dark cards) ---------------- */
function Services() {
  const items = [
    { icon: ClipboardList, t: "تحليل كامل لجسمك", d: "قياسات، تاريخ طبي، نمط حياة، هدف واضح." },
    { icon: Dumbbell, t: "برنامج تدريب مخصص", d: "بتمارين فيديو وشرح مفصل لكل حركة." },
    { icon: Salad, t: "نظام غذائي واقعي", d: "أكل عربي بمقادير محسوبة لهدفك." },
    { icon: MessageCircle, t: "متابعة يومية", d: "رد شخصي مني على واتساب، مش بوت." },
    { icon: LineChart, t: "تحديث دوري", d: "تعديل الخطة كل أسبوعين حسب النتايج." },
    { icon: Utensils, t: "بدائل ذكية", d: "أكل خارج البيت؟ سفر؟ عندنا حل." },
  ];
  return (
    <section id="services" className="py-16 md:py-28 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal>
          <span className="text-primary font-black text-xs md:text-sm tracking-[0.3em]">
            / 02 — WHAT YOU GET
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight max-w-2xl">
            كل حاجة محتاجها،
            <br />
            <span className="text-gradient">تحت سقف واحد.</span>
          </h2>
        </Reveal>
        <div className="mt-10 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.09}>
              <div className="group relative h-full p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-primary/50 hover:bg-white/[0.06] hover:-translate-y-1 transition-all overflow-hidden">
                <div className="absolute top-4 left-4 text-6xl font-black text-white/5 group-hover:text-primary/25 transition-colors">
                  0{i + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 grid place-items-center mb-6 relative group-hover:bg-primary group-hover:border-primary group-hover:rotate-6 transition-all">
                  <it.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-black mb-2 relative">{it.t}</h3>
                <p className="text-white/60 leading-relaxed relative">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Transforms — infinite auto swiper ---------------- */
function InfiniteSwiper({
  images,
  speed = 40,
  reverse = false,
  itemClass = "",
}: {
  images: string[];
  speed?: number;
  reverse?: boolean;
  itemClass?: string;
}) {
  const line = [...images, ...images];
  return (
    <div className="relative overflow-hidden" dir="ltr">
      <div
        className="flex gap-4 md:gap-6 w-max"
        style={{ animation: `${reverse ? "marquee-rev" : "marquee"} ${speed}s linear infinite` }}
      >
        {line.map((src, i) => (
          <div
            key={i}
            className={`shrink-0 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-card ${itemClass}`}
          >
            <img src={src} alt="" loading="lazy" className="w-full h-full object-cover block" />
          </div>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

function Transforms() {
  const images = [ASSETS.tr1, ASSETS.tr2, ASSETS.tr3, ASSETS.tr4, ASSETS.tr5];
  return (
    <section id="transforms" className="py-16 md:py-28 lg:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
          <Reveal>
            <div>
              <span className="text-primary font-black text-xs md:text-sm tracking-[0.3em]">
                / 03 — REAL RESULTS
              </span>
              <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
                نتائج حقيقية.
                <br />
                <span className="text-gradient">مش فوتوشوب.</span>
              </h2>
            </div>
          </Reveal>
        </div>
      </div>
      <InfiniteSwiper
        images={images}
        speed={45}
        itemClass="w-[70vw] sm:w-[45vw] md:w-[32vw] lg:w-[24vw] aspect-[9/16]"
      />
    </section>
  );
}

/* ---------------- Testimonials — infinite auto swiper ---------------- */
function Testimonials() {
  const chats = [ASSETS.c1, ASSETS.c3, ASSETS.c4];
  return (
    <section id="testimonials" className="py-16 md:py-28 lg:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 mb-10 md:mb-14">
        <Reveal>
          <span className="text-primary font-black text-xs md:text-sm tracking-[0.3em]">
            / 04 — REAL VOICES
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight max-w-3xl">
            ردود فعل من <span className="text-gradient">عملاء حقيقيين.</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl">محادثات مباشرة على واتساب — بدون تجميل.</p>
        </Reveal>
      </div>
      <InfiniteSwiper
        images={chats}
        speed={35}
        reverse
        itemClass="w-[75vw] sm:w-[45vw] md:w-[32vw] lg:w-[24vw]"
      />
    </section>
  );
}

/* ---------------- Pricing (card style C: elevated glass) ---------------- */
function Pricing() {
  const plans = [
    {
      name: "الأساسية",
      price: "1500",
      per: "شهرياً",
      desc: "للبداية القوية",
      features: ["برنامج تدريب مخصص", "نظام غذائي مخصص", "متابعة أسبوعية", "شرح فيديو للتمارين"],
      featured: false,
    },
    {
      name: "المتوسطة",
      price: "2500",
      per: "شهرياً",
      desc: "الأكثر طلباً",
      features: [
        "كل مميزات الأساسية",
        "متابعة يومية على واتساب",
        "تعديل الخطة كل أسبوعين",
        "بدائل غذائية غير محدودة",
        "جلسات فيديو شهرية",
      ],
      featured: true,
    },
    {
      name: "الكاملة",
      price: "4000",
      per: "شهرياً",
      desc: "للنتائج القصوى",
      features: [
        "كل مميزات المتوسطة",
        "متابعة 24/7",
        "تعديل أسبوعي",
        "خطة مكملات مخصصة",
        "جلسات فيديو أسبوعية",
        "دعم نفسي وتحفيزي",
      ],
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="py-16 md:py-28 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-black text-xs md:text-sm tracking-[0.3em]">
              / 05 — CHOOSE YOUR PATH
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
              اختار <span className="text-gradient">باقتك.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={i} delay={i * 0.14}>
              <div
                className={`relative h-full p-8 rounded-[2rem] border transition-all hover:-translate-y-2 ${p.featured ? "border-primary/60 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent backdrop-blur-xl md:scale-105 shadow-glow" : "border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/30 hover:bg-white/[0.06]"}`}
              >
                {p.featured && (
                  <div className="absolute -top-4 right-8 px-4 py-1.5 rounded-full bg-gradient-primary text-white text-xs font-black shadow-glow flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" /> الأكثر طلباً
                  </div>
                )}
                <div className="text-xs text-white/50 font-bold tracking-[0.2em] uppercase">
                  {p.desc}
                </div>
                <div className="text-3xl font-black mt-2">{p.name}</div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-6xl font-black text-gradient">{p.price}</span>
                  <span className="text-white/50 text-sm">جنيه / {p.per}</span>
                </div>
                <div className="h-px my-8 bg-gradient-to-l from-transparent via-white/15 to-transparent" />
                <ul className="space-y-3">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full grid place-items-center shrink-0 mt-0.5 ${p.featured ? "bg-primary" : "bg-white/10"}`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/80 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className={`mt-10 flex items-center justify-center gap-2 h-13 py-3 rounded-full font-black transition-all ${
                    p.featured
                      ? "bg-gradient-primary text-white shadow-glow hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-10px_oklch(0.72_0.19_45/0.7)]"
                      : "border border-white/20 text-white hover:bg-white hover:text-black hover:border-white"
                  }`}
                >
                  اشترك الآن
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "هل النظام مناسب للمبتدئين؟",
      a: "أكيد. البرنامج بيتصمم من الصفر حسب مستواك، وفيه شرح فيديو لكل تمرين، وحد يمشي معاك خطوة خطوة.",
    },
    {
      q: "هل أحتاج مكملات غذائية؟",
      a: "لأ. المكملات مش شرط لتحقيق نتيجة، والنظام معتمد أساساً على الأكل الطبيعي. لو احتجت، هنرشحلك اللي مناسب فقط.",
    },
    {
      q: "هل يمكن المتابعة من أي دولة؟",
      a: "التدريب أونلاين بالكامل، وبنشتغل مع متدربين من كل الدول العربية والخليج وأوروبا.",
    },
    {
      q: "متى تظهر النتائج؟",
      a: "أول تغيير حقيقي بيبان بعد 3-4 أسابيع من الالتزام. النتيجة الملحوظة للعين بعد 8-12 أسبوع.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 md:py-28 lg:py-40">
      <div className="max-w-3xl mx-auto px-5">
        <Reveal>
          <span className="text-primary font-black text-xs md:text-sm tracking-[0.3em]">
            / 06 — QUESTIONS
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight mb-12">
            أسئلة <span className="text-gradient">شائعة.</span>
          </h2>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div
                className={`rounded-2xl border transition-all ${open === i ? "border-primary/40 bg-primary/5" : "border-white/10 bg-card/40 hover:border-white/25"}`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-right cursor-pointer"
                >
                  <span className="text-base md:text-lg font-bold">{f.q}</span>
                  <span
                    className={`w-9 h-9 rounded-full grid place-items-center shrink-0 transition-all ${open === i ? "bg-gradient-primary text-white rotate-180" : "bg-white/10 text-white"}`}
                  >
                    {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 md:px-6 pb-6 text-white/70 leading-loose">{f.a}</p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section id="cta" className="relative py-20 md:py-40 lg:py-52 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={ASSETS.coach4}
          alt=""
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 noise-bg opacity-40" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] animate-glow" />
        <div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] animate-glow"
          style={{ animationDelay: "-6s" }}
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(2.5rem,10vw,7.5rem)] font-black leading-[0.95] tracking-tight">
            ابدأ رحلتك
            <br />
            <span className="text-gradient">الآن.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-base md:text-xl text-white/70 max-w-xl mx-auto">
            كل يوم بتأجل، هو يوم أبعد عن أفضل نسخة منك. اتخذ القرار.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center justify-center gap-3 h-16 px-8 md:px-10 rounded-full bg-gradient-primary text-white font-black text-base md:text-xl shadow-glow hover:-translate-y-1 transition-all"
            >
              احجز مكانك الآن
              <ArrowLeft className="w-6 h-6 shrink-0 group-hover:-translate-x-1 transition-transform" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-3 h-16 px-7 md:px-8 rounded-full bg-white/5 backdrop-blur border border-white/15 text-white font-bold hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-5 h-5 shrink-0 text-primary" />
              كلمني على واتساب
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const socials = [
    { icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
    { icon: Youtube, href: YOUTUBE_URL, label: "YouTube" },
    { icon: AtSign, href: THREADS_URL, label: "Threads" },
    { icon: MessageCircle, href: WHATSAPP_URL, label: "WhatsApp" },
  ];
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-card/20 to-background overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-black text-base tracking-tight">MOHAMMED HUSSEINY</div>
                <div className="text-[11px] tracking-[0.25em] text-white/40">
                  ONLINE COACH · NUTRITION
                </div>
              </div>
            </div>
            <p className="mt-5 text-white/60 max-w-md leading-relaxed">
              مدرب معتمد دولياً ولاعب كمال أجسام طبيعي — بساعدك توصل لهدفك بأسهل الطرق من خلال دايت
              وتمرين مخصصين ومتابعة أونلاين معايا شخصياً.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener"
                  className="group w-11 h-11 rounded-full border border-white/10 grid place-items-center hover:border-primary hover:bg-primary hover:-translate-y-1 transition-all"
                >
                  <s.icon className="w-4 h-4 text-white/70 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-black tracking-[0.25em] text-white/50 mb-4">أقسام</div>
            <ul className="space-y-2.5">
              {[
                { h: "#about", t: "عن الكوتش" },
                { h: "#services", t: "الخدمات" },
                { h: "#transforms", t: "التحولات" },
                { h: "#pricing", t: "الباقات" },
                { h: "#faq", t: "الأسئلة الشائعة" },
              ].map((l) => (
                <li key={l.h}>
                  <a
                    href={l.h}
                    className="text-sm text-white/70 hover:text-primary transition-colors story-link"
                  >
                    {l.t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-black tracking-[0.25em] text-white/50 mb-4">تواصل</div>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2.5 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-primary shrink-0" /> واتساب — حجوزات
                  واستفسارات
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2.5 hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4 text-primary shrink-0" /> @mo.husseiny
                </a>
              </li>
              <li>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2.5 hover:text-primary transition-colors"
                >
                  <Youtube className="w-4 h-4 text-primary shrink-0" /> YouTube
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0" /> متاح أونلاين لكل الدول
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40">© 2026 Mohammed Husseiny. جميع الحقوق محفوظة.</div>
          <div className="text-xs text-white/40">صُمم بشغف · Built for Champions</div>
        </div>
      </div>
    </footer>
  );
}

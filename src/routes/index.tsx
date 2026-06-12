import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Project Story Capture — Construction & Architecture Photography" },
      { name: "description", content: "On-site photo and video for architects, builders and developers. Two hours on site. Hero visuals back in days." },
      { property: "og:title", content: "Your best work, finally seen." },
      { property: "og:description", content: "On-site photo and video that makes your finished projects look as good as they are." },
    ],
  }),
  component: Landing,
});

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-sm tracking-[0.18em] uppercase">Project Story Capture</span>
        </a>
        <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#packages" className="hover:text-foreground transition">Packages</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href="#book" className="rounded-full border border-border bg-foreground/5 px-4 py-2 text-sm backdrop-blur hover:bg-foreground/10 transition">
          Check my date →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Architectural interior at dusk"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

      <Nav />

      <div className="container-px relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-20 pt-40 md:pb-28">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-10 bg-accent" />
          Construction & Architectural Photography
        </p>
        <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95]">
          Your best work,<br />
          <span className="italic text-accent">finally seen.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
          On-site photo and video that makes your finished projects look as good as they are
          — without you lifting a camera, chasing your customer, or learning to edit.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#book"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            Check my date
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <p className="text-sm text-muted-foreground">
            Two hours on site. Hero visuals back in days.
          </p>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="container-px mx-auto max-w-7xl py-28 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <p className="text-xs uppercase tracking-[0.25em] text-accent md:col-span-3">
          The problem
        </p>
        <div className="md:col-span-9">
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            You finish a beautiful build.<br />
            <span className="text-muted-foreground italic">Then the photos never happen.</span>
          </h2>
          <div className="mt-10 grid gap-6 text-lg text-muted-foreground md:grid-cols-2 md:gap-12">
            <p>
              You meant to get back to site. The customer moved in. The weather turned.
              And now your best work lives on a phone in a folder you'll never open —
              while your website still shows the job from two years ago.
            </p>
            <p>
              You know someone who "takes photos." But does it ever actually get done?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fix() {
  return (
    <section className="relative border-y border-border bg-muted/30">
      <div className="container-px mx-auto grid max-w-7xl gap-16 py-28 md:grid-cols-2 md:py-40">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">The fix</p>
          <h2 className="mt-6 font-display text-5xl leading-tight md:text-7xl">
            We turn up.<br />
            <span className="italic">You don't.</span>
          </h2>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground md:pt-8">
          <p>
            We handle your customer — consent forms, scheduling, the lot — and run an
            unobtrusive shoot in under two hours. You get clean, intentional, properly
            edited visuals built for your website, socials, case studies and tenders.
          </p>
          <p className="text-foreground">
            We're marketers as well as shooters, so we don't drown you in 400 files.
            We give you the handful of images that actually win you work.
          </p>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Book a date", d: "Tell us the project and roughly when it's ready." },
  { n: "02", t: "We sort your customer", d: "Consent and access, handled directly and respectfully." },
  { n: "03", t: "We shoot", d: "In and out in under two hours, minimal disruption." },
  { n: "04", t: "You get hero visuals", d: "Edited, retouched, ready to post." },
];

function HowItWorks() {
  return (
    <section id="how" className="container-px mx-auto max-w-7xl py-28 md:py-40">
      <div className="mb-16 flex items-end justify-between gap-8">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">How it works</p>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
            Four steps. <span className="italic text-muted-foreground">No drama.</span>
          </h2>
        </div>
      </div>
      <div className="grid gap-px border border-border bg-border md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="bg-background p-8 md:p-10">
            <div className="font-display text-3xl text-accent">{s.n}</div>
            <h3 className="mt-8 text-xl">{s.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="packages" className="relative border-y border-border bg-muted/30">
      <div className="container-px mx-auto max-w-7xl py-28 md:py-40">
        <div className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Packages</p>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
            A full architectural photographer is <span className="italic">£650–£900 a day.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We sit well below that — and you only pay for what you'll actually use.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Simple */}
          <div className="flex flex-col rounded-2xl border border-border bg-background p-8 md:p-12">
            <div className="flex items-baseline justify-between border-b border-border pb-6">
              <h3 className="font-display text-3xl md:text-4xl">Simple</h3>
              <div className="text-right">
                <div className="font-display text-4xl">£170</div>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground">
              For when you just need clean stills, fast.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <Feature>1 hero shot — fully retouched, sky &amp; clutter cleanup</Feature>
              <Feature>3 "Our Work" context shots</Feature>
              <Feature>5 detail shots — joinery, materials, texture</Feature>
              <Feature>~9 finished images</Feature>
            </ul>
            <a href="#book" className="mt-10 inline-flex w-fit items-center gap-3 text-sm text-foreground hover:text-accent transition">
              Book the Simple shoot <span>→</span>
            </a>
          </div>

          {/* Full */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-accent/40 bg-background p-8 md:p-12">
            <div className="absolute right-6 top-6 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] uppercase tracking-widest text-accent">
              Most chosen
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-6">
              <h3 className="font-display text-3xl md:text-4xl">Project Story Capture</h3>
              <div className="text-right">
                <div className="font-display text-4xl">£395</div>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground">
              The full story of the build — stills <em>and</em> video.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <Feature>Everything in Simple, plus:</Feature>
              <Feature>3 hero shots (one with premium AI/Photoshop enhancement)</Feature>
              <Feature>1–2 portrait videos — clean exterior sweeps for reels &amp; socials</Feature>
              <Feature>~11 finished images + 1–2 video clips</Feature>
            </ul>
            <a href="#book" className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90">
              Book a shoot <span>→</span>
            </a>
          </div>
        </div>

        <p className="mt-8 text-sm italic text-muted-foreground">
          Tip: the practice and the builder can split the visit cost.
        </p>
      </div>
    </section>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1 w-3 flex-none bg-accent" />
      <span className="text-muted-foreground">{children}</span>
    </li>
  );
}

const reasons = [
  {
    t: "Quality over quantity",
    d: "Every shot is deliberate. No filler, no 300-image dump — just the visuals that pull their weight.",
  },
  {
    t: "We handle your customer",
    d: "It's their home or site. We treat it that way, with consent forms and a careful, respectful shoot.",
  },
  {
    t: "We think like marketers",
    d: "We shoot for where it's going — your Our Work page, an Instagram carousel, a tender document — not for a camera club.",
  },
  {
    t: "In and out in under two hours",
    d: "You stay on the tools. We do the rest.",
  },
];

function Why() {
  return (
    <section className="container-px mx-auto max-w-7xl py-28 md:py-40">
      <div className="mb-16 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Why Project Story Capture</p>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
          Made for builders, architects<br />
          <span className="italic">and the work itself.</span>
        </h2>
      </div>
      <div className="grid gap-px border border-border bg-border md:grid-cols-2">
        {reasons.map((r) => (
          <div key={r.t} className="bg-background p-10">
            <h3 className="font-display text-2xl md:text-3xl">{r.t}</h3>
            <p className="mt-4 text-muted-foreground">{r.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const gallery = [
  { src: work1, alt: "Dusk exterior of a finished new build", span: "md:col-span-4 md:row-span-2" },
  { src: work3, alt: "Marble kitchen island with brass pendants", span: "md:col-span-5" },
  { src: work2, alt: "Detail of oak joinery and brass hardware", span: "md:col-span-3 md:row-span-2" },
  { src: work4, alt: "Modern black-clad extension at golden hour", span: "md:col-span-5" },
  { src: work5, alt: "Oak staircase detail", span: "md:col-span-4" },
  { src: work6, alt: "Luxury bathroom with freestanding bath", span: "md:col-span-5" },
];

function Work() {
  return (
    <section id="work" className="relative border-y border-border bg-muted/30">
      <div className="container-px mx-auto max-w-7xl py-28 md:py-40">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Recent work</p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
              A handful of frames<br />
              <span className="italic">that did the job.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Recent shoots for architects and contractors across the South West.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[18rem]">
          {gallery.map((g, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-xl border border-border ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
              />
            </figure>
          ))}
        </div>

        <figure className="mt-16 max-w-3xl">
          <blockquote className="font-display text-2xl leading-snug md:text-3xl">
            "The visuals lifted the entire practice. We use them on every tender now —
            they're doing more for us than the website rebuild did."
          </blockquote>
          <figcaption className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Architect, Devon
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What if it rains?",
    a: "We're weather-led. If conditions won't do your work justice, we reschedule with you — no drama.",
  },
  {
    q: "Is it awkward with my customer?",
    a: "No. We organise access and consent directly, work around them, and leave the place as we found it.",
  },
  {
    q: "Who owns the images?",
    a: "You do. On payment you get a perpetual licence to use everything across your website, socials, case studies and tenders.",
  },
  {
    q: "How fast do I get them?",
    a: "Edited visuals back within days of the shoot.",
  },
  {
    q: "Do you travel?",
    a: "Yes, across the South West. Travel beyond the agreed radius is quoted up front — no surprises.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="container-px mx-auto max-w-7xl py-28 md:py-40">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">FAQ</p>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
            Anything else<br /><span className="italic">you'd ask?</span>
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl md:text-2xl">{f.q}</span>
                    <span className={`text-2xl text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
                  >
                    <p className="min-h-0 max-w-2xl text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Book() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="book" className="relative overflow-hidden border-t border-border">
      <div className="container-px mx-auto grid max-w-7xl gap-16 py-28 md:grid-cols-2 md:py-40">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Book a shoot</p>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">
            Your next tender<br />
            deserves better than<br />
            <span className="italic text-accent">a phone snap.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg text-muted-foreground">
            Tell us the project, the location and roughly when it's ready.
            We'll do the rest.
          </p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="rounded-2xl border border-border bg-muted/30 p-8 md:p-10"
        >
          {submitted ? (
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
              <div className="font-display text-5xl text-accent">Thanks.</div>
              <p className="mt-4 max-w-sm text-muted-foreground">
                We'll come back to you within one working day to confirm a date.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <Field label="Name" name="name" />
              <Field label="Company / practice" name="company" />
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Project location" name="location" />
                <Field label="Ready date (approx.)" name="date" placeholder="e.g. early March" />
              </div>
              <Field label="Email" name="email" type="email" />
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Package interest
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Simple £170", "Full £395", "Not sure"].map((opt) => (
                    <label key={opt} className="cursor-pointer">
                      <input type="radio" name="package" className="peer sr-only" defaultChecked={opt === "Full £395"} />
                      <div className="rounded-full border border-border bg-background px-3 py-2 text-center text-xs transition peer-checked:border-accent peer-checked:bg-accent peer-checked:text-accent-foreground">
                        {opt}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition hover:bg-accent hover:text-accent-foreground"
              >
                Check my date →
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-px mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 py-10">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-sm tracking-[0.18em] uppercase">Project Story Capture</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Project Story Capture. South West, UK.
        </p>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Problem />
      <Fix />
      <HowItWorks />
      <Packages />
      <Why />
      <Work />
      <FAQ />
      <Book />
      <Footer />
    </main>
  );
}

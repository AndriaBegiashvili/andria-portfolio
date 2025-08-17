import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Download, Sparkles, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ---------------------
// DATA
// ---------------------
const PROFILE = {
  name: "Andria Begiashvili",
  title: "Software Engineer · Angular | React | Next.js",
  email: "andria.begiashvili@gmail.com",
  phone: "+995 579 779 439",
  github: "https://github.com/andriaBegiashvili",
  linkedin: "https://linkedin.com/in/andria-begiashvili",
  resume: "/andria-begiashvili-resume.pdf",
  location: "Tbilisi, Georgia"
};

const SKILLS = [
  "Angular","React","Next.js","Tailwind","SCSS","Storybook",
  "Node.js","NestJS","PHP","Express","REST APIs","Swagger",
  "PostgreSQL","MongoDB","MySQL","Docker","GitLab CI/CD","Jest"
];

const EXPERIENCE = [
  {
    role: "Full‑Stack Engineer",
    company: "Touch Support, Inc. & SNF Back Office",
    period: "Aug 2024 – Present",
    points: [
      "Delivered SaaS platforms using Angular + PHP + Node.js.",
      "Introduced React + Next.js dashboards → +20% developer velocity.",
      "Optimized REST endpoints and caching to cut latency.",
      "Automated tests with Jest/Karma/Protractor (85%+ coverage).",
      "Prod deploys via Docker + GitLab CI/CD (−30% release cycle)."
    ]
  },
  {
    role: "Software Engineer (Frontend + Backend)",
    company: "IOT Rocket GmbH",
    period: "Sep 2024 – Present",
    points: [
      "Real‑time IoT dashboards (Angular + Tailwind).",
      "Backends with NestJS; documented via Swagger.",
      "Optimized MongoDB telemetry queries.",
      "Design system via Storybook + Chromatic.",
      "Dockerized CI/CD (−40% deploy time)."
    ]
  },
  {
    role: "Frontend Engineer",
    company: "JSC OPPA",
    period: "Jan 2022 – Aug 2024",
    points: [
      "Large‑scale fintech with Angular + NGRX.",
      "Internal tools in React integrated with backend services.",
      "Real‑time sync with PostgreSQL & MongoDB.",
      "Bundle size −30% using lazy loading and code‑split.",
      "Quality gates with Jest coverage reports."
    ]
  }
];

const PROJECTS = [
  { title: "Energo Pro", stack: "Angular · Java · Docker", desc: "Utility management dashboard with role‑based access and secure pipelines.", href: "#" },
  { title: "Asterbit.io", stack: "Next.js · SEO‑first", desc: "Company website with buttery animations and 95+ Lighthouse.", href: "#" },
  { title: "IoT‑Suite", stack: "React · Express · MongoDB", desc: "Real‑time device visualization with admin tools & alerts.", href: "#" },
  { title: "PayBox GE", stack: "Angular · PHP · PostgreSQL", desc: "Payment terminal network platform serving 350,000+ daily customers across 8,000+ payment points in Georgia.", href: "https://paybox.ge" }
];

// ---------------------
// UTILS
// ---------------------
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 12 } },
};

function SectionTitle({ icon: Icon, children }: { icon: any; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 text-white shadow-soft">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-400 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
        {children}
      </h2>
    </div>
  );
}

// ---------------------
// APP
// ---------------------
export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-950 text-white">
      {/* Add CSS for scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
      
      {/* Decorative background */}
      <GradientBackdrop />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-fuchsia-400" />
            <span className="font-semibold tracking-tight">Andria</span>
          </div>
          <div className="hidden gap-2 sm:flex">
            <a href="#skills" className="px-3 py-1.5 text-sm text-slate-300 hover:text-white">Skills</a>
            <a href="#experience" className="px-3 py-1.5 text-sm text-slate-300 hover:text-white">Experience</a>
            <a href="#projects" className="px-3 py-1.5 text-sm text-slate-300 hover:text-white">Projects</a>
            <a href="#education" className="px-3 py-1.5 text-sm text-slate-300 hover:text-white">Education</a>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" asChild className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:opacity-90">
              <a href={PROFILE.resume} download>
                <Download className="mr-1.5 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:pt-20">
        <div className="text-center">
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl font-black leading-tight sm:text-6xl">
            <span className="bg-gradient-to-br from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              {PROFILE.name}
            </span>
          </motion.h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-slate-300">
            {PROFILE.title}. I build fast, polished, accessible web apps with delightful UI motion.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 shadow-soft">
              <a href={`mailto:${PROFILE.email}`}><Mail className="mr-2 h-4 w-4"/>Email</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4"/>GitHub</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4"/>LinkedIn</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href={`tel:${PROFILE.phone}`}><Phone className="mr-2 h-4 w-4"/>Call</a>
            </Button>
          </div>

          {/* tech marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 mx-auto max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 p-4 shadow-soft">
            <div className="flex animate-[scroll_25s_linear_infinite] gap-4 whitespace-nowrap will-change-transform">
              {[...SKILLS, ...SKILLS, ...SKILLS].map((s, i) => (
                <Badge key={i} className="bg-gradient-to-r from-fuchsia-600/80 to-cyan-600/80 text-white px-3 py-1.5 text-sm flex-shrink-0">
                  {s}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* EXPERIENCE - MAIN FOCUS */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle icon={Briefcase}>Professional Experience</SectionTitle>
        <div className="grid gap-8">
          {EXPERIENCE.map((job, index) => (
            <motion.div key={job.role} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Card className="rounded-2xl border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/80 shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">{job.role}</h3>
                      <p className="text-lg text-slate-300 mt-1">{job.company}</p>
                    </div>
                    <Badge variant="outline" className="text-slate-400 border-slate-600 bg-slate-800/50">
                      {job.period}
                    </Badge>
                  </div>
                  <div className="grid gap-3">
                    {job.points.map((p, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 flex-shrink-0"></div>
                        <p className="text-slate-300 leading-relaxed">{p}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS - ENHANCED */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle icon={Sparkles}>Technical Expertise</SectionTitle>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Frontend</h3>
              <div className="grid gap-3">
                {["Angular", "React", "Next.js", "Tailwind", "SCSS", "Storybook"].map((skill) => (
                  <motion.div variants={item} key={skill}>
                    <Card className="rounded-xl border-white/10 bg-gradient-to-br from-fuchsia-900/20 to-fuchsia-800/10">
                      <CardContent className="p-4">
                        <span className="bg-gradient-to-r from-fuchsia-300 to-pink-300 bg-clip-text text-transparent font-medium">
                          {skill}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Backend</h3>
              <div className="grid gap-3">
                {["Node.js", "NestJS", "PHP", "Express", "REST APIs", "Swagger"].map((skill) => (
                  <motion.div variants={item} key={skill}>
                    <Card className="rounded-xl border-white/10 bg-gradient-to-br from-cyan-900/20 to-cyan-800/10">
                      <CardContent className="p-4">
                        <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-medium">
                          {skill}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-300">DevOps & Data</h3>
              <div className="grid gap-3">
                {["PostgreSQL", "MongoDB", "MySQL", "Docker", "GitLab CI/CD", "Jest"].map((skill) => (
                  <motion.div variants={item} key={skill}>
                    <Card className="rounded-xl border-white/10 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10">
                      <CardContent className="p-4">
                        <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent font-medium">
                          {skill}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS - COMPACT */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle icon={Sparkles}>Selected Projects</SectionTitle>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <motion.div key={p.title} variants={item}>
              <Card className="group relative overflow-hidden rounded-xl border-white/10 bg-slate-900/70 hover:bg-slate-900/90 transition-all">
                <CardContent className="relative p-5">
                  <div className="text-xs text-slate-400 mb-2">{p.stack}</div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-300 line-clamp-3 mb-3">{p.desc}</p>
                  <Button variant="ghost" size="sm" asChild className="h-8 p-0 text-fuchsia-300 hover:text-cyan-300">
                    <a href={p.href} target="_blank" rel="noreferrer">
                      View <ArrowUpRight className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle icon={GraduationCap}>Education</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="rounded-2xl border-white/10 bg-slate-900/70">
            <CardContent className="p-6">
              <h3 className="font-semibold">Business and Technology University, Tbilisi</h3>
              <p className="text-sm text-slate-400">B.Sc. in Information Technology · Sep 2021 – Jul 2025</p>
              <p className="mt-2 text-slate-300">Coursework: Data Structures, Algorithms, Databases, Frontend, Android.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-white/10 bg-slate-900/70">
            <CardContent className="p-6">
              <h3 className="font-semibold">Higher School of Economics and Innovation, Lublin</h3>
              <p className="text-sm text-slate-400">Software Engineering · Sep 2024 – Mar 2025</p>
              <p className="mt-2 text-slate-300">Topics: Software Engineering, Virtualization, Testing, Design Patterns.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {PROFILE.name} · Built with React, Tailwind & shadcn/ui
      </footer>
    </div>
  );
}

// ---------------------
// BACKDROP COMPONENT
// ---------------------
function GradientBackdrop() {
  return (
    <div aria-hidden>
      {/* gradient grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1250px_700px_at_50%_-200px,rgba(168,85,247,0.25),transparent),radial-gradient(1250px_700px_at_80%_-150px,rgba(34,211,238,0.18),transparent),radial-gradient(1250px_700px_at_20%_-150px,rgba(16,185,129,0.15),transparent)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.3),rgba(2,6,23,0.9)),repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_3px)]" />

      {/* floating color blobs */}
      <motion.div
        className="pointer-events-none fixed left-1/2 top-20 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-3xl"
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none fixed left-[15%] top-[50%] -z-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none fixed right-[10%] top-[35%] -z-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}''
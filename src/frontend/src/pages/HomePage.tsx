import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Crown,
  Flame,
  Quote,
  Star,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { GlassCard } from "../components/ui/GlassCard";
import { GoldButton } from "../components/ui/GoldButton";
import { getDailyQuote, motivationalQuotes } from "../data/motivationalQuotes";
import { useGameState } from "../hooks/useGameState";

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Brain,
    title: "AI Quiz System",
    description:
      "Auto-generated CUET-level questions with PYQ patterns, instant AI step-by-step explanations",
    href: "/quiz",
  },
  {
    icon: Target,
    title: "Mock Tests",
    description:
      "Full-length CUET mock tests with real exam interface and detailed analytics",
    href: "/mock-test",
  },
  {
    icon: BarChart3,
    title: "Smart Dashboard",
    description:
      "Weekly graphs, weak topic analysis and personalised AI study recommendations",
    href: "/dashboard",
  },
  {
    icon: BookOpen,
    title: "Premium Notes",
    description:
      "Subject-wise notes with key concepts, quick revision points, and highlights",
    href: "/notes",
  },
  {
    icon: Zap,
    title: "English Mastery",
    description:
      "Vocabulary builder, idioms, phrasal verbs and daily practice quizzes",
    href: "/english-mastery",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description:
      "XP system, level-up progression, badges, streak rewards, and leaderboard",
    href: "/daily-challenge",
  },
];

const stats = [
  { label: "Students Enrolled", value: 50000, suffix: "+" },
  { label: "Practice Questions", value: 10000, suffix: "+" },
  { label: "Success Rate", value: 94, suffix: "%" },
  { label: "Mock Tests", value: 500, suffix: "+" },
];

const subjects = [
  {
    name: "English",
    color: "from-blue-500/20 to-blue-600/5",
    icon: "🔤",
    questions: 50,
  },
  {
    name: "Business Studies",
    color: "from-green-500/20 to-green-600/5",
    icon: "📊",
    questions: 45,
  },
  {
    name: "Accountancy",
    color: "from-purple-500/20 to-purple-600/5",
    icon: "💹",
    questions: 48,
  },
  {
    name: "Mathematics",
    color: "from-red-500/20 to-red-600/5",
    icon: "📐",
    questions: 52,
  },
  {
    name: "General Test",
    color: "from-accent/20 to-accent/5",
    icon: "🧠",
    questions: 60,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    college: "DU — B.Com Honours",
    score: "99.4 Percentile",
    avatar: "PS",
    text: "CUET ELITE AI's mock tests mirrored the actual exam perfectly. The AI explanations after each wrong answer helped me understand patterns I was missing. Got into my dream college!",
    stars: 5,
    subject: "Accounts + Business Studies",
  },
  {
    name: "Arjun Mehra",
    college: "Jamia — Economics",
    score: "98.7 Percentile",
    avatar: "AM",
    text: "The daily challenge streak kept me consistent for 45 days straight. The performance dashboard showed exactly which topics to focus on. Best investment for CUET prep.",
    stars: 5,
    subject: "Maths + English",
  },
  {
    name: "Sneha Patel",
    college: "BHU — B.Sc Statistics",
    score: "97.9 Percentile",
    avatar: "SP",
    text: "The English Mastery section alone was worth it — vocabulary builder with 500+ words, idioms, phrasal verbs. My verbal score jumped from 72% to 94% in three weeks.",
    stars: 5,
    subject: "English + General Test",
  },
];

// ─── Testimonial Carousel ─────────────────────────────────────────────────────

function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () =>
    setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  });

  const t = testimonials[active];

  return (
    <div className="relative max-w-3xl mx-auto">
      <GlassCard gold className="p-8 sm:p-10">
        <Quote className="w-10 h-10 text-accent/40 mb-4" />
        <p className="text-base sm:text-lg text-foreground leading-relaxed font-body italic mb-6">
          "{t?.text}"
        </p>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-display font-bold text-accent text-sm">
              {t?.avatar}
            </div>
            <div>
              <p className="font-semibold text-foreground font-display">
                {t?.name}
              </p>
              <p className="text-xs text-muted-foreground">{t?.college}</p>
              <p className="text-xs text-accent font-medium mt-0.5">
                {t?.subject}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex gap-0.5 justify-end mb-1">
              {[1, 2, 3, 4, 5].slice(0, t?.stars ?? 5).map((n) => (
                <Star
                  key={`star-${active}-${n}`}
                  className="w-4 h-4 fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-accent font-bold font-display text-sm">
              {t?.score}
            </span>
          </div>
        </div>
      </GlassCard>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-9 h-9 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent/10 transition-smooth"
          data-ocid="testimonial-prev"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((t, idx) => (
            <button
              type="button"
              key={t.name}
              onClick={() => setActive(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-smooth ${
                idx === active ? "bg-accent w-5" : "bg-muted-foreground/30 w-2"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="w-9 h-9 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent/10 transition-smooth"
          data-ocid="testimonial-next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Rotating Quote Banner ────────────────────────────────────────────────────

function RotatingQuote() {
  const [quoteIdx, setQuoteIdx] = useState(() => {
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
        86400000,
    );
    return dayOfYear % motivationalQuotes.length;
  });
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setQuoteIdx((q) => (q + 1) % motivationalQuotes.length);
        setFade(true);
      }, 400);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const quote = motivationalQuotes[quoteIdx];

  return (
    <div
      className="transition-opacity duration-500"
      style={{ opacity: fade ? 1 : 0 }}
    >
      <p className="text-xl sm:text-2xl text-foreground font-display font-semibold italic leading-relaxed">
        "{quote?.text}"
      </p>
      <p className="mt-3 text-sm text-accent font-medium">— {quote?.author}</p>
    </div>
  );
}

// ─── Daily Challenge Card ─────────────────────────────────────────────────────

function DailyChallengeCard({ streak }: { streak: number }) {
  return (
    <GlassCard
      gold
      hoverable
      className="p-6 relative overflow-hidden"
      data-ocid="daily-challenge-card"
    >
      {/* Glow burst */}
      <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">
              Daily Challenge
            </span>
          </div>
          <h3 className="font-display font-extrabold text-2xl text-foreground">
            {streak > 0 ? `${streak} Day Streak!` : "Start Your Streak"}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            {streak > 0
              ? "Keep the momentum going — one challenge a day!"
              : "Complete today's challenge to begin your streak journey."}
          </p>
        </div>
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-accent/20 border border-accent/30 flex items-center justify-center">
          <span className="text-3xl">
            {streak >= 7 ? "🔥" : streak >= 3 ? "⚡" : "🎯"}
          </span>
        </div>
      </div>

      {/* Streak pills */}
      <div className="flex gap-1.5 mb-5 flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <div
            key={`streak-day-${day}`}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-smooth ${
              day <= streak
                ? "bg-accent text-accent-foreground shadow-[0_0_8px_rgba(213,175,97,0.4)]"
                : "bg-muted/50 border border-border text-muted-foreground"
            }`}
          >
            {day <= streak ? <CheckCircle2 className="w-4 h-4" /> : `D${day}`}
          </div>
        ))}
      </div>

      <Link to="/daily-challenge">
        <GoldButton
          size="md"
          className="w-full"
          data-ocid="daily-challenge-cta"
        >
          <Flame className="w-4 h-4" />
          {streak > 0 ? "Continue Streak" : "Start Challenge"}
          <ArrowRight className="w-4 h-4" />
        </GoldButton>
      </Link>
    </GlassCard>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function HomePage() {
  const { gameState } = useGameState();
  const quote = getDailyQuote();

  return (
    <div className="flex flex-col">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(213,175,97,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(213,175,97,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-accent/3 blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm text-accent font-medium mb-8"
          >
            <Crown className="w-4 h-4" />
            India's #1 AI-Powered CUET Prep Platform
            <Star className="w-4 h-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6"
          >
            Crack{" "}
            <span className="text-accent relative">
              CUET
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </span>
            <br />
            with Smart{" "}
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
              AI Practice
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          >
            Premium AI-generated questions, full mock tests, personalised
            analytics, and gamified learning — everything you need to conquer
            CUET UG.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/quiz">
              <GoldButton size="lg" data-ocid="hero-start-quiz">
                Start Free Quiz <ArrowRight className="w-5 h-5" />
              </GoldButton>
            </Link>
            <Link to="/mock-test">
              <GoldButton
                variant="outline"
                size="lg"
                data-ocid="hero-mock-test"
              >
                Take Mock Test
              </GoldButton>
            </Link>
          </motion.div>

          {gameState.xp > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 inline-flex items-center gap-2 text-sm text-accent"
            >
              <Trophy className="w-4 h-4" />
              Welcome back! You have <strong>{gameState.xp} XP</strong> — Level:{" "}
              <strong>{gameState.level}</strong>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────── */}
      <section className="bg-card border-y border-border py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display font-bold text-4xl text-accent">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    triggerOnView
                  />
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Daily Quote + Daily Challenge ─────────────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Rotating Quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <GlassCard className="p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute -top-6 -left-4 text-accent/10 text-[10rem] font-serif leading-none select-none pointer-events-none">
                  "
                </div>
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent uppercase tracking-widest mb-4">
                    <Star className="w-3.5 h-3.5" />
                    Today's Inspiration
                  </span>
                  <RotatingQuote />
                </div>
              </GlassCard>
            </motion.div>

            {/* Daily Challenge Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-2"
            >
              <DailyChallengeCard streak={gameState.streak} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Feature Highlights ────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">
              Everything You Need to <span className="text-accent">Excel</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A complete CUET preparation ecosystem built for serious aspirants
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={feat.href}>
                  <GlassCard
                    hoverable
                    className="p-6 h-full group"
                    data-ocid={`feature-${feat.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:border-accent/40 transition-smooth">
                      <feat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feat.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-smooth">
                      Explore <ArrowRight className="w-3 h-3" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subjects ─────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl mb-3">
              All CUET <span className="text-accent">Subjects Covered</span>
            </h2>
            <p className="text-muted-foreground">
              Comprehensive question banks across all major CUET domains
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {subjects.map((sub, i) => (
              <motion.div
                key={sub.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link to="/subjects">
                  <GlassCard
                    hoverable
                    className={`p-5 text-center bg-gradient-to-br ${sub.color}`}
                  >
                    <div className="text-3xl mb-3">{sub.icon}</div>
                    <p className="font-semibold text-sm text-foreground leading-snug">
                      {sub.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {sub.questions}+ Questions
                    </p>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">
              Toppers <span className="text-accent">Trust Us</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real students, real results — hear from CUET toppers who cracked
              their dream colleges with CUET ELITE AI
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <TestimonialCarousel />
          </motion.div>
        </div>
      </section>

      {/* ── Bottom Quote Banner ──────────────────────────────────── */}
      <section className="py-10 bg-muted/20 border-y border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-accent/30 text-6xl font-serif leading-none mb-2">
              "
            </div>
            <p className="text-xl text-foreground font-display font-semibold italic leading-relaxed">
              {quote.text}
            </p>
            <p className="mt-3 text-sm text-accent font-medium">
              — {quote.author}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(213,175,97,0.08),transparent)]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-5">
              Ready to Become a{" "}
              <span className="text-accent">CUET Topper?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join 50,000+ students who trust CUET ELITE AI for their
              preparation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/daily-challenge">
                <GoldButton size="lg" data-ocid="cta-daily-challenge">
                  <Trophy className="w-5 h-5" />
                  Start Daily Challenge
                </GoldButton>
              </Link>
              <Link to="/dashboard">
                <GoldButton
                  variant="outline"
                  size="lg"
                  data-ocid="cta-dashboard"
                >
                  View Dashboard
                </GoldButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

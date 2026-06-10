import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, BookOpen, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Health Blog",
  description:
    "Read expert articles on kidney health, male fertility, dialysis, andrology, and urological conditions from Dr. Gopikanth's specialist team.",
};

const CATEGORIES = [
  { label: "All Posts", active: true },
  { label: "Kidney Care", active: false },
  { label: "Andrology", active: false },
  { label: "Kidney Stones", active: false },
  { label: "Dialysis", active: false },
  { label: "Pediatric Urology", active: false },
];

const FEATURED = {
  slug: "understanding-ckd-stages",
  title: "Understanding the 5 Stages of Chronic Kidney Disease",
  excerpt:
    "Chronic Kidney Disease progresses silently. Learn what each stage means for your kidneys, what symptoms to watch for, and how early treatment can dramatically slow progression.",
  category: "Kidney Care",
  readTime: "8 min read",
  date: "8 June 2026",
  color: "from-[#187b9b] to-blue-600",
  tags: ["CKD", "Nephrology", "Prevention"],
};

const POSTS = [
  {
    slug: "kidney-stone-diet",
    title: "The Complete Kidney Stone Diet Guide",
    excerpt:
      "What to eat, what to avoid, and how much water you actually need to prevent recurrent kidney stones.",
    category: "Kidney Stones",
    readTime: "6 min read",
    date: "5 June 2026",
    color: "bg-amber-50",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    slug: "male-infertility-causes",
    title: "Male Infertility: Causes, Diagnosis & Modern Treatments",
    excerpt:
      "A comprehensive guide to understanding male factor infertility — from semen analysis to advanced ART options.",
    category: "Andrology",
    readTime: "7 min read",
    date: "1 June 2026",
    color: "bg-teal-50",
    tagColor: "bg-teal-100 text-teal-700",
  },
  {
    slug: "dialysis-myths",
    title: "5 Common Myths About Dialysis — Debunked",
    excerpt:
      "Many patients fear dialysis based on misconceptions. Here's what dialysis actually involves and how life continues normally.",
    category: "Dialysis",
    readTime: "5 min read",
    date: "26 May 2026",
    color: "bg-blue-50",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    slug: "erectile-dysfunction-treatment",
    title: "Erectile Dysfunction: When to See a Doctor and What to Expect",
    excerpt:
      "ED affects 1 in 5 men over 40. Learn about the medical causes, diagnostic tests, and effective treatments available.",
    category: "Andrology",
    readTime: "6 min read",
    date: "20 May 2026",
    color: "bg-purple-50",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    slug: "hypertension-kidney",
    title: "How High Blood Pressure Silently Damages Your Kidneys",
    excerpt:
      "The link between hypertension and CKD is bidirectional. Here's what patients with high BP need to monitor.",
    category: "Kidney Care",
    readTime: "5 min read",
    date: "15 May 2026",
    color: "bg-red-50",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    slug: "pediatric-uti",
    title: "UTI in Children: Signs Parents Should Never Ignore",
    excerpt:
      "Children with UTIs often can't describe their symptoms. Here are the warning signs and why prompt treatment matters.",
    category: "Pediatric Urology",
    readTime: "4 min read",
    date: "10 May 2026",
    color: "bg-green-50",
    tagColor: "bg-green-100 text-green-700",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0f2a3f] via-[#187b9b] to-teal-500 pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="section-container relative text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <BookOpen size={13} />
            Expert Health Articles
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Kidney &amp; Andrology{" "}
            <span className="text-teal-300">Health Blog</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Evidence-based articles written by our specialist team to help you understand kidney health, male fertility, and urological conditions.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 py-12">
        <div className="section-container">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.label}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  cat.active
                    ? "bg-[#187b9b] text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#187b9b] hover:text-[#187b9b]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <div
            className={`bg-gradient-to-br ${FEATURED.color} rounded-3xl p-8 md:p-10 text-white mb-10 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative max-w-2xl">
              <span className="inline-flex items-center gap-1.5 bg-white/20 border border-white/30 rounded-full px-3 py-1 text-xs font-semibold mb-4">
                <Tag size={11} />
                {FEATURED.category} · Featured
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {FEATURED.title}
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                {FEATURED.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/blog/${FEATURED.slug}`}
                  className="flex items-center gap-2 bg-white text-[#187b9b] text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-teal-50 transition-colors"
                >
                  Read Article <ArrowRight size={14} />
                </Link>
                <span className="flex items-center gap-1.5 text-white/60 text-xs">
                  <Clock size={12} /> {FEATURED.readTime}
                </span>
                <span className="text-white/60 text-xs">{FEATURED.date}</span>
              </div>
              <div className="flex gap-2 mt-4">
                {FEATURED.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/10 border border-white/20 px-2.5 py-0.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                {/* Colour band */}
                <div className={`h-2 ${post.color} w-full`} />
                <div className="p-6">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.tagColor} mb-3 inline-block`}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#187b9b] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-3">
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="flex justify-center mt-10 gap-2">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`w-10 h-10 rounded-xl text-sm font-semibold transition-colors ${
                  n === 1
                    ? "bg-[#187b9b] text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-[#187b9b]"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Have a health question?
          </h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Our specialists are here to help. Book a consultation today.
          </p>
          <Link
            href="/appointment"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Calendar size={16} />
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}

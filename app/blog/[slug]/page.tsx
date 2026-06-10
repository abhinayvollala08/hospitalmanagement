import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  ChevronRight,
} from "lucide-react";

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
    tags: ["Kidney Stones", "Diet", "Nutrition"],
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
    tags: ["Infertility", "Andrology", "Men's Health"],
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
    tags: ["Dialysis", "Renal Care", "Kidney Health"],
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
    tags: ["ED", "Men's Wellness", "Sexual Health"],
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
    tags: ["Hypertension", "Blood Pressure", "Renal Health"],
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
    tags: ["UTI", "Pediatrics", "Children's Health"],
  },
];

const ALL_POSTS = [FEATURED, ...POSTS];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts
  const related = ALL_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  // High quality realistic mock content paragraphs
  const intro = `Health and wellness decisions require professional insights. In this article, our specialist clinical team details key clinical concepts surrounding ${post.title.toLowerCase()}. Understanding the pathophysiological mechanisms, primary triggers, and preventative approaches is critical for achieving optimal health outcomes.`;

  const body1 = `When evaluating ${post.category.toLowerCase()} issues, clinicians look at both acute symptomatology and chronic risk factors. Early diagnostic mapping — such as laboratory biomarkers, radiographic assessment, and clinical evaluations — can yield vital details. By acting before structural tissue damage occurs, we can significantly increase the chances of long-term recovery.`;

  const body2 = `Modern therapies have progressed rapidly. Today's urology and nephrology treatments focus heavily on patient comfort and minimal invasiveness. From tailored dietary alterations to advanced microscopic or laser-guided surgical corrections, patients now have access to solutions that combine efficacy with low recovery times. Speak with a healthcare professional to identify which therapeutic pathways align with your unique physiological profile.`;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0f2a3f] via-[#187b9b] to-teal-500 pt-40 pb-16 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="section-container relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 border border-white/20 text-teal-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <User size={16} className="text-teal-300" /> Dr. Gopikanth's Clinical Team
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-teal-300" /> {post.readTime}
              </span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side: Post body */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-sm space-y-6">
                {/* Meta actions */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-5">
                  <div className="flex gap-2">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-50 border border-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 text-gray-400">
                    <button className="p-2 hover:bg-gray-50 rounded-xl hover:text-gray-600 transition-colors" aria-label="Share">
                      <Share2 size={16} />
                    </button>
                    <button className="p-2 hover:bg-gray-50 rounded-xl hover:text-gray-600 transition-colors" aria-label="Bookmark">
                      <Bookmark size={16} />
                    </button>
                  </div>
                </div>

                {/* Article blocks */}
                <p className="text-gray-800 text-base md:text-lg leading-relaxed font-semibold italic border-l-4 border-teal-500 pl-4">
                  {intro}
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  {body1}
                </p>

                <div className="p-6 bg-teal-50/50 rounded-2xl border border-teal-100/50 my-6">
                  <h3 className="font-bold text-[#187b9b] text-base mb-2">Key Clinical Takeaways:</h3>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#187b9b] font-bold shrink-0">✓</span> Early diagnosis reduces organ damage.
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#187b9b] font-bold shrink-0">✓</span> Simple diagnostics (blood/urine panels) are highly effective.
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#187b9b] font-bold shrink-0">✓</span> Personalised interventions address individual pathophysiology.
                    </li>
                  </ul>
                </div>

                <p className="text-gray-600 text-base leading-relaxed">
                  {body2}
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  Always consult with a qualified specialist before modifying medications, diagnostic protocols, or dietary regimens. The information listed above is for general patient educational purposes and does not replace dedicated face-to-face medical consultation.
                </p>
              </div>
            </div>

            {/* Right side: Sidebar */}
            <div className="space-y-6">
              {/* Call-to-action */}
              <div className="bg-[#0f2a3f] rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Calendar size={18} className="text-teal-300" /> Book Consultation
                </h3>
                <p className="text-white/70 text-xs mb-6 leading-relaxed">
                  Speak directly with our doctors to receive expert diagnostic care and a customized treatment plan.
                </p>
                <Link
                  href="/appointment"
                  className="w-full flex items-center justify-center gap-2 bg-[#187b9b] hover:bg-teal-50 hover:text-[#187b9b] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md text-sm"
                >
                  Book Appointment Now
                </Link>
              </div>

              {/* Related posts */}
              <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-base mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group block space-y-1"
                    >
                      <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider block">
                        {p.category}
                      </span>
                      <h4 className="text-xs font-bold text-gray-800 group-hover:text-[#187b9b] transition-colors leading-snug">
                        {p.title}
                      </h4>
                      <div className="flex justify-between items-center text-[10px] text-gray-400 pt-1">
                        <span>{p.readTime}</span>
                        <span>{p.date}</span>
                      </div>
                      <div className="border-b border-gray-50 pt-2" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { BookOpen, Image, Star, HelpCircle, Search, Plus } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Editor Dashboard" };

const stats = [
  {
    label: "Published Posts",
    value: "24",
    icon: BookOpen,
    color: "bg-amber-50 text-amber-600",
    href: "/editor/blogs",
  },
  {
    label: "Media Files",
    value: "138",
    icon: Image,
    color: "bg-blue-50 text-blue-600",
    href: "/editor/media",
  },
  {
    label: "Testimonials",
    value: "31",
    icon: Star,
    color: "bg-yellow-50 text-yellow-600",
    href: "/editor/testimonials",
  },
  {
    label: "FAQs",
    value: "18",
    icon: HelpCircle,
    color: "bg-teal-50 text-teal-600",
    href: "/editor/faqs",
  },
];

const recentPosts = [
  { title: "Understanding CKD Stages", status: "published", date: "8 Jun 2026" },
  { title: "Kidney Stone Diet Guide", status: "published", date: "5 Jun 2026" },
  { title: "Male Infertility: Causes & Treatment", status: "draft", date: "3 Jun 2026" },
  { title: "Dialysis at Home — Is it Possible?", status: "review", date: "1 Jun 2026" },
];

export default function EditorDashboard() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Content Studio ✍️
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage blogs, resources, testimonials and SEO content.
          </p>
        </div>
        <Link
          href="/editor/blogs/new"
          id="editor-new-post"
          className="flex items-center gap-2 bg-[#187b9b] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#0f5a73] transition-colors shadow-sm"
        >
          <Plus size={15} />
          New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow group"
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${s.color} mb-3`}
            >
              <s.icon size={20} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-500 mt-0.5 group-hover:text-[#187b9b] transition-colors">
              {s.label}
            </p>
          </Link>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
          <h2 className="font-semibold text-gray-800">Recent Blog Posts</h2>
          <Link
            href="/editor/blogs"
            className="text-xs text-[#187b9b] font-semibold hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="divide-y divide-gray-50">
          {recentPosts.map((post, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors"
            >
              <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                <BookOpen size={16} className="text-amber-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {post.title}
                </p>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                  post.status === "published"
                    ? "bg-green-100 text-green-700"
                    : post.status === "draft"
                      ? "bg-gray-100 text-gray-600"
                      : "bg-amber-100 text-amber-700"
                }`}
              >
                {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SEO reminder */}
      <div className="bg-gradient-to-r from-[#0f2a3f] to-[#187b9b] rounded-2xl p-6 text-white flex items-center gap-4">
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
          <Search size={22} />
        </div>
        <div className="flex-1">
          <p className="font-semibold">SEO Optimization</p>
          <p className="text-sm text-white/70 mt-0.5">
            3 pages are missing meta descriptions. Update them to improve search
            visibility.
          </p>
        </div>
        <Link
          href="/editor/seo"
          className="shrink-0 bg-white text-[#187b9b] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-teal-50 transition-colors"
        >
          Fix Now
        </Link>
      </div>
    </div>
  );
}

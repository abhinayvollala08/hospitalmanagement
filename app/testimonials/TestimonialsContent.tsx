"use client";

import { useState, useEffect } from "react";
import { Star, Quote, Play, X, ChevronLeft, ChevronRight, MessageSquare, ThumbsUp, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Testimonial {
  name: string;
  location: string;
  treatment: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
  color: string;
}

interface VideoTestimonial {
  id: string;
  name: string;
  treatment: string;
  duration: string;
  videoUrl: string;
  thumbnail: string;
  quote: string;
}

interface Props {
  testimonials: Testimonial[];
  stats: { value: string; label: string }[];
}

const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: "video-1",
    name: "Aman Verma",
    treatment: "Laser Stone Surgery (RIRS)",
    duration: "2:15",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    quote: "The laser RIRS procedure was completely painless. I was back to work in 2 days.",
  },
  {
    id: "video-2",
    name: "Dr. K. Raghavan",
    treatment: "Andrology Consultation",
    duration: "3:10",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80",
    quote: "Being a physician myself, I was highly impressed by Dr. Gopikanth's clinical expertise and protocols.",
  },
  {
    id: "video-3",
    name: "S. Venkat Rao",
    treatment: "CKD Stage 3 Treatment",
    duration: "1:58",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    quote: "Thanks to the early dietary management and custom medicines, my GFR has stabilized.",
  },
];

export function TestimonialsContent({ testimonials, stats }: Props) {
  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  // Video Modal State
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);

  // Auto-slide written testimonials carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCarouselIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCarouselIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0f2a3f] via-[#187b9b] to-teal-500 pt-40 pb-20 overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="section-container relative text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <Star size={13} className="fill-yellow-300 text-yellow-300" />
            Rated 4.9 / 5 by our patients
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Real Stories, <span className="text-teal-300">Real Results</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Thousands of patients have trusted Dr. Gopikanth with their kidney health and men's wellness. Here is what they say about their recovery.
          </p>
          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-sm"
              >
                <p className="text-2xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs text-white/60 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-teal mb-3 inline-flex">Patient Video Journeys</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Video Testimonials</h2>
            <p className="text-sm text-gray-500 mt-2">Hear directly from patients about their diagnostic and treatment experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VIDEO_TESTIMONIALS.map((video) => (
              <div
                key={video.id}
                className="group relative bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] w-full bg-gray-200 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                  {/* Play Button */}
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#187b9b] hover:bg-teal-500 hover:scale-110 text-white flex items-center justify-center shadow-lg transition-all"
                    aria-label={`Play video testimonial of ${video.name}`}
                  >
                    <Play size={18} className="fill-current ml-0.5" />
                  </button>

                  {/* Duration Badge */}
                  <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {video.duration}
                  </span>
                </div>

                {/* Content info */}
                <div className="p-6 space-y-2.5">
                  <span className="inline-block bg-teal-50 border border-teal-100 text-teal-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {video.treatment}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{video.name}</h3>
                  <p className="text-xs text-gray-600 italic leading-relaxed">
                    &ldquo;{video.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WRITTEN TESTIMONIALS CAROUSEL ──────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#0f2a3f] to-[#187b9b] text-white overflow-hidden relative">
        {/* Background Blur */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="section-container relative max-w-4xl">
          <div className="text-center mb-10">
            <span className="badge bg-white/10 border border-white/20 text-teal-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Featured Reviews
            </span>
            <h2 className="text-3xl font-extrabold mt-3">Written Patient Spotlights</h2>
          </div>

          {/* Carousel Viewport */}
          <div className="relative min-h-[300px] flex items-center justify-center px-4 md:px-12">
            <button
              onClick={handlePrev}
              className="absolute left-0 p-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-all z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="w-full overflow-hidden py-4">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={carouselIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex flex-col items-center text-center space-y-6"
                >
                  <Quote size={40} className="text-teal-300 opacity-80" />
                  
                  <p className="text-base md:text-xl font-medium leading-relaxed max-w-2xl">
                    &ldquo;{testimonials[carouselIndex].text}&rdquo;
                  </p>

                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: testimonials[carouselIndex].rating }).map((_, i) => (
                      <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div>
                    <h4 className="font-bold text-base">{testimonials[carouselIndex].name}</h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      {testimonials[carouselIndex].location} · {testimonials[carouselIndex].treatment}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 p-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-all z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicators Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > carouselIndex ? 1 : -1);
                  setCarouselIndex(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === carouselIndex ? "w-6 bg-teal-300" : "w-2 bg-white/30"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL TESTIMONIALS GRID ────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-teal mb-3 inline-flex">Patients Guestbook</span>
            <h2 className="text-3xl font-extrabold text-gray-900">All Patient Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                {/* Rating */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <Quote size={28} className="text-gray-100 mb-2 -ml-1" />
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-50">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {t.location} · {t.treatment}
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-gray-300">
                    {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="section-container text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              "Google Reviews — 4.9★",
              "Practo — Top Doctor 2025",
              "Verified by Apollo Diagnostics",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-5 py-2.5 text-sm font-semibold text-gray-700"
              >
                <ThumbsUp size={14} className="text-[#187b9b]" />
                {badge}
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Become our next success story
          </h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Book a consultation and take the first step towards better health.
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

      {/* ── VIDEO PLAYER MODAL ────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full z-10 transition-colors"
                aria-label="Close video player"
              >
                <X size={18} />
              </button>

              {/* Video Player */}
              <div className="aspect-[16/9] w-full">
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  style={{ border: 0 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

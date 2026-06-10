"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Phone,
  Calculator,
  ClipboardList,
  Stethoscope,
  Activity,
  ChevronRight,
  AlertTriangle,
  Heart,
  User,
} from "lucide-react";
import { CLINIC_INFO } from "@/constants/clinic-info";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function InteractiveToolPage({ params }: Props) {
  const { slug } = use(params);

  // ─── 1. KIDNEY RISK CALCULATOR STATE ───
  const [krAge, setKrAge] = useState("");
  const [krDiabetes, setKrDiabetes] = useState("");
  const [krBp, setKrBp] = useState("");
  const [krFoamy, setKrFoamy] = useState("");
  const [krFamily, setKrFamily] = useState("");
  const [krResult, setKrResult] = useState<any | null>(null);

  // ─── 2. FERTILITY SELF-ASSESSMENT STATE ───
  const [fAge, setFAge] = useState("");
  const [fStress, setFStress] = useState("");
  const [fLifestyle, setFLifestyle] = useState("");
  const [fSmoking, setFSmoking] = useState("");
  const [fHistory, setFHistory] = useState("");
  const [fResult, setFResult] = useState<any | null>(null);

  // ─── 3. SYMPTOM CHECKER STATE ───
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [scResult, setScResult] = useState<any | null>(null);

  if (slug !== "kidney-risk" && slug !== "fertility" && slug !== "symptom-checker") {
    notFound();
  }

  // ─── CALCULATION LOGIC ───

  function calculateKidneyRisk(e: React.FormEvent) {
    e.preventDefault();
    let score = 0;

    const ageNum = parseInt(krAge);
    if (ageNum > 60) score += 3;
    else if (ageNum > 45) score += 2;
    else if (ageNum > 30) score += 1;

    if (krDiabetes === "yes") score += 4;
    if (krBp === "yes") score += 3;
    if (krFoamy === "yes") score += 4;
    if (krFamily === "yes") score += 2;

    let risk = "Low Risk";
    let desc = "Based on your selections, your risk of chronic kidney disease is low. Continue maintaining a active lifestyle, stay hydrated, and undergo routine checkups.";
    let color = "text-green-600 bg-green-50 border-green-100";

    if (score >= 10) {
      risk = "High Risk";
      desc = "You have multiple critical risk factors (such as diabetes, hypertension, or protein indicators like foamy urine). We highly recommend booking an evaluation with a Nephrologist soon to check your GFR and creatinine levels.";
      color = "text-red-600 bg-red-50 border-red-100";
    } else if (score >= 5) {
      risk = "Moderate Risk";
      desc = "You have some risk factors that could stress your kidneys over time. We recommend controlling your blood pressure/sugar levels carefully and requesting a simple urine test from your doctor.";
      color = "text-amber-600 bg-amber-50 border-amber-100";
    }

    setKrResult({ risk, desc, color, score });
  }

  function calculateFertility(e: React.FormEvent) {
    e.preventDefault();
    let score = 0;

    if (fAge === "above40") score += 3;
    else if (fAge === "35to40") score += 2;

    if (fStress === "high") score += 2;
    if (fLifestyle === "sedentary") score += 2;
    if (fSmoking === "yes") score += 3;
    if (fHistory === "yes") score += 4;

    let status = "Excellent / Good";
    let desc = "Your lifestyle and medical profile suggest a healthy baseline for reproductive wellness. Maintain clean habits and manage stress levels.";
    let color = "text-green-600 bg-green-50 border-green-100";

    if (score >= 8) {
      status = "Consultation Advised";
      desc = "You have indicators that could affect reproductive health (like varicocele history, high stress, or smoking). Booking a semen analysis and consulting an Andrologist is recommended for an accurate baseline assessment.";
      color = "text-red-600 bg-red-50 border-red-100";
    } else if (score >= 4) {
      status = "Mild Focus Area";
      desc = "A few lifestyle choices or age factors are present. Implementing dietary upgrades, regular exercise, and reducing smoking/stress will positively impact fertility parameters.";
      color = "text-amber-600 bg-amber-50 border-amber-100";
    }

    setFResult({ status, desc, color, score });
  }

  function handleSymptomToggle(symptom: string) {
    if (symptoms.includes(symptom)) {
      setSymptoms(symptoms.filter((s) => s !== symptom));
    } else {
      setSymptoms([...symptoms, symptom]);
    }
  }

  function checkSymptoms(e: React.FormEvent) {
    e.preventDefault();
    if (symptoms.length === 0) return;

    let nephrologyPoints = 0;
    let urologyPoints = 0;
    let andrologyPoints = 0;

    if (symptoms.includes("blood")) { urologyPoints += 3; nephrologyPoints += 2; }
    if (symptoms.includes("painful")) { urologyPoints += 3; }
    if (symptoms.includes("flank")) { urologyPoints += 3; nephrologyPoints += 1; }
    if (symptoms.includes("frequency")) { urologyPoints += 2; }
    if (symptoms.includes("swelling")) { nephrologyPoints += 4; }
    if (symptoms.includes("erectile")) { andrologyPoints += 4; }

    let recommendation = "";
    let specialty = "";
    let conditions = "";

    if (nephrologyPoints > urologyPoints && nephrologyPoints > andrologyPoints) {
      specialty = "Nephrologist (Kidney Specialist)";
      recommendation = "Dr. Gopikanth (Nephrology Clinic)";
      conditions = "Chronic Kidney Disease, Nephrotic Syndrome, fluid retention, or Glomerulonephritis.";
    } else if (andrologyPoints > urologyPoints) {
      specialty = "Andrologist (Men's Health Specialist)";
      recommendation = "Dr. Gopikanth (Andrology Clinic)";
      conditions = "Male fertility issues, low testosterone, varicocele, or erectile dysfunction.";
    } else {
      specialty = "Urologist (Urinary Track Specialist)";
      recommendation = "Dr. Gopikanth (Urology Clinic)";
      conditions = "Kidney stones, Urinary Tract Infection (UTI), or prostate enlargement.";
    }

    setScResult({ specialty, recommendation, conditions });
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0f2a3f] via-[#187b9b] to-teal-600 pt-40 pb-16 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="section-container relative">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Resources
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 border border-white/20 text-teal-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Interactive Tools
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              {slug === "kidney-risk" && "Kidney Risk Calculator"}
              {slug === "fertility" && "Fertility Self-Assessment"}
              {slug === "symptom-checker" && "Symptom Checker"}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              {slug === "kidney-risk" && "Evaluate your potential risk factors for kidney disease based on clinical indicators."}
              {slug === "fertility" && "A private, self-directed wellness questionnaire assessing parameters that influence men's fertility."}
              {slug === "symptom-checker" && "Select your urological or kidney-related symptoms to discover the recommended clinical pathway."}
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left/Middle Tool Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-sm">
                
                {/* ─── CASE A: KIDNEY RISK CALCULATOR ─── */}
                {slug === "kidney-risk" && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#187b9b]">
                        <Calculator size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-950">Kidney Health Risk Calculator</h2>
                        <p className="text-xs text-gray-500">Provides general risk insights. Not a diagnostic tool.</p>
                      </div>
                    </div>

                    {!krResult ? (
                      <form onSubmit={calculateKidneyRisk} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Enter Age</label>
                            <input
                              type="number"
                              required
                              min="1"
                              max="120"
                              value={krAge}
                              onChange={(e) => setKrAge(e.target.value)}
                              placeholder="e.g. 45"
                              className="form-input"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">History of Diabetes?</label>
                            <select
                              required
                              value={krDiabetes}
                              onChange={(e) => setKrDiabetes(e.target.value)}
                              className="form-input"
                            >
                              <option value="">Select option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">History of Hypertension (High BP)?</label>
                            <select
                              required
                              value={krBp}
                              onChange={(e) => setKrBp(e.target.value)}
                              className="form-input"
                            >
                              <option value="">Select option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Do you notice Foamy/Frothy Urine?</label>
                            <select
                              required
                              value={krFoamy}
                              onChange={(e) => setKrFoamy(e.target.value)}
                              className="form-input"
                            >
                              <option value="">Select option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Family History of Kidney Failure?</label>
                          <select
                            required
                            value={krFamily}
                            onChange={(e) => setKrFamily(e.target.value)}
                            className="form-input"
                          >
                            <option value="">Select option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No / Unsure</option>
                          </select>
                        </div>

                        <button type="submit" className="w-full btn-primary py-3.5">
                          Calculate My Risk Profile
                        </button>
                      </form>
                    ) : (
                      <div className="space-y-6">
                        <div className={`p-6 rounded-2xl border ${krResult.color} space-y-3`}>
                          <span className="text-xs uppercase tracking-wider font-bold">Calculation Result:</span>
                          <h3 className="text-2xl font-extrabold">{krResult.risk}</h3>
                          <p className="text-sm leading-relaxed">{krResult.desc}</p>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={() => {
                              setKrResult(null);
                              setKrAge("");
                              setKrDiabetes("");
                              setKrBp("");
                              setKrFoamy("");
                              setKrFamily("");
                            }}
                            className="btn-secondary flex-1 py-3 text-xs"
                          >
                            Retake Assessment
                          </button>
                          <Link href="/appointment" className="btn-primary flex-1 py-3 text-xs">
                            Book Nephrology Consult
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ─── CASE B: FERTILITY ASSESSMENT ─── */}
                {slug === "fertility" && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                        <ClipboardList size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-950">Fertility Self-Assessment Quiz</h2>
                        <p className="text-xs text-gray-500">Anonymous questionnaire helping identify reproductive wellness blocks.</p>
                      </div>
                    </div>

                    {!fResult ? (
                      <form onSubmit={calculateFertility} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Age Range</label>
                            <select
                              required
                              value={fAge}
                              onChange={(e) => setFAge(e.target.value)}
                              className="form-input"
                            >
                              <option value="">Select option</option>
                              <option value="under35">Under 35</option>
                              <option value="35to40">35 to 40</option>
                              <option value="above40">Above 40</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Daily Stress Levels</label>
                            <select
                              required
                              value={fStress}
                              onChange={(e) => setFStress(e.target.value)}
                              className="form-input"
                            >
                              <option value="">Select option</option>
                              <option value="low">Low Stress</option>
                              <option value="medium">Medium / Manageable</option>
                              <option value="high">High Stress</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Activity/Lifestyle</label>
                            <select
                              required
                              value={fLifestyle}
                              onChange={(e) => setFLifestyle(e.target.value)}
                              className="form-input"
                            >
                              <option value="">Select option</option>
                              <option value="active">Active (Exercise 3x/week)</option>
                              <option value="moderate">Moderate</option>
                              <option value="sedentary">Sedentary (Mostly sitting)</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Smoking / Heavy Alcohol Use?</label>
                            <select
                              required
                              value={fSmoking}
                              onChange={(e) => setFSmoking(e.target.value)}
                              className="form-input"
                            >
                              <option value="">Select option</option>
                              <option value="yes">Yes, regularly</option>
                              <option value="no">No / Occasional</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">History of Varicocele, Hernia, or Testicular Injury?</label>
                          <select
                            required
                            value={fHistory}
                            onChange={(e) => setFHistory(e.target.value)}
                            className="form-input"
                          >
                            <option value="">Select option</option>
                            <option value="yes">Yes, diagnosed history</option>
                            <option value="no">No / None of these</option>
                          </select>
                        </div>

                        <button type="submit" className="w-full btn-teal py-3.5">
                          Evaluate Fertility Indicators
                        </button>
                      </form>
                    ) : (
                      <div className="space-y-6">
                        <div className={`p-6 rounded-2xl border ${fResult.color} space-y-3`}>
                          <span className="text-xs uppercase tracking-wider font-bold">Quiz Results:</span>
                          <h3 className="text-2xl font-extrabold">{fResult.status}</h3>
                          <p className="text-sm leading-relaxed">{fResult.desc}</p>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={() => {
                              setFResult(null);
                              setFAge("");
                              setFStress("");
                              setFLifestyle("");
                              setFSmoking("");
                              setFHistory("");
                            }}
                            className="btn-secondary flex-1 py-3 text-xs"
                          >
                            Retake Assessment
                          </button>
                          <Link href="/appointment" className="btn-teal flex-1 py-3 text-xs">
                            Book Andrology Consult
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ─── CASE C: SYMPTOM CHECKER ─── */}
                {slug === "symptom-checker" && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                        <Stethoscope size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-950">Specialty &amp; Symptom Router</h2>
                        <p className="text-xs text-gray-500">Pick current symptoms to discover if you need a Nephrologist or Urologist.</p>
                      </div>
                    </div>

                    {!scResult ? (
                      <form onSubmit={checkSymptoms} className="space-y-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                            Select all symptoms you are experiencing:
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <button
                              type="button"
                              onClick={() => handleSymptomToggle("blood")}
                              className={`p-4 rounded-2xl border text-left flex justify-between items-center transition-all ${
                                symptoms.includes("blood")
                                  ? "border-red-500 bg-red-50 text-red-950 font-semibold"
                                  : "border-gray-200 hover:border-gray-300 text-gray-700"
                              }`}
                            >
                              <span className="text-xs">Blood in urine (Hematuria)</span>
                              <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                symptoms.includes("blood") ? "bg-red-500 text-white" : "border-gray-300"
                              }`}>✓</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleSymptomToggle("painful")}
                              className={`p-4 rounded-2xl border text-left flex justify-between items-center transition-all ${
                                symptoms.includes("painful")
                                  ? "border-teal-500 bg-teal-50 text-teal-950 font-semibold"
                                  : "border-gray-200 hover:border-gray-300 text-gray-700"
                              }`}
                            >
                              <span className="text-xs">Painful urination (Dysuria)</span>
                              <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                symptoms.includes("painful") ? "bg-teal-500 text-white" : "border-gray-300"
                              }`}>✓</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleSymptomToggle("flank")}
                              className={`p-4 rounded-2xl border text-left flex justify-between items-center transition-all ${
                                symptoms.includes("flank")
                                  ? "border-teal-500 bg-teal-50 text-teal-950 font-semibold"
                                  : "border-gray-200 hover:border-gray-300 text-gray-700"
                              }`}
                            >
                              <span className="text-xs">Flank / lower back pain</span>
                              <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                symptoms.includes("flank") ? "bg-teal-500 text-white" : "border-gray-300"
                              }`}>✓</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleSymptomToggle("frequency")}
                              className={`p-4 rounded-2xl border text-left flex justify-between items-center transition-all ${
                                symptoms.includes("frequency")
                                  ? "border-teal-500 bg-teal-50 text-teal-950 font-semibold"
                                  : "border-gray-200 hover:border-gray-300 text-gray-700"
                              }`}
                            >
                              <span className="text-xs">Frequent urination at night</span>
                              <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                symptoms.includes("frequency") ? "bg-teal-500 text-white" : "border-gray-300"
                              }`}>✓</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleSymptomToggle("swelling")}
                              className={`p-4 rounded-2xl border text-left flex justify-between items-center transition-all ${
                                symptoms.includes("swelling")
                                  ? "border-blue-500 bg-blue-50 text-blue-950 font-semibold"
                                  : "border-gray-200 hover:border-gray-300 text-gray-700"
                              }`}
                            >
                              <span className="text-xs">Swelling in legs, ankles or face</span>
                              <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                symptoms.includes("swelling") ? "bg-blue-500 text-white" : "border-gray-300"
                              }`}>✓</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleSymptomToggle("erectile")}
                              className={`p-4 rounded-2xl border text-left flex justify-between items-center transition-all ${
                                symptoms.includes("erectile")
                                  ? "border-purple-500 bg-purple-50 text-purple-950 font-semibold"
                                  : "border-gray-200 hover:border-gray-300 text-gray-700"
                              }`}
                            >
                              <span className="text-xs">Erectile or men&apos;s sexual health issues</span>
                              <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                symptoms.includes("erectile") ? "bg-purple-500 text-white" : "border-gray-300"
                              }`}>✓</span>
                            </button>
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={symptoms.length === 0}
                          className="w-full btn-primary py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          Check Recommended Specialty
                        </button>
                      </form>
                    ) : (
                      <div className="space-y-6">
                        <div className="p-6 rounded-2xl border border-teal-100 bg-teal-50/50 space-y-4">
                          <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
                            <Activity size={14} /> Recommended Pathway:
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{scResult.specialty}</h3>
                            <p className="text-xs text-gray-500">Your symptoms align closely with: <span className="font-semibold text-gray-800">{scResult.conditions}</span></p>
                          </div>

                          <div className="border-t border-teal-100/50 pt-3 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm text-teal-600 shrink-0">
                              <User size={16} />
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 font-medium">Assigned Specialist:</p>
                              <p className="text-xs font-semibold text-gray-800">{scResult.recommendation}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() => {
                              setScResult(null);
                              setSymptoms([]);
                            }}
                            className="btn-secondary flex-1 py-3 text-xs"
                          >
                            Reset Symptoms
                          </button>
                          <Link href="/appointment" className="btn-primary flex-1 py-3 text-xs">
                            Book Assessment
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right side contact information */}
            <div className="space-y-6">
              <div className="bg-[#0f2a3f] rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Heart size={16} className="text-teal-300" /> Clinic Helpdesk
                </h3>
                <p className="text-white/70 text-xs mb-6 leading-relaxed">
                  Call our clinical support desk to directly schedule an appointment or ask questions about our interactive diagnostic quizzes.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#187b9b] hover:bg-teal-50 hover:text-[#187b9b] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md text-sm"
                  >
                    <Phone size={14} /> Call {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4 flex justify-between text-xs text-white/50">
                  <span>Open Daily</span>
                  <span>{CLINIC_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  LogIn,
  Globe,
} from "lucide-react";

const ERROR_MESSAGES: Record<string, string> = {
  CredentialsSignin: "Invalid email or password. Please try again.",
  OAuthAccountNotLinked:
    "This email is linked to a different provider. Please use the original sign-in method.",
  Default: "Something went wrong. Please try again.",
};

interface Props {
  callbackUrl?: string;
  error?: string;
}

export function LoginForm({ callbackUrl, error: authError }: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const errorMessage = authError
    ? (ERROR_MESSAGES[authError] ?? ERROR_MESSAGES.Default)
    : localError;

  const redirectTo = callbackUrl ?? "/";

  async function handleCredentials(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    setLocalError(null);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setLocalError(ERROR_MESSAGES[res.error] ?? ERROR_MESSAGES.Default);
    } else {
      router.push(redirectTo);
      router.refresh();
    }
  }

  async function handleGoogle() {
    setGoogleLoading(true);
    await signIn("google", { callbackUrl: redirectTo });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2a3f] via-[#187b9b] to-teal-600 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header band */}
          <div className="bg-gradient-to-r from-[#0f2a3f] to-[#187b9b] px-8 py-7 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-white/15 rounded-2xl flex items-center justify-center">
                <span className="font-bold text-base select-none">GK</span>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">Dr. Gopikanth</p>
                <p className="text-xs text-white/70 leading-tight">
                  Kidney &amp; Andrology Center
                </p>
              </div>
            </div>
            <h1 className="text-2xl font-bold leading-tight">Welcome back</h1>
            <p className="text-sm text-white/70 mt-1">
              Sign in to access your healthcare dashboard
            </p>
          </div>

          <div className="px-8 py-7 space-y-5">
            {/* Error banner */}
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-start gap-3 bg-red-50 border border-red-100 text-red-700 rounded-xl p-3.5 text-sm"
                role="alert"
              >
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {/* Google OAuth */}
            <button
              id="login-google"
              onClick={handleGoogle}
              disabled={googleLoading || loading}
              className="w-full flex items-center justify-center gap-3 border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {googleLoading ? (
                <span className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <Globe size={18} className="text-[#4285f4]" />
              )}
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 text-gray-300 text-xs">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-gray-400">or continue with email</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Credentials form */}
            <form onSubmit={handleCredentials} className="space-y-4" noValidate>
              {/* Email */}
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="form-input pl-10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="login-password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-[#187b9b] hover:underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="form-input pl-10 pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                id="login-submit"
                type="submit"
                disabled={loading || googleLoading || !email || !password}
                className="w-full flex items-center justify-center gap-2.5 bg-[#187b9b] hover:bg-[#0f5a73] text-white font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <LogIn size={17} />
                )}
                {loading ? "Signing in…" : "Sign In"}
              </button>
            </form>

            {/* Footer */}
            <div className="flex flex-col gap-2 text-center text-sm text-gray-500">
              <p>
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-[#187b9b] font-semibold hover:underline"
                >
                  Create one
                </Link>
              </p>
              <p>
                New patient?{" "}
                <Link
                  href="/appointment"
                  className="text-[#187b9b] font-semibold hover:underline"
                >
                  Book an appointment
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-4">
          <Link
            href="/"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            ← Back to website
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

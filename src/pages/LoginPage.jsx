// LoginPage.jsx
import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link } from "react-router"; // or your router's Link

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-[var(--color-gray)]">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-gray-600">
            Sign in to your Danish Souvenirs account
          </p>
        </div>

        <form className="mt-8 space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="block w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition pr-11"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-[var(--color-red)] focus:ring-[var(--color-red)] border-[var(--color-gray)] rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[var(--color-red)] hover:text-red-800 transition"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[var(--color-red)] hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-red)] transition font-medium"
            >
              Sign in
              <ArrowRight size={18} />
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--color-gray)]" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social buttons (placeholder) */}
        <div className="grid grid-cols-2 gap-4">
          <button className="w-full py-3 px-4 border border-[var(--color-gray)] rounded-lg text-gray-700 hover:bg-gray-50 transition font-medium">
            Google
          </button>
          <button className="w-full py-3 px-4 border border-[var(--color-gray)] rounded-lg text-gray-700 hover:bg-gray-50 transition font-medium">
            Facebook
          </button>
        </div>

        {/* Register link */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-[var(--color-red)] hover:text-red-800 transition"
          >
            Create one now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

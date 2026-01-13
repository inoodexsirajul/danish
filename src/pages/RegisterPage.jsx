// RegisterPage.jsx
import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-[var(--color-gray)]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-gray-600">
            Join Danish Souvenirs & enjoy exclusive offers
          </p>
        </div>

        <form className="mt-8 space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition"
              placeholder="Rahim Khan"
            />
          </div>

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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm password
            </label>
            <div className="mt-1 relative">
              <input
                id="confirm-password"
                name="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                required
                className="block w-full px-4 py-3 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition pr-11"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 mt-1 text-[var(--color-red)] focus:ring-[var(--color-red)] border-[var(--color-gray)] rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
              I agree to the{" "}
              <a
                href="#"
                className="text-[var(--color-red)] hover:text-red-800"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[var(--color-red)] hover:text-red-800"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[var(--color-red)] hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-red)] transition font-medium"
            >
              Create account
              <ArrowRight size={18} />
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-[var(--color-red)] hover:text-red-800 transition"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

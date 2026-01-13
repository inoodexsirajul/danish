// ForgotPasswordPage.jsx
import React, { useState } from "react";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router"; // or your router's Link component

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-[var(--color-gray)]">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-14 w-14 bg-red-100 rounded-full flex items-center justify-center">
            <Mail className="h-7 w-7 text-[var(--color-red)]" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Forgot your password?
          </h2>
          <p className="mt-3 text-gray-600">
            No worries — we'll send you reset instructions.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-3 pl-11 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-red)] focus:border-[var(--color-red)] outline-none transition"
                  placeholder="you@example.com"
                />
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading || !email.trim()}
                className={`
                  w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-white 
                  bg-[var(--color-red)] hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-red)]
                  font-medium transition
                  disabled:opacity-60 disabled:cursor-not-allowed
                `}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </div>

            {/* Back to login */}
            <div className="text-center">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--color-red)] transition"
              >
                <ArrowLeft size={16} />
                Back to sign in
              </Link>
            </div>
          </form>
        ) : (
          /* Success State */
          <div className="mt-8 text-center space-y-6">
            <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Check your email
              </h3>
              <p className="mt-3 text-gray-600">
                We sent a password reset link to <strong>{email}</strong>
              </p>
              <p className="mt-2 text-sm text-gray-500">
                The link will expire in 1 hour. Didn't receive it? Check your
                spam folder.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setEmail("");
                }}
                className="text-[var(--color-red)] hover:text-red-800 font-medium transition"
              >
                Send again
              </button>
            </div>

            <Link
              to="/login"
              className="block mt-6 text-sm text-gray-600 hover:text-[var(--color-red)] transition"
            >
              ← Return to sign in
            </Link>
          </div>
        )}

        {/* Help text */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-[var(--color-gray)] pt-6">
          <p>
            Need help? Contact us at{" "}
            <a
              href="mailto:support@danishsouvenirs.dk"
              className="text-[var(--color-red)] hover:text-red-800"
            >
              support@danishsouvenirs.dk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

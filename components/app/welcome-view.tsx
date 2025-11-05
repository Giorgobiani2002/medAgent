import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Clock,
  Heart,
  Menu,
  Mic,
  Shield,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

// Props that ViewController will pass to this component
interface WelcomeViewProps {
  onStartCall: () => void;
  startButtonText?: string;
}

export default function WelcomeView({ onStartCall, startButtonText }: WelcomeViewProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                MediVoice AI
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#features"
                className="font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                How It Works
              </a>
              <a
                href="#security"
                className="font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Security
              </a>
              <a
                href="#pricing"
                className="font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Pricing
              </a>
              <button
                onClick={onStartCall}
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Try for Free
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="space-y-3 pt-4 pb-2 md:hidden">
              <a
                href="#features"
                className="block py-2 font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block py-2 font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                How It Works
              </a>
              <a
                href="#security"
                className="block py-2 font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Security
              </a>
              <a
                href="#pricing"
                className="block py-2 font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                Pricing
              </a>
              <button
                onClick={onStartCall}
                className="mt-2 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white"
              >
                Try for Free
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Big Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 px-6 pt-32 pb-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-white/10 blur-3xl"></div>
          <div
            className="absolute right-10 bottom-20 h-96 w-96 animate-pulse rounded-full bg-white/10 blur-3xl"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 h-80 w-80 animate-pulse rounded-full bg-white/5 blur-3xl"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-white backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Powered by Advanced AI Technology</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-5xl leading-tight font-bold text-white md:text-6xl lg:text-7xl">
              Your Personal Medical
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                AI Assistant
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
              {`Get instant health guidance through natural voice conversations. Schedule appointments, understand symptoms, and take control of your health—24/7.`}
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={onStartCall}
                className="group hover:shadow-3xl flex cursor-pointer items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Mic className="h-6 w-6" />
                {startButtonText || 'Start Talking Now'}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                HIPAA Compliant
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Instant Response
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                100% Secure
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="relative mt-16">
            <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-blue-600 p-2">
                      <Mic className="h-5 w-5" />
                    </div>
                    <div className="flex-1 rounded-2xl rounded-tl-none bg-gray-700/50 p-4">
                      <p className="text-sm">{`"I've been having a headache for two days..."`}</p>
                    </div>
                  </div>

                  <div className="flex flex-row-reverse items-start gap-3">
                    <div className="rounded-lg bg-purple-600 p-2">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div className="flex-1 rounded-2xl rounded-tr-none bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                      <p className="text-sm">{`I understand. Let me ask you a few questions to better assess your symptoms...`}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                    AI is listening...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Everything You Need for Better Healthcare
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Powerful AI technology meets compassionate care
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Mic className="h-8 w-8" />,
                title: 'Voice-First Interface',
                description:
                  'Simply speak naturally. No typing, no forms—just talk like you would to a doctor.',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: 'Smart Symptom Analysis',
                description:
                  'AI-powered assessment backed by medical knowledge to understand your health concerns.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: 'Instant Booking',
                description:
                  'Schedule appointments with healthcare providers instantly based on your needs.',
                gradient: 'from-orange-500 to-red-500',
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: '24/7 Availability',
                description:
                  'Healthcare guidance whenever you need it, day or night, no waiting rooms.',
                gradient: 'from-green-500 to-emerald-500',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`bg-gradient-to-br ${feature.gradient} mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-white transition-transform group-hover:scale-110`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Three simple steps to better health
            </p>
          </div>

          <div className="relative grid gap-12 md:grid-cols-3">
            <div className="absolute top-20 right-0 left-0 hidden h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 md:block"></div>

            {[
              {
                step: '01',
                title: 'Start Talking',
                description:
                  'Click the button and describe your symptoms or health concerns in your own words.',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                step: '02',
                title: 'Get Guidance',
                description:
                  'Our AI analyzes your symptoms and provides evidence-based health guidance and recommendations.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                step: '03',
                title: 'Take Action',
                description:
                  'Schedule appointments, get care instructions, or receive peace of mind—all in minutes.',
                gradient: 'from-orange-500 to-red-500',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div
                  className={`h-20 w-20 rounded-full bg-gradient-to-br ${item.gradient} relative z-10 mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white shadow-lg`}
                >
                  {item.step}
                </div>
                <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-center leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section
        id="security"
        className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Enterprise-Grade Security</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Your Privacy is Our Top Priority
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-gray-300">
                {`We use bank-level encryption and comply with all healthcare regulations to keep your information safe and secure.`}
              </p>
              <div className="space-y-4">
                {[
                  'HIPAA compliant healthcare data protection',
                  'End-to-end encrypted conversations',
                  'No data sharing with third parties',
                  'Regular security audits and updates',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-12">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
                <Shield className="relative z-10 mx-auto h-32 w-32 text-white/20" />
                <div className="relative z-10 mt-6 text-center">
                  <div className="mb-2 text-5xl font-bold">256-bit</div>
                  <div className="text-xl text-white/80">Encryption Standard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 px-6 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 h-72 w-72 animate-pulse rounded-full bg-white/10 blur-3xl"></div>
          <div
            className="absolute right-10 bottom-10 h-96 w-96 animate-pulse rounded-full bg-white/10 blur-3xl"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="mb-10 text-xl leading-relaxed text-white/90">
            Join thousands who trust MediVoice AI for their health guidance
          </p>
          <button
            onClick={onStartCall}
            className="group hover:shadow-3xl inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-bold text-blue-600 shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Mic className="h-7 w-7" />
            Start Your Free Consultation
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-6 text-sm text-white/70">
            No credit card required • Free forever • HIPAA compliant
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-12 text-gray-400">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-2">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">MediVoice AI</span>
          </div>
          <p className="mb-4">
            {`This AI assistant provides guidance only and does not replace professional medical advice, diagnosis, or treatment.`}
          </p>
          <p className="text-sm">
            © 2025 MediVoice AI. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
}

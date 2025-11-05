import React, { useState } from 'react';
import { Mic, Calendar, Shield, Clock, Menu, X, Sparkles, Heart, Zap, ArrowRight } from 'lucide-react';

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MediVoice AI
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                How It Works
              </a>
              <a href="#security" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Security
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Pricing
              </a>
              <button
                onClick={onStartCall}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Try for Free
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 space-y-3">
              <a href="#features" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                Features
              </a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                How It Works
              </a>
              <a href="#security" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                Security
              </a>
              <a href="#pricing" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                Pricing
              </a>
              <button
                onClick={onStartCall}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold mt-2"
              >
                Try for Free
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Big Banner */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white mb-8 border border-white/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by Advanced AI Technology</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Personal Medical
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                AI Assistant
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Get instant health guidance through natural voice conversations. Schedule appointments, understand symptoms, and take control of your health—24/7.
            </p>

            {/* CTA Buttons - THESE TRIGGER THE CHAT */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={onStartCall}
                className="group cursor-pointer bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Mic className="w-6 h-6" />
                {startButtonText || "Start Talking Now"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                HIPAA Compliant
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Instant Response
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                100% Secure
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-16 relative">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Mic className="w-5 h-5" />
                    </div>
                    <div className="flex-1 bg-gray-700/50 rounded-2xl rounded-tl-none p-4">
                      <p className="text-sm">"I've been having a headache for two days..."</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="bg-purple-600 p-2 rounded-lg">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl rounded-tr-none p-4">
                      <p className="text-sm">I understand. Let me ask you a few questions to better assess your symptoms...</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    AI is listening...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for Better Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful AI technology meets compassionate care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mic className="w-8 h-8" />,
                title: "Voice-First Interface",
                description: "Simply speak naturally. No typing, no forms—just talk like you would to a doctor.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Smart Symptom Analysis",
                description: "AI-powered assessment backed by medical knowledge to understand your health concerns.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Instant Booking",
                description: "Schedule appointments with healthcare providers instantly based on your needs.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "24/7 Availability",
                description: "Healthcare guidance whenever you need it, day or night, no waiting rooms.",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to better health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"></div>

            {[
              {
                step: "01",
                title: "Start Talking",
                description: "Click the button and describe your symptoms or health concerns in your own words.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                step: "02",
                title: "Get Guidance",
                description: "Our AI analyzes your symptoms and provides evidence-based health guidance and recommendations.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Take Action",
                description: "Schedule appointments, get care instructions, or receive peace of mind—all in minutes.",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto shadow-lg relative z-10`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section id="security" className="py-24 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Enterprise-Grade Security</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Privacy is Our Top Priority
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We use bank-level encryption and comply with all healthcare regulations to keep your information safe and secure.
              </p>
              <div className="space-y-4">
                {[
                  "HIPAA compliant healthcare data protection",
                  "End-to-end encrypted conversations",
                  "No data sharing with third parties",
                  "Regular security audits and updates"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
                <Shield className="w-32 h-32 text-white/20 mx-auto relative z-10" />
                <div className="text-center relative z-10 mt-6">
                  <div className="text-5xl font-bold mb-2">256-bit</div>
                  <div className="text-xl text-white/80">Encryption Standard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner - ALSO TRIGGERS CHAT */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join thousands who trust MediVoice AI for their health guidance
          </p>
          <button
            onClick={onStartCall}
            className="group bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            <Mic className="w-7 h-7" />
            Start Your Free Consultation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-white/70 text-sm mt-6">
            No credit card required • Free forever • HIPAA compliant
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">MediVoice AI</span>
          </div>
          <p className="mb-4">
            This AI assistant provides guidance only and does not replace professional medical advice, diagnosis, or treatment.
          </p>
          <p className="text-sm">
            © 2025 MediVoice AI. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
}
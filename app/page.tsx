import React from "react";

export default function FitBuddyLanding() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6 py-16">
        <h1 className="text-4xl md:text-6xl font-bold">FitBuddy</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Your smart, adaptive fitness companion. Train better, eat smarter, and stay motivated with FitBuddy.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 text-lg rounded-xl shadow-xl">
          Get Started
        </button>
      </header>

      <section className="max-w-5xl mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">AI Workout Plans</h2>
          <p className="text-gray-400">Custom workouts that evolve with you — no matter your goal or fitness level.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Meal Planning</h2>
          <p className="text-gray-400">Tailored nutrition based on your goals. Quick, easy, and affordable for students.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Progress Tracking</h2>
          <p className="text-gray-400">Visualize gains and stay on track with graphs, achievements, and smart insights.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center py-20">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>
        <p className="text-gray-400 mb-8">Start free. Upgrade anytime.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold">Free Plan</h3>
            <p className="my-4 text-gray-400">Access 3 weekly workouts, limited features, and join public challenges.</p>
            <p className="font-bold text-2xl">€0</p>
          </div>
          <div className="border border-green-500 rounded-xl p-6 bg-green-500 text-black">
            <h3 className="text-xl font-semibold">Premium Plan</h3>
            <p className="my-4">Unlimited workouts, meal planning, progress tracker, and more.</p>
            <p className="font-bold text-2xl">€9.99/mo</p>
          </div>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto text-center py-10 text-gray-500">
        © 2025 FitBuddy. All rights reserved.
      </footer>
    </div>
  );
}

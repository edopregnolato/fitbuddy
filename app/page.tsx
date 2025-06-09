export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to FitBuddy</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Workout Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <img src="/images/workout.jpg" alt="Workout" className="rounded-xl mb-4 w-full h-48 object-cover" />
          <h2 className="text-2xl font-semibold mb-2">Workout Programs</h2>
          <p>Custom routines, strength & cardio plans for all fitness levels.</p>
        </div>

        {/* Nutrition Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <img src="/images/nutrition.jpg" alt="Nutrition" className="rounded-xl mb-4 w-full h-48 object-cover" />
          <h2 className="text-2xl font-semibold mb-2">Nutrition Plans</h2>
          <p>Meal tracking, calorie calculators, and healthy recipes.</p>
        </div>

        {/* Progress Tracking */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <img src="/images/progress.jpg" alt="Progress" className="rounded-xl mb-4 w-full h-48 object-cover" />
          <h2 className="text-2xl font-semibold mb-2">Progress Tracker</h2>
          <p>Monitor your goals, weight, and daily improvements.</p>
        </div>
      </div>
    </main>
  );
}

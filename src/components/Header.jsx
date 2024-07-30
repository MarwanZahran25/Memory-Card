export default function Header({ currentScore, bestScore }) {
  return (
    <header className="bg-green-700 shadow-lg flex items-center justify-around text-white font-semibold py-4">
      <div>Memory Card Game</div>
      <div className="flex gap-4">
        <div>Current Score {currentScore}</div>
        <div>Best Score {bestScore}</div>
      </div>
    </header>
  );
}

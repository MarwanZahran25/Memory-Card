// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Card from "./components/Card";
import Game from "./components/Game";

function App() {
  return (
    <div className="min-h-screen bg-green-300 flex flex-col items-center justify-center">
      <Game />
    </div>
  );
}

export default App;

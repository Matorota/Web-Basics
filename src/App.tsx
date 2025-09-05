import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-8">
      <div className="flex space-x-8 mb-12">
        <a href="https://vite.dev" target="_blank" className="group">
          <img
            src={viteLogo}
            className="h-24 w-24 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 drop-shadow-lg"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" className="group">
          <img
            src={reactLogo}
            className="h-24 w-24 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 drop-shadow-lg animate-spin-slow"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-6xl font-bold text-white mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Vite + React
      </h1>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 max-w-md w-full text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6 w-full"
        >
          count is {count}
        </button>
        <p className="text-gray-300 text-sm">
          Edit{" "}
          <code className="bg-gray-800 text-purple-400 px-2 py-1 rounded">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>

      <p className="text-gray-400 mt-8 text-center max-w-md">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

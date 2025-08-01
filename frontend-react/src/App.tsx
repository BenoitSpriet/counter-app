import { useEffect, useState } from "react";
import CounterCard from "./components/CounterCard";
import fetchBackendUrl from "./services/config";
import {
  setBaseUrl,
  getCounters,
  createCounter,
  incrementCounter,
  decrementCounter,
  deleteCounter,
} from "./services/api";

type Counter = {
  id: number;
  name: string;
  value: number;
};

function App() {
  const [counters, setCounters] = useState<Counter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const url = await fetchBackendUrl();
        setBaseUrl(url);
        const data = await getCounters();
        setCounters(data);
      } catch (err) {
        console.error("Erreur d'initialisation", err);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  const refresh = async () => {
    const data = await getCounters();
    setCounters(data);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🧮 Compteurs</h1>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <>
          {counters.map((c) => (
            <CounterCard
              key={c.id}
              id={c.id}
              name={c.name}
              value={c.value}
              onIncrement={async () => {
                await incrementCounter(c.id);
                refresh();
              }}
              onDecrement={async () => {
                await decrementCounter(c.id);
                refresh();
              }}
              onDelete={async () => {
                await deleteCounter(c.id);
                refresh();
              }}
            />
          ))}
          <button
            className="mt-4 p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={async () => {
              await createCounter("Nouveau compteur");
              refresh();
            }}
          >
            ➕ Ajouter un compteur
          </button>
        </>
      )}
    </div>
  );
}

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

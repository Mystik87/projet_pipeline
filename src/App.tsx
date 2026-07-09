import { useState } from 'react'
import './App.css'
import { appConfig } from './config'

function App() {
  const [count, setCount] = useState(0)

  const envDetails = [
    { label: 'Application name', value: appConfig.appName },
    { label: 'API base URL', value: appConfig.apiUrl },
    { label: 'Feature enabled', value: appConfig.featureEnabled ? 'Yes' : 'No' },
    { label: 'Runtime mode', value: appConfig.runtimeMode },
    { label: 'Environment', value: appConfig.isDevelopment ? 'development' : appConfig.isProduction ? 'production' : 'unknown' },
  ]

  return (
    <main className="app-shell">
      <section id="center">
        <div className="hero">
          <h1>{appConfig.appName}</h1>
          <p>Ce projet React utilise Vite et des variables d'environnement pour se configurer.</p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Cliquez-moi : {count}
        </button>

        <div className="env-grid">
          {envDetails.map((item) => (
            <article key={item.label} className="env-card">
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="notes">
        <h2>Utilisation</h2>
        <p>Modifiez les variables dans <code>.env.development</code> et <code>.env.production</code>, puis relancez le serveur Vite.</p>
        <ul>
          <li>npm install</li>
          <li>npm run dev</li>
          <li>npm run build</li>
        </ul>
      </section>
    </main>
  )
}

export default App

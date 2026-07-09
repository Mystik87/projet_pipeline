# React + TypeScript + Vite

Ce projet est une application React complète créée avec Vite et configurée pour utiliser des variables d'environnement.

## Structure

- `src/` : code React principal
- `src/config.ts` : lecture des variables d'environnement Vite
- `.env.development` : valeurs de développement
- `.env.production` : valeurs de production
- `.env.local` : configuration locale ignorée par Git

## Installation

```bash
npm install
```

## Exécution locale

```bash
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

## Variables d'environnement

Le projet utilise des variables d'environnement Vite préfixées par `VITE_` :

- `VITE_APP_NAME`
- `VITE_API_URL`
- `VITE_FEATURE_FLAG`

Modifiez `./.env.development` ou `./.env.production` selon l'environnement.

## Git

Le projet est initialisé localement. Pour le pousser vers GitHub :

```bash
git remote add origin <url-depot-github>
git branch -M main
git push -u origin main
```

Si vous voulez, je peux aussi vous aider à configurer le remote GitHub une fois que vous avez créé le dépôt sur `github.com/Mystik87`.

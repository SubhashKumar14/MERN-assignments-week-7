
<<<<<<< HEAD
=======
## Apps

This repo now contains **three independent Vite + React websites** (so they don’t share the same `App.jsx`):

- `apps/country-explorer`
- `apps/products`
- `apps/task-manager`
# MERN Assignments — Week 7

## Apps

This repo contains **three independent Vite + React websites** under `apps/`:

- `apps/country-explorer`
- `apps/products`
- `apps/task-manager`

Each app has its **own** `package.json`, `index.html`, and `src/App.jsx`, so you can deploy them as **3 separate Vercel projects**.

## Run locally

From the repo root:

- Country Explorer: `npm --prefix apps/country-explorer install` then `npm --prefix apps/country-explorer run dev`
- Products Page: `npm --prefix apps/products install` then `npm --prefix apps/products run dev`
- Task Manager: `npm --prefix apps/task-manager install` then `npm --prefix apps/task-manager run dev`

## Deploy to Vercel

Create **3 Vercel projects** from the same GitHub repo and set:

- **Root Directory**: pick one app folder (e.g. `apps/products`)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`


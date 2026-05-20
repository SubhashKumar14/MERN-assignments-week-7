# MERN Assignments — Week 7

A single **Vite + React** website that renders **3 mini-app sections** on one page:

1. **Products Page**
2. **Task Manager**
3. **Country Explorer**

## Features

### Products Page

- Responsive product grid
- Reusable `Product` card component
- Demonstrates rendering lists with `map()` and passing data via props

### Task Manager

- Add tasks via a form
- Shows task list and total task count
- Uses `react-hook-form` for form handling
- Demonstrates state lifting (parent owns tasks, children update/display)

### Country Explorer

- Fetches country data from the REST Countries API on initial load
- Search by country name
- Loading + error states
- Demonstrates conditional rendering and derived state (filtered list)

## Concepts / Libraries Used

- **React** functional components
- **React Hooks**: `useState`, `useEffect`
- **Props** and component composition
- **Conditional rendering**
- **List rendering** with stable keys
- **Forms** with `react-hook-form`
- **Styling** with Tailwind CSS
- **Tooling**: Vite, ESLint

## Project Structure

- `src/components/Products-Page`
- `src/components/TaskManager-App`
- `src/components/Country-Explorer-Page`

## Run Locally

From the repo root:

1. `npm install`
2. `npm run dev`

## Build

- `npm run build`
- `npm run preview`

## Deploy (Vercel)

Use the **repo root** as the Vercel project root.

- **Build Command**: `npm run build`
- **Output Directory**: `dist`

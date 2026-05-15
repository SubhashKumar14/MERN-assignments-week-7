import './App.css'
import Products from './components/Products-Page/Products.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-amber-400 shadow-lg sticky top-0 z-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white py-5 tracking-tight">
          🛍️ Products Page
        </h1>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-gray-500 mb-8 text-lg">Browse our top tech picks</p>
        <Products />
      </main>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1605478377630-65926f9f3b6e?auto=format&fit=crop&w=800&q=80",
    alt: "Fresh salad",
  },
  {
    src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
    alt: "Organic vegetables",
  },
  {
    src: "https://images.unsplash.com/photo-1592928303673-72a7b0f1c6e1?auto=format&fit=crop&w=800&q=80",
    alt: "Farmer's field",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    alt: "Healthy grain bowl",
  },
]

const Home = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <section
        className="bg-cover bg-center py-32 px-4 text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="max-w-4xl mx-auto text-center bg-black/50 p-6 rounded">
          <h1
            className={`text-5xl font-bold mb-4 transition-opacity duration-1000 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Welcome to GreenFork 🌿
          </h1>
          <p
            className={`text-lg mb-8 transition-opacity duration-1000 delay-200 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Fresh, seasonal, healthy food made with love.
          </p>
          <a
            href="/menu"
            className={`inline-block bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition transform duration-500 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            View Menu
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6">
            At GreenFork, we believe food should be as nourishing as it is delicious. Everything we serve is made from
            fresh, seasonal ingredients — many sourced directly from local farms.
          </p>
          <div className="inline-block bg-green-100 px-4 py-2 rounded">
            <strong className="text-green-800">Featured Dish:</strong> Grilled Chicken Bowl with quinoa and tahini.
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 text-center mb-10">Gallery</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded shadow hover:shadow-md transition">
                <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
                <p className="p-2 text-sm text-gray-700 text-center">{img.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
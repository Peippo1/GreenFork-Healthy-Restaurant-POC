

const Home = () => {
  return (
    <section className="bg-green-50 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-green-700 mb-4">
          Welcome to GreenFork 🌿
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Fresh, seasonal, healthy food made with love. Explore our menu, find your favourites, and eat well.
        </p>
        <a
          href="/menu"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
        >
          View Menu
        </a>
      </div>
    </section>
  )
}

export default Home
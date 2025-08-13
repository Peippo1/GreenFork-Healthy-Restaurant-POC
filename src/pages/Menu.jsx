const dishes = [
  {
    name: "Grilled Chicken Bowl",
    description: "With quinoa, roasted vegetables, and tahini dressing.",
    price: "£9.50",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Supergreen Salad",
    description: "Crisp baby spinach, creamy avocado, shelled edamame, juicy cucumber ribbons, and microgreens, all served over a bed of mixed greens and dressed in a zesty lime-herb vinaigrette",
    price: "£8.00",
    image: "https://images.unsplash.com/photo-1570197571499-166b36435e9f?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Protein Power Bowl",
    description: "Grilled chicken, chickpeas, avocado, tomato, and spinach over quinoa.",
    price: "£7.50",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Roasted Veggie Flatbread",
    description: "Flatbread with roasted squash, red onion, and feta.",
    price: "£8.50",
    image: "https://images.unsplash.com/photo-1611599539392-0198d33c4c1e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

const Menu = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-700 text-center mb-10">Our Menu</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {dishes.map((dish, index) => (
            <div key={index} className="bg-green-50 rounded shadow hover:shadow-lg transition overflow-hidden">
              <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800">{dish.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{dish.description}</p>
                <p className="text-green-700 font-bold mt-4">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
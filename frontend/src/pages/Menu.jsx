

const dishes = [
  { name: 'Grilled Chicken Bowl', description: 'With quinoa, roasted veg, and tahini dressing.', price: '£9.50' },
  { name: 'Supergreen Salad', description: 'Spinach, avocado, edamame, green dressing.', price: '£8.00' },
  { name: 'Falafel Wrap', description: 'Falafel, hummus, pickles in a warm wrap.', price: '£7.50' },
]

const Menu = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-700 text-center mb-10">Our Menu</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {dishes.map((dish, index) => (
            <div key={index} className="border p-6 rounded shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-green-800">{dish.name}</h3>
              <p className="text-gray-600 mt-2">{dish.description}</p>
              <p className="text-green-700 font-bold mt-4">{dish.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
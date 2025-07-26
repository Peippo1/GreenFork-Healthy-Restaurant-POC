import React from 'react';

export default function Menu() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">Our Menu</h1>

      <div className="space-y-12">
        {/* Breakfast Section */}
        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Breakfast</h2>
          <ul className="space-y-2">
            <li className="flex justify-between border-b py-2">
              <span>Avocado Toast</span>
              <span>£5.95</span>
            </li>
            <li className="flex justify-between border-b py-2">
              <span>Greek Yogurt Parfait</span>
              <span>£4.50</span>
            </li>
          </ul>
        </section>

        {/* Lunch Section */}
        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Lunch</h2>
          <ul className="space-y-2">
            <li className="flex justify-between border-b py-2">
              <span>Grilled Veggie Wrap</span>
              <span>£6.95</span>
            </li>
            <li className="flex justify-between border-b py-2">
              <span>Chicken Grain Bowl</span>
              <span>£8.50</span>
            </li>
          </ul>
        </section>

        {/* Salad/Bowl Section */}
        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Bowls & Salads</h2>
          <ul className="space-y-2">
            <li className="flex justify-between border-b py-2">
              <span>Green Super Bowl</span>
              <span>£9.00</span>
            </li>
            <li className="flex justify-between border-b py-2">
              <span>Kale Caesar Salad</span>
              <span>£7.75</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

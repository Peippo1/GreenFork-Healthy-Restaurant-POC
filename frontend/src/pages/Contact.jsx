

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Future: Send anonymised `formData.message` to backend with SQL insert
    console.log('Message submitted:', formData.message)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 shadow rounded">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full border px-4 py-2 rounded"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border px-4 py-2 rounded"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
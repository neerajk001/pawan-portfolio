"use client"

import React from 'react'

function ContactForm() {
  return (
    <div id='contact' className="min-h-screen  flex items-center justify-center px-4 py-10">
      <form
        action="https://formsubmit.co/shopifypawan@gmail.com"
        method="POST"
        className="bg-white p-8 rounded-xl shadow-md max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        {/* FormSubmit Hidden Inputs */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://www.pawangiri.design/thank-you" />

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name*</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        {/* Phone Number */}
<div className="mb-4">
  <label className="block text-sm font-medium mb-1">Phone Number*</label>
  <input
    type="tel"
    name="phone"
    placeholder="Your phone number"
    required
    pattern="[0-9]{10}"
    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>


        {/* Service */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Which service are you interested in?*
          </label>
          <select
            name="service"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a service</option>
            <option>Website Design</option>
            <option>Website Redesign</option>
            <option>Website Maintenance</option>
            <option>Website Audit</option>
          </select>
        </div>

        {/* Budget */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">What is your budget?*</label>
          <select
            name="budget"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select your budget</option>
            
            <option>₹30,000 – ₹50,000</option>
            <option>₹50,000 – ₹1,00,000</option>
            <option>Above ₹1,00,000</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Tell us a bit more about your project*
          </label>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition duration-300"
        >
          Submit
        </button>

        {/* Note */}
        <p className="text-xs text-center text-gray-500 mt-4">
          Note: I only take on projects with a budget above ₹30,000.
        </p>
      </form>
    </div>
  )
}

export default ContactForm

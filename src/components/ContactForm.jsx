"use client"

import React from "react"

function ContactForm() {
  return (
    <div id="contact" className="min-h-screen flex items-center justify-center px-4 py-10 ">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white shadow-xl rounded-xl overflow-hidden">

        {/* LEFT PANEL */}
        <div className="lg:w-1/2 p-8 bg-white flex flex-col ">
          <h2 className="text-3xl font-bold text-black mb-4">Get in touch</h2>
          <p className="text-gray-600 mb-6">
            If you’re a business looking for a website from concept, strategy to design and launch, get in touch.
          </p>
          <div className="text-gray-800 space-y-2">
            <p className="flex items-center gap-2">📧 <a href="mailto:shopifypawan@gmail.com" className="underline">shopifypawan@gmail.com</a></p>
            <p className="flex items-center gap-2">📍 Based in Mumbai, India</p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <form 
          action="https://formsubmit.co/shopifypawan@gmail.com"
          method="POST"
          className="lg:w-1/2 p-8 space-y-4 w-full "
        >
          {/* Hidden Inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://www.pawangiri.design/thank-you" />

          {/* ROW 1: Full Name & Brand Name */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full">
              <label className="text-sm font-medium block mb-1">Full Name*</label>
              <input type="text" name="name" required placeholder="Full Name" className="input " />
            </div>
            <div className="w-full">
              <label className="text-sm font-medium block mb-1">Your Brand Name</label>
              <input type="text" name="brand" placeholder="Your Brand Name" className="input " />
            </div>
          </div>

          {/* ROW 2: Email & Contact */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full">
              <label className="text-sm font-medium block mb-1">Business Email*</label>
              <input type="email" name="email" required placeholder="Business Email" className="input " />
            </div>
            <div className="w-full">
              <label className="text-sm font-medium block mb-1">Your Contact*</label>
              <input type="tel" name="phone" required pattern="[0-9]{10}" placeholder="Your Contact" className="input " />
            </div>
          </div>

          {/* ROW 3: Project Description */}
          <div className="flex flex-col  gap-4">
            <div className="md:w-full">
              <label className="text-sm font-medium block">Tell me about your Project*</label>
            </div>
            <div className="md:w-full">
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Your message..."
                className="input resize-none w-full"
              />
            </div>
          </div>

          {/* ROW 4: Budget */}
          <div className="flex flex-col  gap-4">
            <div className="md:w-full">
              <label className="text-sm font-medium flex ">How much are you looking to invest on this project?(starting rate fo website projects is ₹30,000 or $400 )</label>
            </div>
            <div className="md:w-full">
              <select name="budget" required className="input bg-white w-full">
                <option value="">Select your budget</option>
                <option>₹30,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>Above ₹1,00,000</option>
              </select>
              {/* <p className="text-xs text-gray-500 mt-1">(Starting rate of Website projects is ₹30,000 upto ₹1,00,000)</p> */}
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition duration-300"
          >
            SEND MESSAGE
          </button>

          {/* Chat Note */}
          <p className="text-center text-sm mt-2">
            Or <a
              href="https://wa.me/918149681890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-green-600 underline"
            >
              <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
              Chat Now
            </a>

          </p>
        </form>
      </div>
    </div>
  )
}

export default ContactForm


//918149681890
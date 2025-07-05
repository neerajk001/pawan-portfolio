import React from 'react'

const processSteps = [
  {
    title: '1. Discovery Call',
    description:
      "We understand your brand, goals, and what’s holding your current site back. Fast, focused, no fluff.",
  },
  {
    title: '2. Custom Proposal',
    description:
      'You get a tailored solution — scope, timeline, and pricing. No copy-paste decks. Only what your brand needs.',
  },
  {
    title: '3. Design & Development',
    description:
      'We design for conversion and speed. Built on Shopify. Mobile-first. Brand-aligned. Fast turnaround.',
  },
  {
    title: '4. Launch & Handover',
    description:
      'Final review, launch, and full handover. Includes walkthrough + 7-day post-launch support.',
  },
]

function OurProcess() {
  return (
    <div className="py-12 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
        Our Process
      </h2>

      <div className="grid gap-6 max-w-4xl mx-auto grid-cols-1 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white rounded-lg p-4 shadow-md"
          >
            <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
            <p className="text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurProcess

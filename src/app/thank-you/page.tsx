'use client'
import { useRouter } from 'next/navigation'

export default function ThankYou() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your form has been submitted successfully. <br />
          We&apos;ll get in touch with you soon.
        </p>
        <button
          onClick={() => router.push('/')}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

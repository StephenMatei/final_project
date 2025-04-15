// SignIn.jsx
import { Link } from 'react-router-dom'

const SignIn = () => (
  <div className="container w-screen bg-blue-100 min-w-[calc(275vh-20rem)] min-h-[calc(100vh-0rem)] flex items-center justify-center">
    <div className="w-screen max-w-md bg-white p-8 rounded-2xl shadow-2xl">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.337-8 4v2h16v-2c0-2.663-5.33-4-8-4z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-2 text-blue-700">Welcome Back!</h2>
        <p className="text-gray-500 mb-6 text-center">Sign in to access your account and manage your waste solutions.</p>
        
        <form className="w-full space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <div className="flex items-center border border-blue-300 rounded px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-200">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <input
                type="email"
                name="email"
                autoComplete="email"
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500"
                placeholder="you@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <div className="flex items-center border border-blue-300 rounded px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-200">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.337-8 4v2h16v-2c0-2.663-5.33-4-8-4z" />
              </svg>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500"
                placeholder="Your password"
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow">
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline font-semibold">Sign Up</Link>
        </p>
      </div>
    </div>
  </div>
)

export default SignIn
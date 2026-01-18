import { Lock, Mail, X } from 'lucide-react';
import React, { useState } from 'react'

const Login = ({login, onClose, setOnClose, setLogin, setSignIn, signIn}) => {
    
    const [loading, setLoading] = useState(false);
  
    return (
    <>
    <div>
         <div className="relative w-full max-w-md rounded-2xl bg-white/70 backdrop-blur-lg shadow-2xl p-8">
            {/* Close Button */}
            <button
              onClick={() => {
                setOnClose(!onClose)
                setSignIn(false)
                setLogin(false)
            }}
              className="absolute top-4 right-4 text-indigo-600 hover:text-indigo-800 transition"
            >
              <X size={22} />
            </button>

            {/* Header */}
            <h2 className="mb-6 text-center text-3xl font-bold text-indigo-700">
              Welcome Back
            </h2>

            {/* Form */}
            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-indigo-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">
                  <Mail className="text-indigo-500" size={18} />
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-indigo-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">
                  <Lock className="text-indigo-500" size={18} />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-linear-to-r from-indigo-500 to-blue-500 py-2 font-semibold text-white hover:opacity-90 transition"
              >
                {loading ? "Logging in...." :"Login"}
              </button>
            </form>
            <div className="text-center mt-5">
              Don't have an account?{" "}
              <button onClick={() => {
                  setLogin(false);
                  setSignIn(true);
              }} className="text-indigo-700">SignUp</button>
            </div>
          </div>  
    </div>
    </>
  )
}

export default Login

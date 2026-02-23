import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />

      <div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4371a395-0e42-46ae-be36-5755eebc638b/web/IN-en-20260209-TRIFECTA-perspective_3a6d8659-ddfe-4547-9584-dce64c02c230_medium.jpg"
          alt="backgroungImage"
        />
      </div>

      <form
        className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
      >
        <h1
          className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {
          !isSignInForm && <input
            type="text"
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-500'
          />
        }
        <input
          type="text"
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-500'
        />
        <input
          type="text"
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-500'
        />
        <button
          className='p-4 my-6 bg-red-700 w-full'
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className='py-4 cursor-pointer'
          onClick={toggleSignIn}
        >
          {isSignInForm ? "New to Netflix ? Sign up Now" : "Already a user ? Sign in"}

        </p>
      </form>
    </div>
  )
}

export default Login

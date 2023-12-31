'use client'

import "../../../../styles/globals.css"
import { useState } from "react";

import {useRouter} from 'next/navigation';
import Cookies from 'js-cookie'; 

const PhoneVerify  = () => {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleCodeChange = (event) => {
     setCode(event.target.value);
  };

  const handleSubmit = (event) => {
       event.preventDefault()
       const url = '/api/auth/verify';
       const data = { code : code,
       token : Cookies.get('token')
   }
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response)
    .then(data => {
      debugger
      if (data.status === 200) {
        router.push('/')
      } 
    })

  };


    return (
        <>
  <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <img className="mx-auto h-12 w-auto" src="/logo.svg" alt="Workflow" /> */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Enter Verification Code</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We have sent a verification code to your email address. Please enter the code below to continue.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                Verification code
              </label>
              <div className="mt-1">
                <input
                  id="code"
                  name="code"
                  type="text"
                  autoComplete="off"
                  required
                  value={code}
                  onChange={handleCodeChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Verify Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </>
    )
}

// PhoneVerify.getLayout = page => <GuestLayout>{page}</GuestLayout>


export default PhoneVerify
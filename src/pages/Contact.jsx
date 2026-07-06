import React from 'react'

function Contact() {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <form className='flex flex-col border border-gray-300 p-6 rounded-sm w-full max-w-md md:mt-16' >
        <h1 className='text-2xl font-bold text-green-500 text-center'>Contact Us</h1>
        <label>Name : </label>
        <input type="text" placeholder='Your Name' required />

        <label>Email : </label>
        <input type="email" placeholder='Your Email' required/>

        <label>Subject : </label>
        <input type="text" placeholder='Subject' required />

        <label>Message : </label>
        <textarea placeholder='Your Message' required></textarea>

        <button>Send Message</button>
      </form>
    </div>
  )
}

export default Contact  
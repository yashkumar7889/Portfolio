import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/3674a8d0-42e5-4e8e-9956-3c86fbe6c6e0' className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - yashkumarsinghpatwa7889@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder="Name" name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name='email' />
            <textarea className='p-2 bg-[#ccd6f6]' name='message' rows="10" placeholder='Message'></textarea>
            <button type='submit' className='my-4 px-4 py-3 mx-auto text-white border-2 hover:bg-pink-600 hover:border-pink-600 items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen bg-[#f5f5f5] flex justify-center items-center'>
      <div className='w-[35%] h-[50%] bg-white shadow-lg rounded-md'>
        <h1 className='text-center p-6 pb-3 font-bold text-xl text-gray-900'>LOGIN</h1>
        <div className='flex flex-col gap-5 m-10 mb-6 fill-transparent text-black'>
        <input type="text" placeholder='Username' className='p-3 pb-1 outline-none border-b-2 border-blue-200 fill-none bg-white placeholder:text-gray-700' />
        <input type="password" placeholder='Password' className='p-3 pb-1 outline-none border-b-2 border-blue-200 fill-none bg-white placeholder:text-gray-700' />
        </div>
        <div className='w-full flex items-center justify-center '>
        <button type='submit' className='bg-sky-500 pl-4 pr-4 pt-1 pb-1  text-lg text-white rounded-xl hover:bg-cyan-600 hover:shadow-lg'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default page
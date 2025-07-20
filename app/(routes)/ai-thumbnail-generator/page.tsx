import { ArrowUp, ImagePlus, User } from 'lucide-react'
import React from 'react'

function AiThumbnailGenerator() {
  return (
    <div>
        <div className='px-10 md:px:20 lg:px-40'>
       <div className='flex items-center justify-center flex-col mt-20 gap-2'>
       <h1 className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-400 to-red-200">
  AI Thumbnail Generator
</h1>

        <p className='text-gray-400 text-center'>Turn any video into a click magnet with thumbnails that grab attention and drive views.Our AI YouTube thumbnail maker creates professional designs instatly-no desiging skills needed.</p>
      </div>

      <div className='flex  gap-5 items-center p-3 border rounded-xl mt-10 bg-secondary'>
        <textarea placeholder='Enter your youtube video title or description' className='w-full outline-none bg-secondary'/>
        <div className ='p-3 bg-gradient-to-t from-red-500 to-orange-500 rounded-full'>
            <ArrowUp/>
        </div>
      </div>
      <div className='flex gap-5 mt-10'>
        <div className='p-4 w-full border rounded-xl bg-secondary flex gap-2 items-center justify-center hover:scale-105 transition-all'>
            <ImagePlus/>
            <h2>Referance Image</h2>

        </div>
        <div className='p-4 w-full border rounded-xl bg-secondary flex gap-2 items-center justify-center hover:scale-105 transition-all'>
            <User/>
            <h2>Referance Image</h2>

        </div>
      </div>

      </div>
    </div>
  )
}

export default AiThumbnailGenerator

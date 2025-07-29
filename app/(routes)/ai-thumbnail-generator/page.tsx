"use client"
import axios from 'axios';
import { ArrowUp, ImagePlus, User, X } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'

function AiThumbnailGenerator() {
const [userInput ,setUserInpute] = useState<string>('');
const [refernanceImage, setRefernanceImage] = useState<File | null>(null);
const [faceImage, setFaceImage] = useState<File | null>(null);
const [refernanceImagePreview, setRefernanceImagePreview] = useState<string | undefined>();
const [faceImagePreview, setfaceImagePreview] = useState<string | undefined>();


// this is function which is used to handle whenever there is a change in the file input fields...
 const OnHandleFileChange=(field:string,e:any)=>{
    const selectedFile = e.target.files?.[0];
  if (!selectedFile) return;

  if(field=='refernanceImage'){
    setRefernanceImage(selectedFile);
    setRefernanceImagePreview(URL.createObjectURL(selectedFile));
  }
  else{
      setFaceImage(selectedFile);
      setfaceImagePreview(URL.createObjectURL(selectedFile));
  }
 }
 const OnSubmit=async()=>{
  const formData= new FormData();
  userInput&& formData.append('userInput',userInput);
  refernanceImage&& formData.append('refImage',refernanceImage);
  faceImage&& formData.append('faceImage',faceImage);

  // Post API call

  const result=await axios.post('/api/generate-thumbnail',formData)
  console.log(result.data);

 }

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
        <textarea placeholder='Enter your youtube video title or description' className='w-full outline-none bg-secondary'
        onChange={(e)=>setUserInpute(e.target.value)}/>
        <div className ='p-3 bg-gradient-to-t from-red-500 to-orange-500 rounded-full cursor-pointer'
        onClick={OnSubmit}>
            <ArrowUp/>
        </div>
      </div>
      <div className='flex gap-5 mt-10'>
        <label htmlFor='refernanceImageUpload' className='w-full'>
        {!refernanceImagePreview?<div className='p-4 w-full border rounded-xl bg-secondary flex gap-2 items-center justify-center hover:scale-105 transition-all'>
            <ImagePlus/>
            <h2>Referance Image</h2>

        </div>:
        <div className='relative'>
          <X className='absolute' onClick={()=> setRefernanceImagePreview(undefined)}/>
        <Image src={refernanceImagePreview} alt='refernance image' width={100} height={100} className='w-70 w-70 object-cover rounded'/>
        </div>}
        </label>
        <input type='file' id='refernanceImageUpload' className='hidden'
        onChange={(e)=>OnHandleFileChange('refernanceImage',e)}/>
        <label htmlFor='faceImageUpload' className='w-full'>
        {!faceImagePreview?<div className='p-4 w-full border rounded-xl bg-secondary flex gap-2 items-center justify-center hover:scale-105 transition-all'>
            <User/>
            <h2>Include Face</h2>

        </div>:
        <div className='relative'>
          <X className='absolute' onClick={()=> setfaceImagePreview(undefined)}/>
        <Image src={faceImagePreview} alt='refernance image' width={100} height={100} className='w-70 w-70 object-cover rounded'/>
        </div>}
        </label>
        <input type='file' id='faceImageUpload' className='hidden' 
        onChange={(e)=>OnHandleFileChange('faceImage',e)}/>
      </div>

      </div>
    </div>
  )
}

export default AiThumbnailGenerator

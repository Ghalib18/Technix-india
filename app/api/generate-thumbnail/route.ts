import { currentUser } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function Post (req:NextRequest){
    const formData =await req.formData();
    const refImage=formData.get('refImage') as File | null;
    const faceImage=formData.get('userInput') as File | null;
    const userInput=formData.get('userInput') as File | null;
    const user= await currentUser();

    const inputData={
        userInput:userInput,
        refImage:refImage?await getFileBufferData(refImage):null,
        faceImage:faceImage? await getFileBufferData(faceImage):null,
        userEmail:user?.primaryEmailAddress?.emailAddress

    }
}

const getFileBufferData=async(file:File)=>{
    const bytes=await file.arrayBuffer();
    const buffer=Buffer.from(bytes);

    return {
        name:file.name,
        type:file.type,
        size:file.size,
        buffer:buffer.toString('base64')
    }
}
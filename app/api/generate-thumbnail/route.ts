// import { inngest } from "@/inngest/client";
// import { currentUser } from "@clerk/nextjs/server";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST (req:NextRequest){
//     const formData =await req.formData();
//     const refImage=formData.get('refImage') as File | null;
//     const faceImage=formData.get('userInput') as File | null;
//     const userInput=formData.get('userInput') as File | null;
//     const user= await currentUser();

//     const inputData={
//         userInput:userInput,
//         refImage:refImage?await getFileBufferData(refImage):null,
//         faceImage:faceImage? await getFileBufferData(faceImage):null,
//         userEmail:user?.primaryEmailAddress?.emailAddress

//     }
    
//     const result= await inngest.send({
//         name:"ai/generate-thumbnail",
//         data:inputData
//     });
//     return NextResponse.json({result});
// }

// // this is used to get the information of the image so that we can display it or store in some where that can be used later...

// const getFileBufferData=async(file:File)=>{
//     const bytes=await file.arrayBuffer();
//     const buffer=Buffer.from(bytes);

//     return {
//         name:file.name,
//         type:file.type,
//         size:file.size,
//         buffer:buffer.toString('base64')
//     }
// }

// app/api/generate-thumbnail/route.ts
import fs from "fs";
import { inngest } from "@/inngest/client";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json({ error: `Method ${req.method} not allowed` }, { status: 405 });
    }

    const formData = await req.formData();
    // IMPORTANT: ensure your frontend uses these exact field names
    const refImage = formData.get("refImage");
    const faceImage = formData.get("faceImage");
    const userInput = formData.get("userInput"); // string or file depending on your form

    console.log("keys:", Array.from(formData.keys()));

    const user = await currentUser();

    const inputData = {
      userInput: typeof userInput === "string" ? userInput : null,
      refImage: refImage ? await getFileBufferData(refImage) : null,
      faceImage: faceImage ? await getFileBufferData(faceImage) : null,
      userEmail: user?.primaryEmailAddress?.emailAddress ?? null,
    };

    const result = await inngest.send({
      name: "ai/generate-thumbnail",
      data: inputData,
    });

    return NextResponse.json({ result }, { status: 200 });
  } catch (err) {
    console.error("generate-thumbnail error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

/** Accepts many file shapes:
 * - browser/web File (has arrayBuffer())
 * - web ReadableStream via file.stream().getReader()
 * - Node Readable stream (async iterator)
 * - formidable-like file with .filepath or .path
 * - Buffer or { buffer: ... }
 */
async function getFileBufferData(file: any) {
  // normalize filename/type/size fields
  const name = file?.name ?? file?.filename ?? file?.originalFilename ?? "file";
  const type = file?.type ?? file?.mimetype ?? null;
  let size = file?.size ?? null;
  let buffer: Buffer;

  // 1) If it has arrayBuffer() (web File)
  if (file && typeof file.arrayBuffer === "function") {
    const ab = await file.arrayBuffer();
    buffer = Buffer.from(ab);
    size = size ?? buffer.length;
  }
  // 2) If it has stream()
  else if (file && typeof file.stream === "function") {
    const stream = file.stream();
    // Node Readable (async iterator)
    if (stream && typeof stream[Symbol.asyncIterator] === "function") {
      const chunks: Buffer[] = [];
      for await (const chunk of stream) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      }
      buffer = Buffer.concat(chunks);
      size = size ?? buffer.length;
    }
    // Web ReadableStream (getReader)
    else if (stream && typeof stream.getReader === "function") {
      const reader = stream.getReader();
      const chunks: Buffer[] = [];
      while (true) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { done, value } = await reader.read() as any;
        if (done) break;
        chunks.push(Buffer.from(value));
      }
      buffer = Buffer.concat(chunks);
      size = size ?? buffer.length;
    } else {
      throw new Error("Unsupported stream object on file");
    }
  }
  // 3) If it's already a Buffer or has .buffer
  else if (Buffer.isBuffer(file)) {
    buffer = file;
    size = size ?? buffer.length;
  } else if (file && file.buffer) {
    buffer = Buffer.isBuffer(file.buffer) ? file.buffer : Buffer.from(file.buffer);
    size = size ?? buffer.length;
  }
  // 4) formidable / multer style with filepath/path
  else if (file && (file.filepath || file.path)) {
    const p = file.filepath ?? file.path;
    buffer = await fs.promises.readFile(p);
    size = size ?? buffer.length;
  } else {
    throw new Error("Unsupported file shape — cannot extract bytes");
  }

  return {
    name,
    type,
    size,
    buffer: buffer.toString("base64"),
  };
}

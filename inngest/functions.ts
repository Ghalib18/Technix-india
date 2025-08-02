import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

export const GenerateAiThumbnail=inngest.createFunction(
  { id:'ai/generate-thumbnail'},
  {event : 'ai/generate-thumbnail'},
  async ({event,step})=>{
    const {userEmail ,refImage ,faceImage ,userInput}=await event.data;
    // Upload image to cloud/Imagekit 

    // Generate AI prompt from AI model 

    // Generate AI image

    //  Save Image to cloud 

    // Save Record to the database to the datebase 
    return userEmail;
  }
)
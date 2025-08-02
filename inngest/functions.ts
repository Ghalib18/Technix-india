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
    // Upload image to cloud/Imagekit this is the 1 step

    // Generate AI prompt from AI model this is second step

    // Generate AI image this is third step

    //  Save Image to cloud this is four step

    // Save Record to the database to the datebase this is fifthe step
    return userEmail;
  }
)
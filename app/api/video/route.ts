import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from 'replicate';

const replicate = new Replicate();

    auth: process.env.REPLICATE_API_TOKEN!


export async function POST(
    req: Request
)   {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

      
        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }

const response = await replicate.run(
    "lucataco/playground-v2:6c309de0b6ef3a66502204ff2ffab0c0a9757b30498ef99b9886b79b0046f3ca", 
    { 
        input: {
            prompt: prompt
        }
    }
);

        return NextResponse.json(response);
    }   catch (error) {
        console.log("[VIDEO_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
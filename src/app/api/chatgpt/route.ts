import { NextRequest, NextResponse } from "next/server";
import OpenAI from 'openai'
import 'dotenv/config'
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const chatgpt = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const messages:ChatCompletionMessageParam[] = [];

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url)
    const prompt = searchParams.get('prompt') as string

//my character's name is Madeline she is a red headed woman who is full of self doubt 
//I want the story to be about madeline climbing mt Celeste
    messages.push({role:'user', content:prompt})
    
    const response = await chatgpt.chat.completions.create({
        model:'gpt-4o',
        messages: messages,
        response_format:{"type":"json_object"}
    })
    const respMessage = response.choices[0].message
    messages.push(respMessage)
    
    const obj = JSON.parse(respMessage.content as string)
    return NextResponse.json(obj,{status:200})
}
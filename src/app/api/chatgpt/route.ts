import { NextRequest } from "next/server";
import OpenAI from 'openai'

const chatgpt = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})
  
export async function GET(req: NextRequest) {

}
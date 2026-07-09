import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';
import { getRepos } from '@/lib/github';
import { generateSystemPrompt } from '@/lib/ai-agent-context';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const repos = await getRepos();
    const systemPrompt = generateSystemPrompt(repos);

    const google = createGoogleGenerativeAI({
      apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || ''
    });

    const result = await streamText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error in chat route:", error);
    return new Response(JSON.stringify({ error: "Failed to process chat request." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

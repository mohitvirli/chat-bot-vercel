import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';

import { streamText, convertToCoreMessages } from 'ai';
import { MessageType, ModelType } from '@/app/models';

/**
 * /chat POST request
 *
 * @param req
 * @returns
 */
export async function POST(req: Request) {
  const { messages, model }: {messages: MessageType[], model: ModelType} = await req.json();

  // Map according to the models available.
  const modelMap: { [k in ModelType]: any }  = {
    OpenAI: openai('gpt-4o'),
    Claude: anthropic('claude-3-haiku-20240307'),
  }
  const result = await streamText({
    model: modelMap[model],
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
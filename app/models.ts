/**
 * The Available Models to switch from.
 */
export const AvailableModels = ['OpenAI', 'Claude'] as const;

/**
 * The type of models available.
 */
export type ModelType = typeof AvailableModels[number];

/**
 * Vercel AI doesn't provide us with the types, so had to manually add them.
 */
export interface MessageType {
  id: string;
  createdAt?: Date;
  content: string;
  role: 'system' | 'user' | 'assistant' | 'function' | 'data' | 'tool';
  name?: string;
}
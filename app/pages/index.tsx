import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { useChat } from 'ai/react';
import { useEffect } from 'react';
import ScrollToBottom, { useScrollToBottom } from 'react-scroll-to-bottom';
import Message from '../components/message';
import { ModelType } from '../models';

export default function Chat({ model }: { model: ModelType }) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    body: { model }
  });

  /**
   * Auto scrolls when messages are updated.
   */
  const scrollToBottom = useScrollToBottom();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ScrollToBottom className='h-screen'>
      <div className="flex flex-col w-full max-w-screen-sm py-24 mx-auto stretch">
        {messages.map((m, index) => (
          <Message key={m.id} message={m} isLoading={index === messages.length - 1 && isLoading }>
          </Message>
        ))}

        <form onSubmit={handleSubmit} className='fixed bottom-0 w-full max-w-screen-sm'>
          <input
            className="p-3.5 w-full mb-8 rounded-3xl shadow-xl text-white bg-neutral-800 border-transparent focus:outline-none focus:ring-0"
            value={input}
            onChange={e => handleInputChange(e)}
            placeholder="Say something..."
          />
          <button type="submit" className="absolute right-0 mt-2 text-white bg-neutral-100 hover:bg-neutral-400 focus:outline-non rounded-full p-2 text-center inline-flex items-center me-2">
            <ArrowUpIcon aria-hidden="true" className="h-5 w-5 text-black" />
          </button>
        </form>
      </div>
    </ScrollToBottom>
  );
}
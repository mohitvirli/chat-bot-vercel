import { MessageType } from "../models";
import Spinner from "./spinner";

export default function Message({ message, isLoading }: { message: MessageType, isLoading: boolean}) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && (<div className="rounded-full shrink-0 w-8 h-8 bg-gray-400 mr-3 mt-3">
        {isLoading && (<Spinner></Spinner>)}
      </div>)}
      <div className="whitespace-pre-wrap bg-neutral-800 text-white p-4 rounded-lg">
        {message.content}
      </div>
    </div>
  );
};

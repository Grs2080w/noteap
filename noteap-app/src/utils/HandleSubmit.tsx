import { Message } from '@/types/Message';
import OnSubmit from './OnSubmit';

interface Props {
  input: string;
  setInput: (input: string) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  scrollRef: React.RefObject<any>;
}

export default function handleSend({ input, setInput, messages, setMessages, scrollRef }: Props) {
  if (input === '') return;

  const messagesUpdated = messages.concat({
    id: Date.now().toString(),
    message: input,
    sender: 'Me',
  });
  OnSubmit({ input, setMessages, messagesUpdated });
  scrollRef.current?.scrollToEnd({ animated: true });
  setInput('');
}

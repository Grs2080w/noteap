import { storeDataMessages } from '@/Storage';
import { Message } from '@/types/Message';

interface Props {
  input: string;
  setMessages: (messages: Message[]) => void;
  messagesUpdated: Message[];
}

export default async function OnSubmit({ input, setMessages, messagesUpdated }: Props) {
  setMessages(messagesUpdated);

  function textMessage(message: string): Message[] {
    const messageNew = {
      id: Date.now().toString(),
      message: message,
      sender: 'Server',
    } as Message;

    const messagesUpdated2: Message[] = messagesUpdated.concat(messageNew);
    return messagesUpdated2;
  }

  try {
    const response: { status: string } = await fetch(process.env.API_URL + input, {
      method: 'POST',
    }).then((res) => res.json());

    const messagesUpdated2: Message[] = textMessage(response.status + ' ✅');
    storeDataMessages(messagesUpdated2);
    setMessages(messagesUpdated2);
    
  } catch (error) {

    const messagesUpdated2: Message[] = textMessage('Error sending message ❌ ' + error);
    storeDataMessages(messagesUpdated2);
    setMessages(messagesUpdated2);

    console.error('Error on sendind message', error);
  }
}

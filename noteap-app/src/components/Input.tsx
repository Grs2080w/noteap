import { Message } from '@/types/Message';
import handleSend from '@/utils/HandleSubmit';
import { Button } from 'components/Button';
import { Send } from 'lucide-react-native';
import { TextInput, View } from 'react-native';

interface Props {
  input: string;
  setInput: (input: string) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  scrollRef: React.RefObject<any>;
}

export default function Input({ input, setInput, messages, setMessages, scrollRef }: Props) {
  return (
    <View className="flex w-full flex-row items-center justify-between gap-2 pt-5">
      <TextInput
        placeholder="Type ..."
        className="h-15 w-[83%] rounded-md bg-white text-black shadow-lg shadow-slate-50"
        onChange={(e) => setInput(e.nativeEvent.text)}
        value={input}
      />
      <Button
        onPress={() => handleSend({ input, setInput, messages, setMessages, scrollRef })}
        variant="default"
        className="h-15 w-[15%] bg-white shadow-lg shadow-slate-50"
        disabled={input === ''}>
        <Send color={'#000'} />
      </Button>
    </View>
  );
}

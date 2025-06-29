import { Text } from 'react-native';
import { View } from 'react-native';

type Sender = 'Me' | 'Server';

interface Message {
  id: string;
  message: string;
  sender: Sender;
}

export default function ListContainer({ message }: { message: Message }) {
  if (message.sender === 'Me') {
    return (
      <View className="my-0.5 flex w-full flex-row items-center justify-end">
        <Text className="w-fit max-w-[80%] rounded-lg bg-slate-200 p-2 text-xl text-black">
          {message.message}
        </Text>
      </View>
    );
  } else {
    return (
      <View className="my-0.5 flex w-full flex-row items-center justify-start">
        <Text className="w-fit max-w-[80%] rounded-lg bg-slate-600 p-2 text-xl text-white">
          {message.message}
        </Text>
      </View>
    );
  }
}

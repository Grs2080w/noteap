import { useEffect, useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, StyleSheet, View } from 'react-native';

import Input from '@/components/Input';
import ListContainer from '@/components/ListConatiner';
import { Message } from '@/types/Message';
import { getDataMessages } from '@/Storage';

export default function Profile() {
  const [input, setInput] = useState('');
  const scrollRef = useRef<FlatList<Message>>(null);

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function getData() {
      await getDataMessages().then((data) => {
        if (data) {
          setMessages(data);
        } else {
          setMessages([]);
        }
      });
    }

    getData();
  }, []);

  return (
    <View className="flex flex-1 items-center justify-start bg-slate-950 pt-12">
      <View className="h-[57vh] w-[80vw]">
        <KeyboardAvoidingView
          behavior={'padding'}
          style={styles.container}
          keyboardVerticalOffset={40}
          enabled={true}>
          <FlatList
            data={messages}
            renderItem={({ item }) => <ListContainer message={item} />}
            keyExtractor={(item) => item.id}
            ref={scrollRef}
            onContentSizeChange={() => {
              scrollRef.current?.scrollToEnd({ animated: true });
            }}
          />
          <Input
            input={input}
            setInput={setInput}
            messages={messages}
            scrollRef={scrollRef}
            setMessages={setMessages}
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    margin: 16,
    borderRadius: 8,
  },
});

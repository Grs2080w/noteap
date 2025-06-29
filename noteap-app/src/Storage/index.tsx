import AsyncStorage from '@react-native-async-storage/async-storage';
import { Message } from '@/types/Message';

const storeDataMessages = async (value : Message[]) => {
  try {
    await AsyncStorage.setItem("messages-noteap", JSON.stringify(value));
  } catch (error) {
    console.error('Error on save:', error);
  }
};


const getDataMessages = async () => {
  try {
    const value = await AsyncStorage.getItem("messages-noteap");
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error on get:', error);
  }
};

export { storeDataMessages, getDataMessages };
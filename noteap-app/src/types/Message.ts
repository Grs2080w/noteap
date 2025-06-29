type Sender = 'Me' | 'Server';

export interface Message {
  id: string;
  message: string;
  sender: Sender;
}
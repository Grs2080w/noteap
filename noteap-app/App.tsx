import { StatusBar } from 'expo-status-bar';

import './global.css';
import Profile from '@/App/Profile';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    fetch('https://noteap.onrender.com/health');
  }, []);

  return (
    <>
      <Profile />

      <StatusBar style="light" />
    </>
  );
}

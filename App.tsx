import React from 'react';
import FeedScreen from './src/screens/FeedScreen';
import { QueryClient, QueryClientProvider } from 'react-query'
import { NetworkProvider } from 'react-native-offline';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FeedScreen />
    </QueryClientProvider>
  );
}
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import FeedScreen from './FeedScreen';

const queryClient = new QueryClient()

export function RootScreen() {
  return (
    <QueryClientProvider client={queryClient}>
      <FeedScreen />
    </QueryClientProvider>
  );
}
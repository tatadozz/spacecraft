import React from 'react';
import { Image, Button, Text, View } from 'react-native';
import { useIsConnected } from 'react-native-offline';

const ImageViewer = () => {
  const isConnected = useIsConnected();
  return (
    <View>
      <Image src="foo.com" />
      {isConnected ? (
        <Button title="Download image" />
      ) : (
        <Text>Downloading images is disabled since you are offline</Text>
      )}
    </View>
  );
};
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MapScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map Coming Soon...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#ff1493',
  },
});

export default MapScreen;

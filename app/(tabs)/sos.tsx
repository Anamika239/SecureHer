import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function SOSScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the SOS screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});

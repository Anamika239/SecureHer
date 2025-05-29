import { router } from 'expo-router'; // Import for Expo Router navigation
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; // Import to handle safe area

export default function Explore() {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require('../../assets/images/women.jpg')}
      style={[styles.background, { paddingTop: insets.top }]}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Explore</Text>
        <Text style={styles.info}>
          🛡️ Get safety tips, emergency contact setup, and location features all in one place!
        </Text>
        <Text style={styles.tip}>
          📍 Enable GPS for real-time location tracking and safe zone alerts.
        </Text>
        <Text style={styles.tip}>
          🧠 Stay informed: Learn how to react during emergencies.
        </Text>
        <Text style={styles.tip}>
          💬 Share your location with trusted contacts with just a tap.
        </Text>

        {/* Temporary replacement buttons */}
        <View style={styles.taskContainer}>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/sos')}>
            <Text style={styles.buttonText}>SOS Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/map')}>
            <Text style={styles.buttonText}>Nearby Police Stations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/report')}>
            <Text style={styles.buttonText}>Report an Incident</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(255, 228, 237, 0.9)',
    borderRadius: 20,
    margin: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF1493',
    marginBottom: 20,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginBottom: 15,
    color: '#C71585',
  },
  tip: {
    fontSize: 14,
    marginBottom: 10,
    color: '#D81B60',
  },
  taskContainer: {
    marginTop: 20,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

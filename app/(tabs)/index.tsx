import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require('../../assets/images/women.jpg')}
      style={[styles.background, { paddingTop: insets.top }]}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo.jpg')} style={styles.logo} />
        <Text style={styles.title}>Welcome to SecureHer</Text>
        <Text style={styles.subtitle}>
          Empowering women with safety tools and location awareness.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 182, 193, 0.8)', // light pink overlay
    borderRadius: 20,
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF1493',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#C71585',
  },
});

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import AppNavigator from './AppNavigator'; // <- new import

const PinkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff0f5',
    primary: '#ff69b4',
    card: '#ffc0cb',
    text: '#d63384',
    border: '#ffb6c1',
    notification: '#ff1493'
  }
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    setTimeout(() => {
      setIsLoading(false);
      SplashScreen.hideAsync();
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <ImageBackground source={require('./assets/women.jpg')} style={styles.splashBackground}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/logo.jpg')} style={styles.logo} />
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={require('./assets/women.jpg')} style={styles.background}>
      <NavigationContainer theme={PinkTheme}>
        <AppNavigator />
      </NavigationContainer>
    </ImageBackground>
  );
}

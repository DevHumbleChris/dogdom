import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    OPPOSansHeavy: require('../assets/fonts/OPPOSansHeavy.ttf'),
    SFProDisplayBold: require('../assets/fonts/SF-Pro-Display-Bold.otf'),
    SFProDisplayHeavy: require('../assets/fonts/SF-Pro-Display-Heavy.otf'),
    SFProDisplayMedium: require('../assets/fonts/SF-Pro-Display-Medium.otf'),
    SFProDisplayRegular: require('../assets/fonts/SF-Pro-Display-Regular.otf'),
    SFProDisplaySemibold: require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
    SFProTextRegular: require('../assets/fonts/SF-Pro-Text-Regular.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style='dark' />
    </ThemeProvider>
  );
}

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import LoginScreen from './src/screens/Login/LoginScreen';
import PortfolioMarginScreen from './src/screens/PortfolioMargin/PortfolioMarginScreen';
import { styles } from './App.styles';

type Screen = 'login' | 'portfolioMargin';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {screen === 'login' ? (
        <LoginScreen onLogin={() => setScreen('portfolioMargin')} />
      ) : (
        <PortfolioMarginScreen />
      )}
    </View>
  );
}

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import LoginScreen from './src/screens/Login/LoginScreen';
import MarketDashboardScreen from './src/screens/MarketDashboard/MarketDashboardScreen';
import { styles } from './App.styles';

type Screen = 'login' | 'dashboard';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {screen === 'login' ? (
        <LoginScreen onLogin={() => setScreen('dashboard')} />
      ) : (
        <MarketDashboardScreen />
      )}
    </View>
  );
}

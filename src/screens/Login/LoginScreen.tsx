import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './LoginScreen.styles';

type Props = {
  onLogin?: (email: string, password: string) => void;
};

// TODO: trocar a URL abaixo pelo logo real do Binance, salvo em
// assets/reference/ (ex: require('../../../assets/reference/binance-logo.png'))
const LOGO_PLACEHOLDER_URI = 'https://placehold.co/120x120/0B0E11/F0B90B?text=LOGO';

export default function LoginScreen({ onLogin }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={{ uri: LOGO_PLACEHOLDER_URI }} style={styles.logo} />

      <Text style={styles.title}>Entrar</Text>

      <TextInput
        style={styles.input}
        placeholder="Email ou telefone"
        placeholderTextColor="#76808F"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#76808F"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => onLogin?.(email, password)}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

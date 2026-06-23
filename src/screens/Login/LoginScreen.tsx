import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './LoginScreen.styles';

type Props = {
  onLogin?: (identifier: string) => void;
};

const LOGO_ICON_URI = 'https://placehold.co/44x44/F0B90B/F0B90B.png';

export default function LoginScreen({ onLogin }: Props) {
  const [identifier, setIdentifier] = useState('');

  function handleNext() {
    onLogin?.(identifier.trim());
  }

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.logoRow}>
          <Image source={{ uri: LOGO_ICON_URI }} style={styles.logoIcon} />
          <Text style={styles.logoText}>BINANCE</Text>
        </View>

        <View style={styles.titleRow}>
          <Text style={styles.title}>Log in</Text>
          <View style={styles.qrButton}>
            <Text style={{ fontSize: 16 }}>⊞</Text>
          </View>
        </View>

        <Text style={styles.fieldLabel}>Email/Phone number</Text>
        <TextInput
          style={styles.input}
          placeholder="Email/Phone (without country code)"
          placeholderTextColor="#76808F"
          autoCapitalize="none"
          keyboardType="email-address"
          value={identifier}
          onChangeText={setIdentifier}
        />

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={[styles.socialIcon, { fontSize: 16 }]}>G</Text>
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={[styles.socialIcon, { fontSize: 16 }]}></Text>
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={[styles.socialIcon, { fontSize: 16, color: '#2AABEE' }]}>
            ➤
          </Text>
          <Text style={styles.socialButtonText}>Continue with Telegram</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccountLink}>
          <Text style={styles.createAccountText}>Create a Binance Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { supabase } from './supabaseClient';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) Alert.alert('Login error', error.message);
    else navigation.replace('Home');
  }

  async function handleSignUp() {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) Alert.alert('Signup error', error.message);
    else Alert.alert('Check your email to confirm sign-up!');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

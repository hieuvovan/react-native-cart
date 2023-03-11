import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import { supabase as supabaseService } from '../../services/supabase';

export default function Login({ route, navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    const { error, data } = await supabaseService.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (error) return Alert.alert(error.message);
    navigation.navigate('Home');
  };

  const onSignUp = async () => {
    setLoading(true);
    const { error } = await supabaseService.auth.signUp({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  return (
    <>
      <View>
        <Text>Holla</Text>
      </View>
      <View>
        <Input
          value={email}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          value={password}
          placeholder="Password"
          onChangeText={(value) => setPassword(value)}
        />
        <Button
          title="Login"
          onPress={onLogin}
          disabled={!email || !password || loading}
        />
        <Button
          color="warning"
          title="Signup"
          onPress={onSignUp}
          disabled={!email || !password || loading}
        />
      </View>
    </>
  );
}

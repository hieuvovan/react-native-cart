import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Home({ navigation }: any) {
  const onLogout = () => {
    navigation.navigate('Login', {
      isLogout: true,
    });
  };

  return (
    <View style={styles.home}>
      <Text>This is home page</Text>
      <Button
        title="Logouts"
        onPress={onLogout}
        color="primary"
      />
    </View>
  );
}

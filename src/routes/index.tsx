import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../containers/home';
import Login from '../containers/login';

const Stack = createNativeStackNavigator();

export interface IProps {}

export default function Routes(props: IProps) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: 'white',
        },
        headerShadowVisible: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
      />
    </Stack.Navigator>
  );
}

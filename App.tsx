import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/routes';

import { ThemeProvider } from '@rneui/themed';
import { theme } from './src/config/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}

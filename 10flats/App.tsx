import { StatusBar } from 'expo-status-bar';
import MainNav from './src/navigation/mainNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNav/>
    </SafeAreaProvider>
  );
}


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import challenge from './screens/challenge'

export default function App() {
  return (
   <challenge/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

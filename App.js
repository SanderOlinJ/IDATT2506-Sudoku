import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/StartScreen';

const Stack = createStackNavigator()

export default function App() {
  console.log("App executed")
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Start Screen" 
          component={StartScreen}
          options={{
            headerShown: false
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
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
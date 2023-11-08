import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/StartScreen';
import ChooseDifficultyScreen from "./screens/ChooseDifficultyScreen";
import GameScreen from "./screens/GameScreen";

const Stack = createStackNavigator()

export default function App() {
  console.log("App executed!")
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="StartScreen"
                  component={StartScreen}
                  options={{
                      headerShown: false
              }}/>
              <Stack.Screen
                  name='ChooseDifficulty'
                  component={ChooseDifficultyScreen}
                  options={{
                      headerShown: false
              }}/>
              <Stack.Screen
                  name="GameScreen"
                  component={GameScreen}
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
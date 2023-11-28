import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import StartScreen from "./screens/StartScreen"
import ChooseDifficultyScreen from "./screens/ChooseDifficultyScreen"
import GameScreen from "./screens/GameScreen"
import UserGuideScreen from "./screens/./UserGuideScreen"
import {useTranslation} from "react-i18next"

const Stack = createStackNavigator()

export default function App() {
    const { t } = useTranslation()
    return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="StartScreen"
                  component={StartScreen}
                  options={{
                      headerShown: true,
                      headerTitle: "",
                      headerStyle: {
                          backgroundColor: "#ddd"
                      }
              }}/>
              <Stack.Screen
                  name="ChooseDifficulty"
                  component={ChooseDifficultyScreen}
                  options={{
                      headerShown: true,
                      headerTitle: "",
                      headerStyle: {
                          backgroundColor: "#ddd"
                      }
              }}/>
              <Stack.Screen
                  name="GameScreen"
                  component={GameScreen}
                  options={{
                      headerShown: true,
                      headerStyle: {
                          backgroundColor: "#ddd"
                      }

              }}/>
              <Stack.Screen
                  name="UserGuideScreen"
                  component={UserGuideScreen}
                  options={{
                      headerShown: true,
                      headerTitle: t("how_to_play_title") + " " + t("sudoku"),
                      headerStyle: {
                          backgroundColor: "#ddd"
                      }
                  }}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
}
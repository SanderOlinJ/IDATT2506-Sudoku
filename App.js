import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import StartScreen from "./screens/StartScreen"
import ChooseDifficultyScreen from "./screens/ChooseDifficultyScreen"
import GameScreen from "./screens/GameScreen"
import UserGuideScreen from "./screens/./UserGuideScreen"
import {useTranslation} from "react-i18next"
import boards from "./assets/data/boards.json"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {useEffect} from "react"

const Stack = createStackNavigator()

export default function App() {
    const { t } = useTranslation()

    useEffect(() => {
        const initializeBoards = async () => {
            try {
                await Promise.all(Object.keys(boards).map(async (key) => {
                    const existingBoard = await AsyncStorage.getItem(`@sudokuBoard_${key}`)
                    if (!existingBoard) {
                        const board = boards[key]
                        const jsonValue = JSON.stringify(board)
                        await AsyncStorage.setItem(`@sudokuBoard_${key}`, jsonValue)
                    }
                }))
            } catch (e) {
                console.error("Error initializing boards: ", e)
            }
        }

        initializeBoards()
    }, [])

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
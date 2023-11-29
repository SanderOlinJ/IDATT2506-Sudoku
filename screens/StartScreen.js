import React, {useState} from "react"
import {Text, StyleSheet, Image, SafeAreaView, TouchableOpacity} from "react-native"
import "../locales/i18n"
import { useTranslation } from "react-i18next"
import ChooseLanguageModal from "../components/ChooseLanguageModal"
import ChooseDifficultyModal from "../components/ChooseDifficultyModal"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {getSudoku} from "sudoku-gen"

const StartScreen = ({ navigation }) => {

    const { t, i18n } = useTranslation()
    const [languageModalVisible, setLanguageModalVisible] = useState(false)
    const [difficultyModalVisible, setDifficultyModalVisible] = useState(false)

    const toggleLanguage = (lang) => {
        i18n.changeLanguage(lang).then(() => setLanguageModalVisible(false))
    }

    const startNewGame = () => {
        navigation.navigate("ChooseDifficulty")
    }

    const createNewBoard = async (difficulty) => {
        const newSudoku = getSudoku(difficulty)
        const jsonValue = JSON.stringify(newSudoku)
        await AsyncStorage.setItem(`@sudokuBoard_${difficulty}`, jsonValue)
            .then(() => setDifficultyModalVisible(false))
    }

    const handleCreateNewBoards = () => {
        setDifficultyModalVisible(true)
    }

    const openSettings = () => {
        setLanguageModalVisible(true)
    }

    const openUserGuide = () => {
        navigation.navigate("UserGuideScreen")
    }

    return (
      <SafeAreaView style={styles.container}>

          <Text style={styles.title}>{t("sudoku")}</Text>
          <Image source={require("../assets/images/sudoku.png")} style={styles.sudokuIcon}/>
          
          <TouchableOpacity
              style={styles.button}
              onPress={() => startNewGame()}>
            <Text
                style={styles.buttonText}>
                {t("start_game")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={handleCreateNewBoards}>
            <Text
                style={styles.buttonText}>
                {t("create_new_boards")}
            </Text>
          </TouchableOpacity>

          <ChooseDifficultyModal
              modalVisible={difficultyModalVisible}
              setModalVisible={setDifficultyModalVisible}
              onSelectDifficulty={(difficulty) => {
                  createNewBoard(difficulty)
              }}
          />

          <TouchableOpacity
              style={styles.button}
              onPress={() => openSettings()}>
              <Text
                  style={styles.buttonText}>
                  {t("settings")}
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={() => openUserGuide()}>
              <Text
                  style={styles.buttonText}>
                  {t("how_to_play")}
              </Text>
          </TouchableOpacity>


          <ChooseLanguageModal
              modalVisible={languageModalVisible}
              setModalVisible={() => setLanguageModalVisible(false)}
              toggleLanguage={toggleLanguage}
          />
      </SafeAreaView>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ddd"
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 20
    },
    sudokuIcon: {
      width: 150,
      height: 150,
      marginBottom: 20
    },
    button: {
      backgroundColor: "#512897",
      width: 200,
      padding: 15,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    },
    buttonText: {
      color: "white",
      fontSize: 17,
      fontWeight: "500"
    }
})

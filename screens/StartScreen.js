import React, {useState} from "react"
import {Text, StyleSheet, Image, SafeAreaView, TouchableOpacity} from "react-native"
import "../locales/i18n"
import { useTranslation } from "react-i18next"
import ChooseLanguageModal from "../components/ChooseLanguageModal"

const StartScreen = ({ navigation }) => {
    const { t, i18n } = useTranslation()
    const [modalVisible, setModalVisible] = useState(false)

    const toggleLanguage = (lang) => {
        i18n.changeLanguage(lang).then(() => setModalVisible(false))
    }

    const startNewGame = () => {
        navigation.navigate("ChooseDifficulty")
    }

    const createNewBoard = () => {
        navigation.navigate("CreateNewBoard")
    }

    const openSettings = () => {
        setModalVisible(true)
    }

    const openUserGuide = () => {
        navigation.navigate("UserGuideScreen")
    }

    return (
      <SafeAreaView style={styles.container}>

          <Text style={styles.title}>{t("sudoku")}</Text>
          <Image source={require("../assets/sudoku.png")} style={styles.sudokuIcon}/>
          
          <TouchableOpacity
              style={styles.button}
              onPress={() => startNewGame()}>
            <Text
                style={styles.buttonText}>
                {t("start_new_game")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={() => createNewBoard()}>
            <Text
                style={styles.buttonText}>
                {t("create_new_board")}
            </Text>
          </TouchableOpacity>

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
              modalVisible={modalVisible}
              setModalVisible={() => setModalVisible(false)}
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
      marginBottom: 20,
    },
    buttonText: {
      color: "white",
      fontSize: 17,
      fontWeight: "500"
    }
})

import React, {useState} from "react"
import {Text, StyleSheet, Image, SafeAreaView, TouchableOpacity} from "react-native"
import "../locales/i18n"
import { useTranslation } from "react-i18next"
import ChooseLanguageModal from "../components/ChooseLanguageModal"
import { getSudoku } from "sudoku-gen"
import AsyncStorage from '@react-native-async-storage/async-storage';

const StartScreen = ({ navigation }) => {
    const { t, i18n } = useTranslation()
    const [modalVisible, setModalVisible] = useState(false)

    const toggleLanguage = (lang) => {
        i18n.changeLanguage(lang).then(() => setModalVisible(false))
    }

    const startNewGame = () => {
        console.log("Starting new game...")
        navigation.navigate("ChooseDifficulty")
    }

    const createNewBoard = () => {
        console.log("Creating new boarding...")
        navigation.navigate("CreateNewBoard")
    }

    const openSettings = () => {
        console.log("Opening settings...")
        setModalVisible(true)
    }

    const openUserGuide = () => {
        console.log("Opening user guide...")
        navigation.navigate("UserGuideScreen")
    }

    return (
      <SafeAreaView style={styles.container}>

          <Text style={styles.title}>Sudoku</Text>
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
    header: {
        position: "absolute",
        top: 30,
        right: 10
    },
    flag: {
        fontSize: 30,
        color: '#000'
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: '#ddd'
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
      backgroundColor: '#512897',
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

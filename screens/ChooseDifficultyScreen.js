import React from "react"
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native"
import { useTranslation } from "react-i18next"

const ChooseDifficultyScreen = ({ navigation }) => {
    const { t} = useTranslation()

    const selectDifficulty = (difficulty) => {

        navigation.navigate("GameScreen", { difficulty: difficulty })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{t("choose_difficulty")}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => selectDifficulty("easy")}>
                <Text style={styles.buttonText}>{t("easy")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => selectDifficulty("medium")}>
                <Text style={styles.buttonText}>{t("medium")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => selectDifficulty("hard")}>
                <Text style={styles.buttonText}>{t("hard")}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ChooseDifficultyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 100,
        padding: 20,
        backgroundColor: '#ddd'
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 40
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
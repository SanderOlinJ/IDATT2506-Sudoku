import React from "react"
import "../locales/i18n"
import { useTranslation} from "react-i18next"
import {SafeAreaView, StyleSheet, Text} from "react-native"


const UserGuideScreen = ({ navigation }) => {
    const { t} = useTranslation()


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{t("how_to_play_title")}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
        marginBottom: 20,
        textAlign: "center"
    }
})

export default UserGuideScreen
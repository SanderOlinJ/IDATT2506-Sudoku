import React from "react"
import "../locales/i18n"
import { useTranslation} from "react-i18next"
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"


const UserGuideScreen = () => {
    const { t} = useTranslation()

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.description}>{t("sudoku_description")}</Text>

                <Text style={styles.controlsTitle}>{t("game_interaction_title")}</Text>

                <Text style={styles.control}>{t("select_cell_instruction")}</Text>
                <Text style={styles.control}>
                    <Icon name="trash" size={18} color="#000" />
                    {t("remove_button_explanation")}</Text>
                <Text style={styles.control}>
                    <Icon name="flag" size={18} color="#000" />
                    {t("flag_button_explanation")}</Text>
                <Text style={styles.control}>{t("reset_button_explanation")}</Text>
                <Text style={styles.control}>{t("solve_cell_button_explanation")}</Text>
                <Text style={styles.control}>{t("quick_solve_button_explanation")}</Text>
                <Text style={styles.control}>{t("check_button_explanation")}</Text>
                <View style={styles.spacer} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: "#ddd"
    },
    scrollView: {
        padding: 10
    },
    subtitle: {
        fontSize: 35,
        textAlign: "center",
        marginBottom: 30
    },
    description: {
        fontSize: 17,
        marginBottom: 15,
        paddingHorizontal: 10
    },
    howToWin: {
        fontSize: 18,
        textAlign: "center",
        paddingHorizontal: 10
    },
    controlsTitle: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 15,
    },
    control: {
        fontSize: 18,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    spacer: {
        height: 50
    }
})

export default UserGuideScreen
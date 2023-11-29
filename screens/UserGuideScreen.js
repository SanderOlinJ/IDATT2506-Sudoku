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
                <Text style={styles.title}>{t("what_is_sudoku")}</Text>

                <Text style={styles.text}>{t("sudoku_description")}</Text>

                <Text style={styles.title}>{t("guide")}</Text>
                <Text style={styles.text}>{t("start_game_text")}</Text>
                <Text style={styles.text}>{t("generate_board_text")}</Text>
                <Text style={styles.text}>{t("settings_text")}</Text>

                <Text style={styles.title}>{t("game_interaction_title")}</Text>
                <Text style={styles.text}>{t("select_cell_instruction")}</Text>
                <Text style={styles.text}>
                    <Icon name="trash" size={18} color="#000" />
                    {t("remove_button_explanation")}</Text>
                <Text style={styles.text}>
                    <Icon name="flag" size={18} color="#000" />
                    {t("flag_button_explanation")}</Text>
                <Text style={styles.text}>{t("reset_button_explanation")}</Text>
                <Text style={styles.text}>{t("solve_cell_button_explanation")}</Text>
                <Text style={styles.text}>{t("quick_solve_button_explanation")}</Text>
                <Text style={styles.text}>{t("check_button_explanation")}</Text>
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
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 15
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    spacer: {
        height: 50
    }
})

export default UserGuideScreen
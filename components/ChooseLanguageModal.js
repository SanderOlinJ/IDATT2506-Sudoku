import {Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native"
import React from "react"
import {useTranslation} from "react-i18next"

const ChooseLanguageModal = ({ modalVisible, setModalVisible, toggleLanguage }) => {
    const { t} = useTranslation()

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text style={styles.title}>{t("choose_language")}</Text>

                    <TouchableOpacity
                        style={styles.radioBtn}
                        onPress={() => toggleLanguage("en")}>
                        <Text style={styles.radioText}>{t("english")}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.radioBtn}
                        onPress={() => toggleLanguage("no")}>
                        <Text style={styles.radioText}>{t("norwegian")}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>{t("close")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    radioBtn: {
        marginBottom: 15,
        alignItems: "center"
    },
    radioText: {
        fontSize: 18
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    title: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    button: {
        backgroundColor: "#512897",
        width: 200,
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    }
})

export default ChooseLanguageModal
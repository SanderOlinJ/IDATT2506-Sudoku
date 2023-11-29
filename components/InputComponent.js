import React from "react"
import {Text, TouchableOpacity, StyleSheet, SafeAreaView} from "react-native"

const InputComponent = ({ onNumberPress }) => {

    const renderNumberButtons = () => {
        const buttons = []
        for (let i = 1; i <= 9; i++) {
            buttons.push(
                <TouchableOpacity
                    key={i}
                    style={styles.numberButton}
                    onPress={() => onNumberPress(i)}>
                    <Text style={styles.numberButtonText}>{i}</Text>
                </TouchableOpacity>
            )
        }
        return buttons
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderNumberButtons()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "100%",
        margin: 20
    },
    numberButton: {
        backgroundColor: "#e7e7e7",
        padding: 9,
        borderRadius: 0,
        marginHorizontal: 10,
        borderWidth: 1
    },
    numberButtonText: {
        color: "#000",
        fontSize: 24,
        fontWeight: "bold"
    }
})

export default InputComponent
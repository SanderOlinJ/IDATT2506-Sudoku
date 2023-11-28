import React from "react"
import {Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"


const InputComponent = ({ onNumberPress, onRemovePress, onFlagPress }) => {

    const renderNumberButtons = () => {
        const buttons = []
        for (let i = 1; i <= 9; i++) {
            buttons.push(
                <TouchableOpacity
                    key={i}
                    style={styles.numberButton}
                    onPress={() => onNumberPress(i)}
                >
                    <Text style={styles.numberButtonText}>{i}</Text>
                </TouchableOpacity>
            )
        }
        return buttons
    }

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.numberRow}>
                {renderNumberButtons()}
            </SafeAreaView>
            <SafeAreaView style={styles.iconRow}>
                <TouchableOpacity
                    onPress={onRemovePress}>
                    <Icon name="trash" size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onFlagPress}>
                    <Icon name="flag" size={30} color="#000" />
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    numberRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        margin: 20
    },
    iconRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "30%",
        marginTop: 10
    },
    numberButton: {
        backgroundColor: '#e7e7e7',
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
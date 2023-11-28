import React from "react"
import {StyleSheet, TouchableOpacity, Text} from "react-native"

const Cell = ({ initialValue, isEditable, borderLeft, borderTop, isSelected, onSelectCell }) => {

    const cellStyle = [
        styles.container,
        borderLeft && styles.borderLeft,
        borderTop && styles.borderTop,
        !isEditable && styles.predefinedCell,
        isSelected && styles.selectedCell
    ]

    const textStyle = [
        styles.cellText,
        isSelected && styles.selectedText
    ]

    return (
        <TouchableOpacity
            style={cellStyle}
            disabled={!isEditable}
            onPress={isEditable ? onSelectCell : null}
        >
            <Text style={textStyle}>
                {initialValue}A
            </Text>
        </TouchableOpacity>
    )
}

export default Cell

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 0.5
    },
    cellText: {
        fontSize: 25,
        textAlign: "center",
        color: "#000"
    },
    borderLeft: {
        borderLeftWidth: 2,
    },
    borderTop: {
        borderTopWidth: 2,
    },
    selectedCell: {
        backgroundColor: "#512897"
    },
    selectedText: {
        color: "#fff"
    },
    predefinedCell: {
        backgroundColor: "#aaa"
    }
})
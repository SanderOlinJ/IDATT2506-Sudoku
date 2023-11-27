import React from "react"
import {View, StyleSheet, TextInput} from "react-native"

const Cell = ({ initialValue, onValueChange, editable }) => {
    return (
        <View style={styles.cell}>
            <TextInput
                style={styles.cellText}
                value={initialValue}
                onChangeText={onValueChange}
                editable={editable}
                keyboardType={"number-pad"}
                maxLength={1}
            />
        </View>
    )
}
export default Cell

const styles = StyleSheet.create({
    cell: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 0.5
    },
    cellText: {
        fontSize: 25,
        textAlign: "center"
    }
})
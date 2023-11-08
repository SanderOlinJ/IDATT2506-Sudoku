import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Cell = ({ initialValue }) => {
    return (
        <View style={styles.cell}>
            <Text style={styles.cellText}>{initialValue || ''}</Text>
        </View>
    );
}

export default Cell;

const styles = StyleSheet.create({
    cell: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 0.5
    },
    cellText: {
        fontSize: 16,
    }
});
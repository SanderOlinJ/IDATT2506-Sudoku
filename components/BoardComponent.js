import React from 'react';
import { View, StyleSheet } from "react-native";
import Cell from "../components/CellComponent";

const BoardComponent = () => {
    const renderCell = (key) => {
        // You can pass `initialValue` to the Cell here if needed
        return <Cell key={key} />;
    };

    const renderGroup = (groupIndex) => {
        return (
            <View style={styles.group} key={groupIndex}>
                {Array(3).fill().map((_, index) => renderCell(`cell-${groupIndex}-${index}`))}
            </View>
        );
    };

    const renderRow = (rowIndex) => {
        return (
            <View style={styles.row} key={rowIndex}>
                {Array(3).fill().map((_, index) => renderGroup(`group-${rowIndex}-${index}`))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {Array(9).fill().map((_, rowIndex) => renderRow(rowIndex))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    row: {
        flexDirection: 'row',
    },
    group: {
        flexDirection: 'row',  // Change from 'column' to 'row'
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default BoardComponent;

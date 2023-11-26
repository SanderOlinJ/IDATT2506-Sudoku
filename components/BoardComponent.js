import React from 'react';
import { View, StyleSheet } from "react-native";
import Cell from "../components/CellComponent";

const BoardComponent = ({ puzzle, solution }) => {
    const puzzleRows = []
    for (let i = 0; i < 9; i++) {
        puzzleRows.push(puzzle.slice(i * 9, i * 9 + 9).split(''))
    }


    const renderCell = (rowIndex, columnIndex) => {
        const key = `cell-${rowIndex}-${columnIndex}`;
        const initialValue = puzzleRows[rowIndex][columnIndex] === '-' ? null : puzzleRows[rowIndex][columnIndex]
        return <Cell key={key} initialValue={initialValue} />
    }

    const renderGroup = (groupIndex) => {
        const startIndexRow = Math.floor(groupIndex / 3) * 3;
        const startIndexCol = (groupIndex % 3) * 3;

        return (
            <View style={styles.group} key={`group-${groupIndex}`}>
                {Array.from({ length: 3 }).map((_, rowIndex) =>
                    Array.from({ length: 3 }).map((_, colIndex) =>
                        renderCell(startIndexRow + rowIndex, startIndexCol + colIndex)
                    )
                )}
            </View>
        );
    };

    return (
        <View style={styles.board}>
            {Array.from({ length: 9 }).map((_, groupIndex) => renderGroup(groupIndex))}
        </View>
    );
};

const styles = StyleSheet.create({
    board: {
        // Give the entire board a border
        borderWidth: 3,
        borderColor: 'black',
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    row: {
        flexDirection: 'row',
    },
    group: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default BoardComponent;

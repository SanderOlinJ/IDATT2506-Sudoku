import React from "react"
import { View, StyleSheet } from "react-native"
import Cell from "../components/CellComponent"

const BoardComponent = ({ puzzle, selectedCell, setSelectedCell, userInputs, flaggedCells }) => {
    const puzzleRows = []
    for (let i = 0; i < 9; i++) {
        puzzleRows.push(puzzle.slice(i * 9, i * 9 + 9).split(''))
    }

    const renderBoard = () => {
        return puzzleRows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
                {row.map((cell, columnIndex) => {
                    const borderLeft = columnIndex % 3 === 0 && columnIndex !== 0
                    const borderTop = rowIndex % 3 === 0 && rowIndex !== 0
                    const isEditable = cell === '-'
                    const initialValue = userInputs[rowIndex * 9 + columnIndex]
                    const isSelected = selectedCell
                        && selectedCell[0] === rowIndex
                        && selectedCell[1] === columnIndex
                    const isFlagged = flaggedCells[rowIndex * 9 + columnIndex]
                    if (isFlagged) {
                        console.log("HIIIII")
                    }
                    return (
                        <Cell
                            key={`${rowIndex}-${columnIndex}`}
                            initialValue={initialValue}
                            isEditable={isEditable}
                            borderLeft={borderLeft}
                            borderTop={borderTop}
                            onSelectCell={() => setSelectedCell([rowIndex, columnIndex])}
                            isSelected={isSelected}
                            isFlagged={isFlagged}
                        />
                    )
                })}
            </View>
        ))
    }

    return <View style={styles.board}>{renderBoard()}</View>
}

const styles = StyleSheet.create({
    board: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2
    },
    row: {
        flexDirection: 'row',
    },
})

export default BoardComponent

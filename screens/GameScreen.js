import React, {useState} from "react"
import {StyleSheet, SafeAreaView, Text} from "react-native"
import BoardComponent from "../components/BoardComponent"
import { getSudoku } from "sudoku-gen"
import {useTranslation} from "react-i18next"
import InputComponent from "../components/InputComponent"


const GameScreen = ({ route }) => {

    const { difficulty } = route.params
    const [sudoku, setSudoku] = useState(() => getSudoku(difficulty))
    const { t } = useTranslation()
    const [selectedCell, setSelectedCell] = useState(null)
    const [userInputs, setUserInputs] =
        useState(sudoku.puzzle.split('').map(c => c === '-' ? '' : c))
    const [flaggedCells, setFlaggedCells] = useState(Array(81).fill(false))

    const updateCellValue = (number) => {
        console.log("Test 1")
        if (selectedCell) {
            console.log("Test 2")
            const [row, col] = selectedCell
            const newUserInputs = [...userInputs]
            newUserInputs[row * 9 + col] = number.toString()
            setUserInputs(newUserInputs)
        }
    }

    const removeCellValue = () => {
        if (selectedCell) {
            const [row, col] = selectedCell
            const newUserInputs = [...userInputs]
            newUserInputs[row * 9 + col] = ''
            setUserInputs(newUserInputs)
        }
    }

    const flagCell = () => {
        if (selectedCell) {
            const [row, col] = selectedCell
            const newFlags = [...flaggedCells]
            newFlags[row * 9 + col] = !newFlags[row * 9 + col]
            setFlaggedCells(newFlags)
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.subtitle}>{t("difficulty_title") + " " + sudoku.difficulty}</Text>
            <BoardComponent
                puzzle={sudoku.puzzle}
                selectedCell={selectedCell}
                setSelectedCell={setSelectedCell}
                userInputs={userInputs}
                flaggedCells={flaggedCells}
            />

            <InputComponent
                onNumberPress={updateCellValue}
                onRemovePress={removeCellValue}
                onFlagPress={flagCell}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: '#ddd'
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 20
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    }
})

export default GameScreen

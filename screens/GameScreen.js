import React, {useState} from "react"
import {StyleSheet, SafeAreaView, Text, View, TouchableOpacity} from "react-native"
import BoardComponent from "../components/BoardComponent"
import { getSudoku } from "sudoku-gen"
import {useTranslation} from "react-i18next"
import InputComponent from "../components/InputComponent"
import Icon from "react-native-vector-icons/FontAwesome"


const GameScreen = ({ route }) => {

    const { difficulty } = route.params
    const [sudoku, setSudoku] = useState(() => getSudoku(difficulty))
    console.log(sudoku.solution)
    const { t } = useTranslation()
    const [selectedCell, setSelectedCell] = useState(null)
    const [userInputs, setUserInputs] =
        useState(sudoku.puzzle.split("").map(c => c === "-" ? "" : c))
    const [flaggedCells, setFlaggedCells] = useState(Array(81).fill(false))

    const updateCellValue = (number) => {
        if (selectedCell) {
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
            newUserInputs[row * 9 + col] = ""
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

    const resetGame = () => {
        setUserInputs(sudoku.puzzle.split("").map(c => c === "-" ? "" : c))
        setFlaggedCells(Array(81).fill(false))
    }

    const checkSolution = () => {
        const userSolution = userInputs.join("")
        if (userSolution === sudoku.solution) {
            alert("Correct! You solved the puzzle!")
        } else {
            alert("Incorrect, please try again.")
        }
    }

    const quickSolve = () => {
        setUserInputs(sudoku.solution.split(""))
    }

    const solveSelectedCell = () => {
        if (selectedCell) {
            const [row, col] = selectedCell
            const solutionValue = sudoku.solution.charAt(row * 9 + col)
            const newUserInputs = [...userInputs]
            newUserInputs[row * 9 + col] = solutionValue
            setUserInputs(newUserInputs)
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>{t("difficulty_title") + " " + sudoku.difficulty}</Text>

            <SafeAreaView style={styles.topButtons}>
                <TouchableOpacity style={styles.button} onPress={resetGame}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={solveSelectedCell}>
                    <Text style={styles.buttonText}>Solve Cell</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={quickSolve}>
                    <Text style={styles.buttonText}>Quick Solve</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={checkSolution}>
                    <Text style={styles.buttonText}>Check</Text>
                </TouchableOpacity>
            </SafeAreaView>

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

            <SafeAreaView style={styles.iconRow}>
                <TouchableOpacity
                    onPress={removeCellValue}
                    style={styles.icon}>
                    <Icon name="trash" size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={flagCell}
                    style={styles.icon}>
                    <Icon name="flag" size={30} color="#000" />
                </TouchableOpacity>
            </SafeAreaView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#ddd"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 20
    },
    topButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 20
    },
    button: {
        backgroundColor: "#512897",
        width: 70,
        padding: 5,
        borderRadius: 5,
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 17,
        fontWeight: "500",
        textAlign: "center"
    },
    iconRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        marginTop: 10
    },
    icon: {
        paddingHorizontal: 50
    }
})

export default GameScreen

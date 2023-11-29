import React, {useEffect, useState} from "react"
import {StyleSheet, SafeAreaView, Text, TouchableOpacity, Alert} from "react-native"
import BoardComponent from "../components/BoardComponent"
import {useTranslation} from "react-i18next"
import InputComponent from "../components/InputComponent"
import Icon from "react-native-vector-icons/FontAwesome"

const GameScreen = ({ route, navigation }) => {

    const { sudoku } = route.params
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
            Alert.alert(
                t("correct_title"),
                t("correct"),
                [{ text: t("ok")}]
            )
        } else {
            Alert.alert(
                t("incorrect_title"),
                t("incorrect"),
                [{ text: t("try_again")}]
            )
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

    useEffect(() => {
        navigation.setOptions({
            title: `${t("difficulty_title")} ${t(sudoku.difficulty)}`
        })
    }, [sudoku, navigation])

    return (
        <SafeAreaView style={styles.container}>

            <SafeAreaView style={styles.topButtons}>
                <TouchableOpacity style={styles.button} onPress={resetGame}>
                    <Text style={styles.buttonText}>{t("reset")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={solveSelectedCell}>
                    <Text style={styles.buttonText}>{t("solve_cell")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={quickSolve}>
                    <Text style={styles.buttonText}>{t("quick_solve")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={checkSolution}>
                    <Text style={styles.buttonText}>{t("check")}</Text>
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
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        paddingTop: 0,
        backgroundColor: "#ddd"
    },
    topButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 20
    },
    button: {
        backgroundColor: "#512897",
        width: 80,
        minHeight: 40,
        padding: 5,
        borderRadius: 5,
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 16,
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

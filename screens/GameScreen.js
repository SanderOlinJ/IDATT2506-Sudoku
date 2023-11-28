import React, {useState} from "react"
import {StyleSheet, SafeAreaView, Text} from "react-native"
import BoardComponent from "../components/BoardComponent"
import { getSudoku } from "sudoku-gen"
import {useTranslation} from "react-i18next"
import InputComponent from "../components/InputComponent";


const GameScreen = ({ route }) => {

    const { difficulty } = route.params
    const [sudoku, setSudoku] = useState(() => getSudoku(difficulty));
    console.log(sudoku.puzzle)
    console.log(sudoku.solution)
    console.log(sudoku.difficulty)

    const { t } = useTranslation()
    const [selectedCell, setSelectedCell] = useState(null)

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.subtitle}>{t("difficulty_title") + " " + sudoku.difficulty}</Text>
            <BoardComponent
                puzzle={sudoku.puzzle}
                selectedCell={selectedCell}
                setSelectedCell={setSelectedCell}
            />

            <InputComponent />
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

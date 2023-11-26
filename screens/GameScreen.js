import React, {useState} from 'react';
import { View, Text, StyleSheet } from "react-native";
import BoardComponent from "../components/BoardComponent"; // Assuming you moved BoardComponent to a components folder
import { getSudoku } from 'sudoku-gen';


const GameScreen = ({ route }) => {
    const { difficulty } = route.params;
    console.log(`${difficulty} chosen`);
    const sudoku = getSudoku(difficulty);
    console.log(sudoku.puzzle)
    console.log(sudoku.solution)
    console.log(sudoku.difficulty)

    const [userInput, setUserInput] = useState(sudoku.puzzle.split(''));
    console.log(userInput)
    const checkSolution = () => {
        const userSolution = userInput.join('');
        if (userSolution === sudoku.solution) {
            alert('Correct! You solved the puzzle!');
        } else {
            alert('Incorrect, please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text>{`You selected difficulty: ${difficulty}.`}</Text>
            <BoardComponent
                puzzle={sudoku.puzzle}
                userInput={userInput}
                setUserInput={setUserInput}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default GameScreen;

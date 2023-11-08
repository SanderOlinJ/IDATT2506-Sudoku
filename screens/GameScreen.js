import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import BoardComponent from "../components/BoardComponent"; // Assuming you moved BoardComponent to a components folder
import { getSudoku } from 'sudoku-gen';


const GameScreen = ({ route }) => {
    const { difficulty } = route.params;
    console.log(`${difficulty} chosen`);
    const sudoku = getSudoku(difficulty);


    return (
        <View style={styles.container}>
            <Text>{`You selected ${difficulty} difficulty.`}</Text>
            <BoardComponent />
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

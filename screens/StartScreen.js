import React from 'react';
import { Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';

const StartScreen = ({ navigation }) => {
  return (
      <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Sudoku</Text>
          <Image source={require('../assets/sudoku.png')} style={styles.sudokuIcon}/>
          
          <TouchableOpacity
              style={styles.button}
              onPress={() => {}}>
            <Text
                style={styles.buttonText}>
                Start New Game
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={() => {}}>
            <Text
                style={styles.buttonText}>
                Load Previous Game
            </Text>
          </TouchableOpacity>
          

          <TouchableOpacity
              style={styles.button}
              onPress={() => {}}>
            <Text
                style={styles.buttonText}>
                Create New Board
            </Text>
          </TouchableOpacity>
      </SafeAreaView>
  );
}
export default StartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ddd'
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20
    },
    sudokuIcon: {
      width: 150,
      height: 150,
      marginBottom: 20
    },
    button: {
      backgroundColor: '#512897',
      width: 200,
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 17,
      fontWeight: '500'
    }
});

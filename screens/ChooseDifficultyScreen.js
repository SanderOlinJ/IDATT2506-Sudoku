import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const ChooseDifficultyScreen = ({ navigation }) => {

    const selectDifficulty = (difficulty) => {

        navigation.navigate('GameScreen', { difficulty: difficulty });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Choose Difficulty</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => selectDifficulty('Easy')}>
                <Text style={styles.buttonText}>Easy</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => selectDifficulty('Medium')}>
                <Text style={styles.buttonText}>Medium</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => selectDifficulty('Hard')}>
                <Text style={styles.buttonText}>Hard</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ChooseDifficultyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ddd'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40
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
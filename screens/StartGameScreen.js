import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const numberInputHandler = (inputNumber) => {
        setEnteredValue(inputNumber.replace(/[^0-9]/g, ''));
    };

    return (
        <TouchableWithoutFeedback>
            <View style={styles.screen}>
                <Text styles={styles.title}>Start A New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select A Number</Text>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={() => { }} color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={() => { }} color={Colors.primary} />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 70,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: "40%"
    },
    input: {
        width: 50,
        textAlign: 'center'
    },

});

export default StartGameScreen;
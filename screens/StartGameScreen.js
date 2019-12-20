import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirm, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = (inputNumber) => {
        setEnteredValue(inputNumber.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid Number", "Number has to be between 1-99", [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if (confirm) {
        confirmedOutput = (
            <Card style={styles.startGame}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title='START GAME' onPress={()=> props.onStartGame(selectedNumber)}/>
            </Card>);
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
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
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
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
    startGame: {
        marginTop: 20,
        alignItems:'center',
    }

});

export default StartGameScreen;
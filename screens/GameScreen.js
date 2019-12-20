import React, { useState,useRef} from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = (props) => {
    const [currentGuest, setCurrentGuest] = useState(generateRandomNumber(1, 100, props.userChoice));
    const currentLow=useRef(1);
    const currentGreat=useRef(100);
    const nextGuestHandler = (direction) => {
        if ((direction === 'lower' && currentGuest < props.userChoice) || (direction === 'greater' && currentGuest < props.userChoice)) {
            Alert.alert('Don\'t Lie!!', 'You Know that this is wrong!', [{ text: 'Sorry', style: 'cancel' }]);
            return ;
        }
        if(direction === 'lower'){
            currentGreat.current=currentGuest;
        }else{
            currentLow.current=currentGuest;
        }
        const nextNumber=generateRandomNumber(currentLow.current,currentGreat.current,currentGuest);
        setCurrentGuest(nextNumber);
    }
    return (
        <View style={styles.screen}>
            <Text>Oponent's Guest</Text>
            <NumberContainer>{currentGuest}</NumberContainer>
            <Card style={styles.button}>
                <Button title='Lower' onPress={nextGuestHandler.bind(this, 'lower')} />
                <Button title='Greater' onPress={nextGuestHandler.bind(this, 'greater')} />
            </Card>
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }

});

export default GameScreen;
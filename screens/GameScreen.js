import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import NumberContainer from '../components/NumberContainer';

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
    const [currentGuest, setCurrentGuest] = useState(generateRandomNumber(1, 100, props.userChoise));
    return (
        <View style={styles.screen}>
            <Text>Oponent's Guest</Text>
            <NumberContainer>{currentGuest}</NumberContainer>
            <Card style={styles.button}>
                <Button title='Lower'onPress={()=>{}}/>
                <Button title='Greater' onPress={()=>{}}/>
            </Card>
        </View>
    );

};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%',
    }

});

export default GameScreen;
import {SafeAreaView, Text, View, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import Square from "../components/Square";
import GuessContainer from "../components/GuessContainer";

export default function GameScreen({navigation}) {
    const [number, setNumber] = useState(false);
    const [numberFound, setNumberFound] = useState(false);
    const [guesses, setGuesses] = useState(1)
    return (
        <SafeAreaView style={{padding: 16}}>
            <View style={{alignItems: "center", flexDirection: "row", justifyContent: "center", marginBottom: 24}}>
                <Text style={styles.title}>Number: </Text>
                <Text style={styles.number}>{!numberFound ? "xxxx" : number}</Text>
            </View>
            <View style={{gap: 10}}>
                <GuessContainer />
                <GuessContainer />
                <GuessContainer />
                <GuessContainer />
                <GuessContainer />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 38,
        fontFamily: "SecondaryFont"
    },
    number: {
        fontSize: 44,
        letterSpacing: 3,
        fontFamily: "SecondaryFont"
    }
})


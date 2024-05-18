import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Square from "./Square";

export default function GuessContainer() {
    return (
        <View style={{flexDirection: "row", gap: 10}}>
            <View style={{alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontSize: 40, fontFamily: "SecondaryFontBold", marginRight: 16}}>1</Text>
            </View>
            <Square number={2}/>
            <Square number={4}/>
            <Square number={8}/>
            <Square number={7}/>
        </View>
    )
}
const styles = StyleSheet.create({})

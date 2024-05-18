import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useFonts} from "expo-font";
import {fonts} from "../global/fonts"
import {colors} from "../global/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox/lib";
import Button from "../components/Button"

export default function HomeScreen({navigation}) {
    const [fontsLoaded, fontError] = useFonts(fonts);

    if (!fontsLoaded && !fontError) {
        return null
    }
    function handlePress() {
        console.log("Pressed!")
    }
    return (
        <SafeAreaView style={{flex: 1, padding: 16, backgroundColor: "#FAFAFA"}}>
            <View style={styles.container}>
                <Text style={styles.title}>Numble</Text>
                <Text style={[styles.text, {fontSize: 34, fontFamily: "SecondaryFontBold"}]}>Bienvenido!</Text>
                <Text style={styles.text}>Adivina el numero de cuatro cifras para ganar.</Text>
                <View style={{flexDirection: "row", margin: 16}}>
                    <BouncyCheckbox size={36} unFillColor={colors.lightBlue100} fillColor={colors.lightBlue}/>
                    <Text style={{fontSize: 20, fontFamily: "SecondaryFontBold"}}>Permitir repeticion de cifras</Text>
                </View>
            </View>
            <Button title={"Jugar Ahora"} onPress={()=>navigation.navigate("Game")}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontFamily: "MainFont",
        color: colors.lightBlue,
        fontSize: 80,
    },
    text: {
        fontSize: 24,
        maxWidth: 275,
        padding: 5,
        fontFamily: "SecondaryFont"
    }
})

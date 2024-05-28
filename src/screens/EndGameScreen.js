import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import Button from "../components/Button";


export default function EndGameScreen({navigation, route}){
    const {secretNumber, gameState} = route.params;
    console.log(gameState)
    return(
        <SafeAreaView style={{flex: 1, padding: 16}}>

            <View style={styles.container}>
                {gameState === "won" ? (
                    <Text
                        style={[styles.text, {fontSize: 34, fontFamily: "SecondaryFontBold"}]}>
                        Numero adivinado!
                    </Text>
                ) : (
                    <Text
                        style={[styles.text, {fontSize: 34, fontFamily: "SecondaryFontBold"}]}>
                        No pudiste adivinar el numero :(
                    </Text>
                )}

                <Text style={styles.text}>El numero es: {secretNumber}</Text>
            </View>

            <Button title={"Inicio"} onPress={()=>navigation.navigate("HomeScreen")}/>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 24,
        maxWidth: 275,
        padding: 5,
        fontFamily: "SecondaryFont"
    }
})
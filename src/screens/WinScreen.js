import {SafeAreaView, StyleSheet, Text} from "react-native";
import Button from "../components/Button";


export default function WinScreen({navigation},number){

    return(
        <SafeAreaView>

            <View style={styles.container}>
                <Text
                    style={[styles.text, {fontSize: 34, fontFamily: "SecondaryFontBold"}]}>
                    Numero adivinado!
                </Text>
                <Text style={styles.text}>El numero es: {number}</Text>
            </View>

            <Button title={"Inicio"} onPress={()=>navigation.navigate("Home")}/>

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
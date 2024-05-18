import {StyleSheet, TextInput, View} from 'react-native'
import React, {useState} from 'react'
import {colors} from "../global/colors";

export default function Square({number}) {
    const [input, setInput] = useState(null);

    function handleChange(text) {
        // Remove any character that is not a digit
        const numericText = text.replace(/[^0-9]/g, '');
        setInput(numericText);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.number}
                keyboardType={"number-pad"}
                maxLength={1}
                inputMode={"numeric"}
                caretHidden={true}
                onChangeText={() => handleChange}
                value={input}
            >
                {}
            </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        backgroundColor: colors.grey,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    number: {
        fontSize: 44,
        fontFamily: "MainFont",
        color: "white"
    }
})

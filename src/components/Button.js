import {Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {colors} from "../global/colors";

export default function Button({title, onPress}) {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: colors.lightBlue,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 30,
        fontFamily: "MainFont",
        paddingVertical: 5
    }
})

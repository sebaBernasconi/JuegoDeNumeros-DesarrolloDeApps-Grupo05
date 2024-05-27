import { View, Text, Pressable, Dimensions, StyleSheet } from "react-native";
import { keys, ENTER, CLEAR } from "../global/constants";
import {colors} from "../global/colors";

const screenWidth = Dimensions.get("window").width - 50;
const keyWidth = (screenWidth - 10) / keys[0].length;
const keyHeight = keyWidth * 0.5;

const Keyboard = ({
                      onKeyPressed = () => {},
                      greyCaps = [],
                  }) => {
    const isLongButton = (key) => {
        return key === ENTER || key === CLEAR;
    };

    return (
        <View style={styles.keyboard}>
            {keys.map((keyRow, i) => (
                <View style={styles.row} key={`row-${i}`}>
                    {keyRow.map((key) => (
                        <Pressable
                            onPress={() => onKeyPressed(key)}
                            disabled={greyCaps.includes(key)}
                            key={`key-${key}`}
                            style={[
                                styles.key,
                                isLongButton(key) ? { width: keyWidth * 1.2 } : {},
                            ]}
                        >
                            <Text style={styles.keyText}>{key.toUpperCase()}</Text>
                        </Pressable>
                    ))}
                </View>
            ))}
        </View>
    );
};

export default Keyboard;

const styles = StyleSheet.create({
    keyboard: {
        alignSelf: "center",
        marginTop: "auto",
        marginBottom: -10
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    key: {
        width: keyWidth - 4,
        height: keyHeight - 4,
        margin: 2,
        borderRadius: 5,
        backgroundColor: colors.darkGrey,
        justifyContent: "center",
        alignItems: "center",
    },
    keyText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
});
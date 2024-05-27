import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import Keyboard from "../components/Keyboard";
import {CLEAR, ENTER} from "../global/constants";
import {colors} from "../global/colors";


const NUMBER_OF_TRIES = 10;

const copyArray = (arr) => {
    return [...arr.map((rows) => [...rows])];
};

export default function GameScreen({navigation, route}) {
    const {allowRepeatedDigits} = route.params
    const [secretNumber, setSecretNumber] = useState("");

    useEffect(() => {
        if (allowRepeatedDigits) {
            const min = Math.ceil(1000);
            const max = Math.ceil(9999);
            const number = Math.floor(Math.random() * (max - min) + min);
            setSecretNumber(number.toString())
        } else {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
            const number = []
            while (number.length < 4) {
                const index = Math.floor(Math.random() * (numbers.length - 1))
                const digit = numbers.splice(index, 1)
                number.push(digit)
            }
            setSecretNumber(number.join("").toString())
        }
    }, []);


    const digits = secretNumber.split(""); // ['1', '6', '2', '7']
    console.log(digits.length)
    const [rows, setRows] = useState(
        new Array(NUMBER_OF_TRIES).fill(new Array(digits.length).fill("1"))
    );
    console.log(rows)
    const [curRow, setCurRow] = useState(0);
    const [curCol, setCurCol] = useState(0);
    const [gameState, setGameState] = useState("playing"); // won, lost, playing

    useEffect(() => {
        if (curRow > 0) {
            checkGameState();
        }
    }, [curRow]);

    const checkGameState = () => {
        /*TODO*/
    };


    const onKeyPressed = (key) => {
        if (gameState !== "playing") {
            return;
        }

        const updatedRows = copyArray(rows);

        if (key === CLEAR) {
            const prevCol = curCol - 1;
            if (prevCol >= 0) {
                updatedRows[curRow][prevCol] = "";
                setRows(updatedRows);
                setCurCol(prevCol);
            }
            return;
        }

        if (key === ENTER) {
            if (curCol === rows[0].length) {
                setCurRow(curRow + 1);
                setCurCol(0);
            }

            return;
        }

        if (curCol < rows[0].length) {
            updatedRows[curRow][curCol] = key;
            setRows(updatedRows);
            setCurCol(curCol + 1);
        }
    };

    const isCellActive = (row, col) => {
        return row === curRow && col === curCol;
    };

    const getCellBGColor = (row, col) => {
        const digit = rows[row][col];

        if (row >= curRow) {
            return colors.darkGrey;
        }
        if (digit === digits[col]) {
            return colors.green;
        }
        if (digits.includes(digit)) {
            return colors.yellow;
        }
        return colors.black;
    };

    return (
        <SafeAreaView style={{padding: 16}}>
            <View style={{alignItems: "center", flexDirection: "row", justifyContent: "center"}}>
                <Text style={styles.title}>Number: </Text>
                <Text
                    style={styles.number}>{(gameState === "Won" || gameState === "Lost") ? {/*number*/} : secretNumber}</Text>
            </View>
            <ScrollView style={styles.map}>
                {rows.map((row, i) => (
                    <View key={`row-${i}`} style={[styles.row, {justifyContent: "center", alignItems: "center"}]}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: "bold",
                            marginRight: 5,
                            fontFamily: "SecondaryFontBold"
                        }}>{i}</Text>
                        {row.map((digit, j) => (
                            <View
                                key={`cell-${i}-${j}`}
                                style={[
                                    styles.cell,
                                    {
                                        borderColor: isCellActive(i, j)
                                            ? colors.grey
                                            : colors.darkGrey,
                                        backgroundColor: getCellBGColor(i, j),
                                    },
                                ]}
                            >
                                <Text style={styles.cellText}>{digit}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
            <Keyboard onKeyPressed={onKeyPressed}/>
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
    },
    map: {
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    cell: {
        borderWidth: 2,
        flex: 1,
        aspectRatio: 1,
        margin: 3,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    cellText: {
        color: colors.grey,
        fontSize: 28,
        fontFamily: "SecondaryFontBold"
    },

})


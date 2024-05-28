import {StyleSheet} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";
import EndGameScreen from "../screens/EndGameScreen";

const Stack = createNativeStackNavigator();
export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
                <Stack.Screen name={"GameScreen"} component={GameScreen}/>
                <Stack.Screen name={"EndGameScreen"} component={EndGameScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({})

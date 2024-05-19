import {StyleSheet} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";
import WinScreen from "../screens/WinScreen";

const Stack = createNativeStackNavigator();
export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeScreen}/>
                <Stack.Screen name={"Game"} component={GameScreen}/>
                <Stack.Screen name={"Win"} component={WinScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({})

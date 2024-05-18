import {StyleSheet} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";

const Stack = createNativeStackNavigator();
export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeScreen}/>
                <Stack.Screen name={"Game"} component={GameScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({})

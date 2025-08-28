import React from 'react'
import { HomeScreen,DetailScreen } from '../Container'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function MainStack(){
    return(
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='detail' component={DetailScreen}/>
            </Stack.Navigator>
    )
}


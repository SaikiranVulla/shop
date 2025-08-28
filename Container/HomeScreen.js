import React from 'react'
import {View,Text,SafeAreaView,StyleSheet} from 'react-native'

export default function HomeScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
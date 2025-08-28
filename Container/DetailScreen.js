import React from 'react'
import {View,Text} from 'react-native'

class DetailScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    render(){
        return(
            <View>
                <Text>DetailScreen</Text>
            </View>
        )
    }
}

export default DetailScreen
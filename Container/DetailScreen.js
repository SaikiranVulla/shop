import React from 'react'
import {View,Text,SafeAreaView, TouchableOpacity,ScrollView,StyleSheet,Image} from 'react-native'
import { fetchParticularItem } from '../Redux/Actions/CartActions';
import { connect } from 'react-redux';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


class DetailScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    componentDidMount(){
        const {id} = this.props.route.params
        this.props.fetchParticularItem(id)
    }

    

    render(){
        const {navigation,route={},isLoading, error, particularItem} = this.props
        return(
            <SafeAreaView>
              <TouchableOpacity activeOpacity={0.6} style={{marginLeft:5}} onPress={()=>navigation.goBack()}>
              <FontAwesome6 name="angle-left" size={24} color="black"  />
              </TouchableOpacity>
              <ScrollView contentContainerStyle={{ padding: 16 }}>
          {/* Product Image */}
          <Image
            source={{ uri: particularItem.image }}
            style={styles.image}
            resizeMode="contain"
          />

          {/* Title */}
          <Text style={styles.title}>{particularItem.title}</Text>

          {/* Price */}
          <Text style={styles.price}>${particularItem.price}</Text>

          {/* Category */}
          <Text style={styles.category}>{particularItem.category}</Text>

          {/* Description */}
          <Text style={styles.description}>{particularItem.description}</Text>
          </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state =>({
    isLoading:state.getCartReducer.isLoading,
    error:state.getCartReducer.error,
    particularItem:state.getCartReducer.particularItem
})

export default connect(mapStateToProps, { fetchParticularItem })(DetailScreen)

const styles = StyleSheet.create({
     image: {
    width: '100%',
    height: 250,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 8,
  },
   category: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
})
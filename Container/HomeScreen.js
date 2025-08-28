import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCartItem } from '../Redux/Actions/CartActions'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
    const { isLoading, error, cartItem } = useSelector(state => state.getCartReducer)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        dispatch(fetchCartItem())
    }, [])


    function RenderItem({ item, index }) {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('detail',{id:item.id})} style={styles.card}>
                {/* Example: Image + Title + Price */}
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                </Text>
                <Text style={styles.price}>${item.price}</Text>
            </TouchableOpacity>
        )

    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={cartItem || []}
                keyExtractor={item => item.id.toString()}
                renderItem={RenderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        flex: 1, // makes sure two cards share the row
        backgroundColor: '#fff',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 3, // shadow for Android
        shadowColor: '#000', // shadow for iOS
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    price: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
    },
})
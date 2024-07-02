import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

    const ProductsCard = () => {
        const [cart, setCart] = useState([]);
        useEffect(() => {
            const loadCart = async () => {
            const storedCart = await AsyncStorage.getItem('cart');
            if (storedCart) {
                setCart(JSON.parse(storedCart));
            }
            };
            loadCart();
        }, []);
    
        const addToCart = async (product) => {
            const newCart = [...cart, product];
            setCart(newCart);
            await AsyncStorage.setItem('cart', JSON.stringify(newCart));
        };
    return (
        <View style={styles.dressContainer}>
            <Image source={require('../assets/dress1.png')} 
            style={styles.dress}/>
            <View style={styles.dressInfo}>
                <Text style={styles.dressName}>Office Wear</Text>
                <Text style={styles.dressDescription}>Reversible Angora Cardigan </Text>
                <Text style={styles.dressPrice}>$120</Text>
            </View>
            <TouchableOpacity onPress={() => addToCart(item)}>
                <Image source={require('../assets/add_circle.png')} style={styles.addToCart} />
            </TouchableOpacity>
        </View>
        
    )
}

export default ProductsCard

const styles = StyleSheet.create({
    dressContainer: {
        marginRight: 15,
        left: 20,
    },
    dress: {
        width: '100%',
        height: 260,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    dressInfo: {
        paddingLeft: 10,
        paddingBottom: 30,
    },
    dressName: {
        fontSize: 18,
        fontWeight: '600',
    },
    dressDescription: {
        fontSize: 14,
        fontWeight: '600',
        color: '#aaa',
    },
    dressPrice: {
        fontSize: 20,
        color: '#FA908A',
        fontWeight: '500',
    },
    addToCart: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 10,
        bottom: 110,
    },
})
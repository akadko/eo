import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingBottom: 32,
        paddingLeft: 32,
    },
    image: {
        width: 48,
        height: 48,
    },
    title: {
        fontSize: 24,
        paddingTop: 16,
    },
})

const Header = ({ title, image }) => (
    <View style={styles.container}>
        <Image source={image} resizeMode="contain" style={styles.image} />
        <Text style={styles.title}>{title}</Text>
    </View>
)

export default Header

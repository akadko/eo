import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(255,202,0)',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        width: '100%',
        marginTop: 8,
    },
    title: {
        color: '#212121',
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 2,
    },
    rightButton: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    leftButton: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
})

const Button = ({ title, onPress, align = 'left' }) => (
    <TouchableOpacity onPress={onPress} style={[styles.container, align === 'right' ? styles.rightButton : styles.leftButton]}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
)

export default Button

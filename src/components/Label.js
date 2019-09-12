import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#adadad',
        fontWeight: '700',
    },
})

const Label = ({ text }) => (
    <Text style={styles.text}>{text}</Text>
)

export default Label

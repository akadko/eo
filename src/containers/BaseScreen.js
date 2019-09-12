import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width,
        paddingTop: 32,
        justifyContent: 'center',
        backgroundColor: 'rgb(255,202,0)',
    },
})

const BaseScreen = ({ children, style }) => (
    <View style={[styles.container, style]}>
        {children}
    </View>
)

export default BaseScreen

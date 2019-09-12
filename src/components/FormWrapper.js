import React from 'react'
import { View, StyleSheet } from 'react-native'

const borderRadius = 16

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 16,
        shadowColor: "#585858",
        shadowOpacity: 0.3,
        shadowRadius: 16.00,
        elevation: 5,
    },
    leftContainer: {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        paddingRight: 24,
        marginRight: 24,
    },
    rightContainer: {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        paddingLeft: 24,
        marginLeft: 24,
    },
})

const FormWrapper = ({ align = 'left', children }) => (
    <View style={[styles.container, align === 'right' ? styles.rightContainer : styles.leftContainer]}>
        {children}
    </View>
)

export default FormWrapper

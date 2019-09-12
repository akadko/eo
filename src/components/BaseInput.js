import React from 'react'
import { View, TextInput, StyleSheet, Platform } from 'react-native'
import Label from './Label'

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
    },
    input: {
        borderColor: '#d8d8d8',
        borderWidth: 1.5,
        borderRadius: 8,
        minHeight: 42,
        marginTop: 8,
        paddingHorizontal: 16,
    },
    leftInput: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeftWidth: 0,
    },
    rightInput: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRightWidth: 0,
    },
    shim: {
        minHeight: Platform.select({ ios: 42, android: 60 }),
        marginTop: Platform.select({ ios: 8, android: 0 }),
    },
    labelLeftAlignWrapper: {
        paddingLeft: 16,
    },
})

const BaseInput = ({ label, align = 'left', onLabelPress, inputRef, ...props }) => (
    <View style={styles.container}>
        {label && (
            <View style={align === 'left' && styles.labelLeftAlignWrapper}>
                <Label text={label} />
            </View>
        )}
        {onLabelPress ?
            (
                <View style={styles.shim} />
            )
            : (
            <TextInput ref={inputRef} {...props} style={[styles.input, align === 'right' ? styles.rightInput : styles.leftInput]} />
        )}
    </View>
)

export default BaseInput

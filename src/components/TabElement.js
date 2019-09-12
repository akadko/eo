import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'

const inactiveColor = '#737373'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    icon: {
        width: 24,
        height: 24,
    },
    inactiveIcon: {
        tintColor: inactiveColor,
    },
    label: {
        paddingTop: 4,
        fontWeight: '700',
        fontSize: 12,
    },
    inactiveLabel: {
        color: inactiveColor,
    },
})

const TabElement = ({ id, title, image, isActive, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={() => onPress && onPress(id)} activeOpacity={1}>
        <Image
            source={image}
            style={[styles.icon, !isActive && styles.inactiveIcon]}
            resizeMode="contain"
        />
        <Text style={[styles.label, !isActive && styles.inactiveLabel]}>
            {title}
        </Text>
    </TouchableOpacity>
)

export default TabElement

import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabElement from './TabElement'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        borderTopColor: '#ccc',
        paddingVertical: 8,
        shadowColor: "#dfdfdf",
        shadowOpacity: 0.3,
        shadowRadius: 16.00,
        elevation: 500,
        shadowOffset: {
            width: 0,
            height: 100,
        },
        zIndex: 999,
        paddingTop: 16,
    },
})

const TabPanel = ({ tabs }) => (
    <View style={styles.container}>
        {tabs.map(tab => (
            <TabElement key={tab.title} {...tab} />
        ))}
    </View>
)

export default TabPanel

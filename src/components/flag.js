import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import params from '../params'


export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.coreFlag} />
            <View style={styles.line} />
            <View style={styles.base} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 1
    },
    coreFlag: {
        height: 7,
        width: 9,
        backgroundColor: 'red',
        borderColor: 'black',
        marginLeft: 3.7,
        marginTop: 0
    },
    line: {
        position: 'absolute',
        height: 20,
        width: 2,
        borderRadius: 3,
        backgroundColor: 'black',
        marginLeft: 11,
        marginTop: -1
    },
    base: {
        height: 5,
        width: 8,
        backgroundColor: 'black',
        borderRadius:50,
        marginLeft: 8,
        marginTop: 6
    },
})
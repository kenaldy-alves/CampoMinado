import React from 'react'
import { Dimensions, TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        padding:20,
        backgroundColor: 'skyblue',
        borderRadius: 20,
        alignItems:'center', 
        justifyContent:'center',
    }
})

export default props => {
    return (
        <TouchableOpacity onPress={() => props.onPress(props.label)} >
            <Text style={styles.button}>{props.label}</Text>
        </TouchableOpacity>
    )
}
import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import params from '../params'
import Mine from './Mine'
import Flag from './flag'

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props

    const styleField = [styles.field]
    if (opened) styleField.push(styles.opened)
    if (exploded) styleField.push(styles.exploded)
    if (flagged) styleField.push(styles.flag, styles.regular)
    if (styleField.length === 1) styleField.push(styles.regular)
    if(opened && flagged ) styleField.push(styles.opened)

    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = 'green'
        if (nearMines == 2) color = 'rgb(175, 175,0)'
        if (nearMines >= 3 && nearMines < 6) color = 'red'
        if (nearMines >= 6) color = 'black'
    }
    return (
        <TouchableOpacity onPress = {props.onOpen}  onLongPress = {props.onSelect}>
            <View style={styleField}>
                {mined && opened ? <Mine></Mine> : false}
                {flagged && (!opened) ? <Flag></Flag> : false}
                {!mined && opened && nearMines >= 0 ?
                    <Text style={[styles.label, { color: color }]}>
                        {nearMines}</Text> : false}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: 'rgb(0, 175,255)',
        borderLeftColor: 'rgb(0, 200,255)',
        borderTopColor: 'rgb(0, 200,255)',
        borderRightColor: 'rgb(0, 120,170)',
        borderBottomColor: 'rgb(0, 120,170)',
    },
    opened: {
        backgroundColor: 'white',
        borderColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    label: {
        fontSize: params.fontSize,
        fontWeight: 'bold',
    }

})
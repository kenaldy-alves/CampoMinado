import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c} onOpen={() => props.onOpenField(r, c)}></Field>
        })
        return <View style={{ flexDirection: 'row' }} key={r}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(255,255,255)',
    }
})
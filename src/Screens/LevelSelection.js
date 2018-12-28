import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide' transparent={true} >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}> Selecione o Nivel de Dificulade</Text>

                    <TouchableOpacity style={[styles.button, styles.bgEasy]} onPress={() => props.onLevelSelect(0.1)} >
                        <Text style={styles.buttonLabel}> Fácil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.bgMedium]} onPress={() => props.onLevelSelect(0.2)} >
                        <Text style={styles.buttonLabel}> Médio</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.bgHard]} onPress={() => props.onLevelSelect(0.3)} >
                        <Text style={styles.buttonLabel}> Difícil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal >
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(240,240,240,0.5)',
    },
    container: {
        backgroundColor: 'rgba(255,255,255,6)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: 'rgb(0,255,0)'
    },
    bgMedium: {
        backgroundColor: 'rgb(255,180,0)'
    },
    bgHard: {
        backgroundColor: 'rgb(255,0,0)'
    },
})
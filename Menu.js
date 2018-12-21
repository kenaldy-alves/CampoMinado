import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Card, BackHandler } from 'react-native'
import Button from './src/components/Button'

export default class Menu extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.image}>
                <Image source={require('./src/Images/Mine.png')}></Image>
                <Text style={styles.texto}>Campo Minado</Text>

                <Button label='Jogar' onPress={() => navigate('Page1')}></Button>
                <Button label='Dificuldade'></Button>
                <Button label='Sair' onPress={() => BackHandler.exitApp()}></Button>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    image: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: 'rgb(0,0,100)',
        padding: 20,
    },
    texto: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 4
    }

})
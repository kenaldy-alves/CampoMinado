import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Card, BackHandler } from 'react-native'
import Button from './src/components/Button'
import LevelSelection from './src/Screens/LevelSelection'

export default class Menu extends Component {
    static navigationOptions = {
        header: null,
    }

    state = {
        showLevelSelected: false,
        levelDifficult: 0.1
    }

    onLevelSelected = level => {
        this.setState({ levelDifficult: level, showLevelSelected: false })
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.image}>
                <LevelSelection isVisible={this.state.showLevelSelected}
                    onLevelSelect={this.onLevelSelected}
                    onCancel={() => this.setState({ showLevelSelected: false })} />

                <Image source={require('./src/Images/Mine.png')}></Image>
                
                <Text style={styles.texto}>Campo Minado</Text>
                
                <Button label='Jogar' onPress={() => navigate('Page1', { level: this.state.levelDifficult })}></Button>
                
                <Button label='Dificuldade' onPress={() => this.setState({ showLevelSelected: true })}></Button>
                
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
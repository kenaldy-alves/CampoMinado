import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import params from '../params'
import MineField from '../components/MineField'
import { createMinedBoard, openField, hadExplosion, showMines, wonGame, cloneBoard } from './Logic'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  static navigationOptions = {
    title: 'Campo Minado',
    headerRight: (
      <Button title="Ajuda" color="skyblue">
      </Button>
    ),
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Fim de jogo!!!','Você Perdeu')
    }
    if(won){
      showMines(board)
      Alert.alert('Parabéns!!!','Você Venceu')
    }

    this.setState({board, lost, won})
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={ this.onOpenField} ></MineField>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttons: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    marginTop: 10
  },
  texto: {
    fontSize: params.fontSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)'
  }
})
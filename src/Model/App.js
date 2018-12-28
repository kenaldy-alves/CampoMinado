import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import params from '../params'
import MineField from '../components/MineField'
import Mine from '../components/Mine'
import {
  createMinedBoard,
  openField,
  hadExplosion,
  showMines,
  wonGame,
  cloneBoard,
  setFlag,
  numMines,
  flagsUsed
} from './Logic'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
    this.state.mines = numMines(this.state.board)
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Campo Minado',
      headerRight: (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
          <Button title="Ajuda" color="skyblue" label="Ajuda" onPress={navigation.getParam('notify')} />
          <Button title="Reiniciar" color="skyblue" label="Ajuda" onPress={navigation.getParam('reload')} />
        </View>
      ),
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ notify: this.notification, reload: this.reload, numMines: this.state.mines })
  }

  notification = () => {
    Alert.alert("Informações:", '1-Para ganhar voce deve abrir todos os campos que não contêm minas.' + '\n' + "\n" + '2- Ao pressionar por 2 segundos você coloca uma flag no campo.')
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  reload = () => {

    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    this.setState({
      board: createMinedBoard(rows, cols, this.minesAmount()),
      mines: numMines(this.state.board),
      won: false,
      lost: false,
      lock: false
    })
  }

  createState = () => {
    const {navigation} = this.props
    const level = navigation.getParam('level')
    params.difficultLevel  = level
    
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      mines: 0,
      won: false,
      lost: false,
      lock: false
    }
  }

  onOpenField = (row, column) => {
    if (!this.state.lock) {
      const board = cloneBoard(this.state.board)
      openField(board, row, column)
      const lost = hadExplosion(board)
      const won = wonGame(board)
      let lock = false

      if (lost) {
        showMines(board)
        Alert.alert('Fim de jogo!!!', 'Você Perdeu')
        lock = true
      }
      if (won) {
        showMines(board)
        Alert.alert('Parabéns!!!', 'Você Venceu')
        lock = true
      }
      this.setState({ board, lost, won, lock })
    }
  }

  onSelectField = (row, column) => {
    if (!this.state.lock) {
      const board = cloneBoard(this.state.board)
      setFlag(board, row, column)
      const mined = numMines(board)
      const mines = mined - flagsUsed(board)
      this.setState({ board, mines: mines })
    }
  }

  render() {
    return (
      < View style={styles.container} >
        <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
          <Mine></Mine>
          <Text style={{ fontSize: 20 }}> Número de minas: {this.state.mines}</Text>
        </View>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}></MineField>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
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
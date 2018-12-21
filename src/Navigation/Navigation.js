import Menu from '../../Menu'
import App from '../../src/Model/App'

import {createStackNavigator, createAppContainer } from 'react-navigation'

const StackNavigator = createStackNavigator({
    Home: Menu,
    Page1: App,
})

export default createAppContainer(StackNavigator)
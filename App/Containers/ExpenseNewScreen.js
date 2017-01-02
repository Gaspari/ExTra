// @flow

import React from 'react'
import { View, ListView, Text } from 'react-native'
import Price from '../Components/Price'

import styles from './Styles/ExpenseListScreenStyle'

// import DB from '../Models/index'


export default class ExpenseNewScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        date: new Date(),
        description: '',
        created_by: 'USAAAR',
        price: 0,
        currency: 'CZK'
      }
    };
  }

  submit() {

  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <TextInput type='date' name='date' />
          <TextInput type='description' name='description' />
          <TextInput type='number' name='price' />
          <TextInput type='select' name='currency' />
        </View>
      </View>
    )
  }
  // renderFooter={this.renderFooter}

}
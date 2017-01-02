// @flow

import React, { Component } from 'react'
import { Text } from 'react-native'

class Price extends Component {

  formatPrice(item) {
    switch (item.currency) {
      case 'CZK':
        return item.price + '\u00A0Kč'
      default:
        return '$\u00A0' + item.price
    }
  }

  render () {
    return (
      <Text>{this.formatPrice(this.props.item)}</Text>
    )
  }
}

export default Price
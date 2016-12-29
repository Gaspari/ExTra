import React, { Component } from 'react'
// import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin'
import {
  Text,
  View,
  Image
} from 'react-native'

import styles from './styles'

class UnauthContainer extends Component {
  // componentDidMount () {
  //   this.props.startup()
  // }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to ExTra!
        </Text>
        <Text style={styles.instructions}>
          The simple expense tracker from Black Globe
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
	      </Text>
      </View>
    )
  }
}
// <GoogleSigninButton
//   style={{width: 48, height: 48}}
//   size={GoogleSigninButton.Size.Icon}
//   color={GoogleSigninButton.Color.Dark}
//   onPress={this._signIn.bind(this)} />

export default UnauthContainer
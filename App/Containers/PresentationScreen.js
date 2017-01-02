// @flow

import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { isLoggedIn } from '../Redux/LoginRedux'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {
  render () {
    if ( isLoggedIn ) {
      return (
        <View style={[styles.mainContainer]}>
          <View style={styles.container}>
            <View style={styles.centered}>
              <Text>
                You are logged in
              </Text>
            </View>
            <RoundedButton onPress={NavigationActions.expenseListScreen}>
              Go to App
            </RoundedButton>
            <View style={styles.centered}>
              <Text>
                or
              </Text>
            </View>
            <RoundedButton onPress={NavigationActions.logout}>
              Logout
            </RoundedButton>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.mainContainer}>

          <View style={styles.container}>
            <View style={styles.centered}>
              <Image source={Images.clearLogo} style={styles.logo} />
            </View>

            <View >
              <Text style={styles.title} >
                ExTra
              </Text>
              <Text style={styles.sectionText} >
                Expense Tracker
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <RoundedButton onPress={NavigationActions.login}>
                Login
              </RoundedButton>
            </View>

            <View style={[styles.centered, styles.footerWrapper]}>
              <Text style={styles.footer}>Created by Black Globe</Text>
            </View>

          </View>

        </View>
      )
    }
  }
}

{
/*<RoundedButton onPress={NavigationActions.componentExamples}>
  Component Examples Screen
</RoundedButton>

<RoundedButton onPress={NavigationActions.usageExamples}>
  Usage Examples Screen
</RoundedButton>

<RoundedButton onPress={NavigationActions.apiTesting}>
  API Testing Screen
</RoundedButton>

<RoundedButton onPress={NavigationActions.theme}>
  Theme Screen
</RoundedButton>

<RoundedButton onPress={NavigationActions.deviceInfo}>
  Device Info Screen
</RoundedButton>*/
}
// @flow

import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.panther,
    textAlign: 'center'
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  footer: {
    color: Colors.frost
  },
  footerWrapper: {
    marginTop: 20
  }
})

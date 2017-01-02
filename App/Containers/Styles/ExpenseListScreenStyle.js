// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.steel
  },

  section: {
    backgroundColor: Colors.facebook
  },

  expenseRow: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },

  item: {
    flex: 1,
    color: 'black'
  },
  date: {
    color: 'black'
  },
  title: {
    color: 'black'
  },
  price: {
    color: 'black'
  }
})
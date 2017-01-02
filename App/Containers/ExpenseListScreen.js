// @flow

import React from 'react'
import { View, ListView, Text } from 'react-native'
import Price from '../Components/Price'

import styles from './Styles/ExpenseListScreenStyle'
import listViewStyles from './Styles/ListviewExampleStyle'

// import DB from '../Models/index'


export default class ExpenseListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataBlob: {},
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s1
      }),
      loaded: false,
      lala: ''
    };
  }

  componentDidMount() {
      this.setState({
        dataBlob: {
          '2016-11-22': [
            {id: 1, title: 'Lidl', price: 30, date: new Date(2016, 10, 22)},
            {id: 2, title: 'Kava', price: 40, date: new Date(2016, 10, 22)}
          ],
          '2016-12-24': [
            {id: 3, title: 'Kauflant', price: 20, date: new Date(2016, 11, 24)},
            {id: 4, title: 'Kauflant2', price: 820, date: new Date(2016, 11, 24)},
            {id: 5, title: 'Kauflant3', price: 2022, date: new Date(2016, 11, 24)},
            {id: 6, title: 'Kauflant4', price: 22190, date: new Date(2016, 11, 24)},
            {id: 7, title: 'Kauflant5', price: 10, date: new Date(2016, 11, 24)},
            {id: 8, title: 'Kauflant6', price: 2, date: new Date(2016, 11, 24)}
          ],
          '2016-12-25': [
            {id: 40, title: 'Albert', price: 50, date: new Date(2016, 11, 25)}
          ]
        }
      });
      setTimeout(() => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(this.state.dataBlob),
          loaded: true
        });
      }, 500)
  }

  renderSectionHeader(sectionData, sectionId) {
    // function formatDate(date) {
    //   const divider = '.\u00A0';
    //   const d = typeof date.getDate === 'function' ? date.toISOString() : (new Date(date)).toISOString();
    //   return [d.slice(5, 7), d.slice(8, 10), d.slice(0, 4)].join(divider);
    // }

    return (
      <View style={listViewStyles.section}>
        <Text>{sectionId}</Text>
      </View>
    )
  }

  renderItem(item) {

    return (
      <View style={styles.expenseRow}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <Price item={item} />
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          {!this.state.loaded
            ? <Text>Loading..</Text>
            : <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderItem}
              renderSectionHeader={this.renderSectionHeader}
            />
          }
        </View>
      </View>
    )
  }
  // renderFooter={this.renderFooter}

}
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Header from './components/Header';
import Category from './components/Category/Category';
import ProgressBar from './components/ProgressBar/ProgressBar';
import mock_data from './components/mock_data'; // mock_data is not a class
import styles from './components/css/styles';

const headerTitle = 'Budget';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: mock_data,
    };
  }
  render() {
    return (
      <View style={styles.centered}>
        <Header title={headerTitle} style={styles.title} />
        <ScrollView style={styles.scrollView}>
          {Object.keys(this.state.categories).map(key => (
            <View style={styles.item}>
              <View>
                <Category key={key} details={this.state.categories[key]} />
              </View>
              <ProgressBar
                style={styles.progress_bar}
                key={key}
                details={this.state.categories[key]}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default Main;

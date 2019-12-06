import React, {Component} from 'react';
import {View, ScrollView, Image, TouchableOpacity, Text} from 'react-native';
//import Header from './components/Header';
import Category from '../app/components/Category/Category';
import ProgressBar from '../app/components/ProgressBar/ProgressBar';
import mock_data from '../app/components/mock_data'; // mock_data is not a class
import styles from '../app/components/css/styles';

//const headerTitle = 'Budget';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: mock_data,
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Budget',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('AddBudget')}>
          <Image source={require('../app/components/css/images/add.png')} />
        </TouchableOpacity>
      ),
    };
  };
  render() {
    return (
      <View style={styles.centered}>
        <ScrollView style={styles.scrollView}>
          {Object.keys(this.state.categories).map(key => (
            <View style={styles.item}>
              <View>
                <Category
                  style={styles.categoryName}
                  key={key}
                  details={this.state.categories[key]}
                />
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
export default HomeScreen;

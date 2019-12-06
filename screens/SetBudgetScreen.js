import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from '../app/components/css/styles';
import ProgressBar from '../app/components/ProgressBar/ProgressBar';

class SetBudgetScreen extends Component {
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
  constructor(props) {
    super(props);
    var month = new Date().getMonth() + 1; //Current Month
    var months = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December',
    };
    this.state = {
      month: months[month],
    };
  }
  render() {
    return (
      <View style={styles.centered}>
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.headingName}>Budgets {this.state.month}</Text>
          </TouchableOpacity>
          <ProgressBar style={styles.progress_bar} />
        </ScrollView>
      </View>
    );
  }
}
export default SetBudgetScreen;

import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import styles from '../app/components/css/styles';
//import Header from '../app/components/Header';

class ShowExpenseScreen extends Component {
  static navigationOptions = {
    title: 'Transactions',
  };
  render() {
    return (
      <View style={styles.showExpenseContainer}>
        <Text>You have no expenses added yet.</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Cancel"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            style={styles.button}
            title="Add Expense"
            onPress={() => this.props.navigation.navigate('AddExpenseScreen')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export default ShowExpenseScreen;

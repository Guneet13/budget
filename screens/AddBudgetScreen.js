import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Input from '../app/components/Input';
import styles from '../app/components/css/styles';

class AddBudgetScreen extends Component {
  static navigationOptions = {
    title: 'Add Budget',
  };
  render() {
    return (
      <View style={styles.inputContainer}>
        <Text>Category</Text>
        <Input
          inputValue={inputValue}
          onChangeText={this.newInputValue}
          onDoneAddItem={this.onDoneAddItem}
        />
      </View>
    );
  }
}
export default AddBudgetScreen;

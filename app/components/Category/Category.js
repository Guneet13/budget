import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {formatPrice} from '../helpers';
import styles from '../css/styles';
import {withNavigation} from 'react-navigation';
//import AddCategoryForm from './AddCategoryForm';
//import {Dropdown} from 'react-native-material-dropdown';

class Category extends Component {
  render(props) {
    const {name, expenses} = this.props.details;

    return (
      <View style={styles.categoryContainer}>
        <View style={styles.categoryColumn}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Expenses')}>
            <Text style={styles.headingName}>{name}</Text>
          </TouchableOpacity>
          <Text style={styles.expenses}>{formatPrice(expenses)} left</Text>
        </View>
      </View>
    );
  }
}
export default withNavigation(Category);

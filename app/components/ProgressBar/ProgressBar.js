import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {formatPrice} from '../helpers';
import styles from '../css/styles';

class ProgressBar extends Component {
  render() {
    const {amount, expenses} = this.props.details;
    return (
      <View style={styles.progress_container}>
        <Text style={styles.progressText}>
          {formatPrice(amount - expenses)} / {formatPrice(amount)}
        </Text>
      </View>
    );
  }
}
export default ProgressBar;

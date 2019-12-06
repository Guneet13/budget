import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class ListItem extends Component {
  render() {
    const text = this.props;
    return (
      <View>
        <Text>Guneet {text}</Text>
      </View>
    );
  }
}

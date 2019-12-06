import React, {Component} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Alert,
  AsyncStorage,
} from 'react-native';
import styles from '../app/components/css/styles';
import firebase from 'firebase';
import User from '../User';

export default class LoginScreen extends Component {
  handleChange = key => val => {
    this.setState({[key]: val});
  };
  submitForm = async () => {
    if (this.state.phone.length < 10) {
      Alert.alert('Error', 'Invalid Phone number');
    } else if (this.state.name.length < 3) {
      Alert.alert('Error', 'Invalid name');
    } else {
      this.props.navigation.navigate('App');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          onChangeText={this.handleChange('phone')}
        />
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={this.handleChange('name')}
        />
        <TouchableOpacity onPress={this.submitForm}>
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

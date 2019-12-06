import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({inputValue, onChangeText}) => (
  <TextInput
    style={styles.input}
    value={inputValue}
    onChangeText={onChangeText}
    placeholder="Add text here"
    multiline={true}
    autoCapitalize="sentences"
    underlineColorAndroid="black"
    selectionColor={'black'}
    maxLength={30}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit={true}
  />
);
const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
});
export default Input;

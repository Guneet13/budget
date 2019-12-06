import React, {Component} from 'react';
import {View} from 'react-native';
import {DialogContent, DialogTitle} from 'react-native-popup-dialog';
import Input from './Input';

const PopUpDialog = ({inputValue, onChangeText}) => (
  <DialogContent>
    <View>
      <DialogTitle title="Enter the Expense Name" />
      <Input inputValue={inputValue} onChangeText={this.onChangeText} />
    </View>
  </DialogContent>
);
export default PopUpDialog;

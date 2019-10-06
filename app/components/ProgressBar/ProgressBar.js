import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Category = 'Food';

export default function ProgressBar() {
  return (
    <View styles={styles.progress_container}>
      <Text>{Category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  progress_container: {
    fontSize: 22,
  },
});

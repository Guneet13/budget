import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar/ProgressBar';

const headerTitle = 'Budget';

class Main extends Component {
  render() {
    return (
      <View style={styles.centered}>
        <Header title={headerTitle} style={styles.title} />
        <ProgressBar style={styles.progress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
  },
  title: {
    width: 250,
    height: 250,
  },
  progress: {
    width: 250,
    height: 250,
  },
});

export default Main;

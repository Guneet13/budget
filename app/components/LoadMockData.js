import React, {Component} from 'react';
import {View, Button} from 'react-native';
import styles from './css/styles';
//import AddCategoryForm from './AddCategoryForm';
//import {Dropdown} from 'react-native-material-dropdown';

class LoadMockData extends Component {
  render() {
    return (
      <View style={styles.loadContainer}>
        <Button
          style={styles.button_load}
          onPress={this.props.loadMockData}
          title="Load Categories"
        />
      </View>
    );
  }
}

export default LoadMockData;

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class AddCategoryForm extends Component {
  createCategory = event => {
    //1. stop the form from submitting
    event.preventDefault();
  };

  render() {
    return (
      <View style={styles.addForm}>
        <form onSubmit={this.createCategory}>
          <input name="name" type="text" placeholder="Name" />
          <input name="amount" type="text" placeholder="Amount" />
          <input name="expenses" type="text" placeholder="Expenses" />
          <button type="submit">Add Category</button>
        </form>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  addForm: {
    borderWidth: 1,
    lineHeight: 1,
    fontSize: 2,
  },
  loadContainer: {
    marginTop: 50,
  },
  button_load: {
    fontSize: 20,
    color: 'grey',
  },
});
export default AddCategoryForm;

import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  View,
  AsyncStorage,
} from 'react-native';
import styles from '../app/components/css/styles';
import RNPickerSelect from 'react-native-picker-select';
import Input from '../app/components/Input';
import {DialogContent, Dialog, DialogTitle} from 'react-native-popup-dialog';
import DatePicker from 'react-native-datepicker';

const categories = [
  {
    label: 'Food & Dining',
    value: 'Food & Dining',
  },
  {
    label: 'Auto & Transport',
    value: 'Auto & Transport',
  },
  {
    label: 'Health & Fitness',
    value: 'Health & Fitness',
  },
  {
    label: 'Entertainment',
    value: 'Entertainment',
  },
  {
    label: 'Kids',
    value: 'Kids',
  },
  {
    label: 'Travel',
    value: 'Travel',
  },
  {
    label: 'Shopping',
    value: 'Shopping',
  },
  {
    label: 'Charity',
    value: 'Charity',
  },
  {
    label: 'Vacation',
    value: 'Vacation',
  },
];
class AddExpenseScreen extends Component {
  static navigationOptions = {
    title: 'Add Expense',
  };
  constructor(props) {
    super(props);
    this.state = {
      expense: '',
      amount: '',
      date: '',
      category: '',
      expenseVisible: false,
      amountVisible: false,
      dateVisible: false,
      expenseAddition: {},
    };
  }
  newAmount = value => {
    this.setState({
      amount: value,
    });
  };
  newExpense = value => {
    this.setState({
      expense: value,
    });
  };
  //onSaveExpenses = () => {
  //const {expense, amount, date, category} = this.state;
  //if(expense !== '' || amount !== '' || date !== '' || category !== '')
  //};
  render() {
    const {expense, amount, date} = this.state;
    return (
      <SafeAreaView>
        <TouchableOpacity
          style={styles.addExpenseContainer}
          onPress={() => {
            this.setState({amountVisible: true});
          }}>
          <Text style={styles.expenseText}>AMOUNT</Text>
          {amount ? (
            <View style={styles.addExpenseContainerRow}>
              <Text>{amount}</Text>
            </View>
          ) : (
            <View style={styles.addExpenseContainerRow}>
              <Text>Add Amount</Text>
            </View>
          )}
          <Dialog
            visible={this.state.amountVisible}
            onTouchOutside={() => {
              this.setState({amountVisible: false});
            }}>
            <DialogContent>
              <View>
                <DialogTitle title="Enter the Expense Amount" />
                <Input inputValue={amount} onChangeText={this.newAmount} />
              </View>
            </DialogContent>
          </Dialog>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addExpenseContainer}
          onPress={() => {
            this.setState({dateVisible: true});
          }}>
          <Text style={styles.expenseText}>DATE</Text>
          {date ? (
            <View style={styles.addExpenseContainerRow}>
              <Text>{date}</Text>
            </View>
          ) : (
            <View style={styles.addExpenseContainerRow}>
              <Text>Add date</Text>
            </View>
          )}
          <Dialog
            visible={this.state.dateVisible}
            onTouchOutside={() => {
              this.setState({dateVisible: false});
            }}>
            <DialogContent>
              <View>
                <DatePicker
                  style={{width: 200}}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2019-01-01"
                  maxDate="2029-12-31"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={date => {
                    this.setState({date: date});
                  }}
                />
              </View>
            </DialogContent>
          </Dialog>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addExpenseContainer}
          onPress={() => {
            this.setState({expenseVisible: true});
          }}>
          <Text style={styles.expenseText}>EXPENSE NAME</Text>
          {expense ? (
            <View style={styles.addExpenseContainerRow}>
              <Text>{expense}</Text>
            </View>
          ) : (
            <View style={styles.addExpenseContainerRow}>
              <Text>Add expense name</Text>
            </View>
          )}
          <Dialog
            visible={this.state.expenseVisible}
            onTouchOutside={() => {
              this.setState({expenseVisible: false});
            }}>
            <DialogContent>
              <View>
                <DialogTitle title="Enter the Expense Name" />
                <Input inputValue={expense} onChangeText={this.newExpense} />
              </View>
            </DialogContent>
          </Dialog>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addExpenseContainer}>
          <Text style={styles.expenseText}>CATEGORY</Text>
          <RNPickerSelect
            style={styles.inputCategoryPicker}
            placeholder={{
              label: 'Select a category',
              color: 'red',
              fontSize: 20,
              paddingRight: 30,
              borderWidth: 1,
              borderColor: 'gray',
            }}
            selectedValue={this.state.category}
            onValueChange={value => this.setState({category: value})}
            items={categories}
            InputAccessoryView={() => null}
            value={this.state.category}
          />
        </TouchableOpacity>
        <View style={styles.addExpenseContainer}>
          <Button
            style={styles.button}
            title="SAVE"
            onPress={() => this.props.navigation.navigate('ShowExpenseScreen')}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default AddExpenseScreen;

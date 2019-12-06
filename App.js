/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ShowExpenseScreen from './screens/ShowExpenseScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import SetBudgetScreen from './screens/SetBudgetScreen';
import AddBudgetScreen from './screens/AddBudgetScreen';

const AppStack = createStackNavigator({
  SetBudget: SetBudgetScreen,
  Home: HomeScreen,
  AddBudget: AddBudgetScreen,
});
const ExpenseStack = createStackNavigator({
  ShowExpenseScreen: ShowExpenseScreen,
  AddExpenseScreen: AddExpenseScreen,
});

export default createAppContainer(
  createSwitchNavigator({
    App: AppStack,
    Expenses: ExpenseStack,
  }),
);

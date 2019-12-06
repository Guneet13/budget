import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
  },
  title: {
    width: 250,
    height: 250,
  },
  progress_bar: {
    width: 100,
    height: 100,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    margin: 10,
  },
  categoryContainer: {
    width: width - 90,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: 'white',
    height: width / 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  categoryColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 1.5,
  },
  headingName: {
    color: 'black',
    fontSize: 22,
    fontWeight: '100',
    marginVertical: 5,
  },
  expenses: {
    color: 'black',
    fontSize: 22,
    fontWeight: '100',
    marginVertical: 5,
  },
  progress_container: {
    fontSize: 22,
    width: width - 90,
    height: width / 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#C0C0C0',
  },
  progressText: {
    flex: 1,
    fontSize: 20,
    fontWeight: '100',
    color: 'white',
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  headerContainer: {
    width: width - 90,
    marginTop: 40,
  },
  headerText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    width: '90%',
    marginBottom: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderRadius: 20,
    padding: 10,
    height: 48,
    borderRightColor: 'black',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    borderWidth: 1,
    marginVertical: 15,
    color: 'black',
    borderRadius: 8,
    marginTop: 20,
    borderRightColor: 'black',
  },
  showExpenseContainer: {
    backgroundColor: 'white',
    flexDirection: 'column',
    width: width - 10,
    height: width / 10,
    padding: 10,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addForm: {
    fontSize: 20,
  },
  loadContainer: {
    marginTop: 50,
    borderWidth: 1,
    lineHeight: 1,
  },
  button_load: {
    fontSize: 20,
    color: 'grey',
  },
  addExpenseContainer: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: width / 4,
    width: width,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
  addExpenseContainerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    fontSize: 25,
    height: width / 7,
    width: width,
  },
  inputCategoryPicker: {
    fontSize: 19,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: width / 5,
    width: width,
    borderColor: 'red',
    borderRadius: 4,
  },
  expenseText: {
    fontSize: 20,
  },
});

export default styles;

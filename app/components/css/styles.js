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
  categoryName: {
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
    borderRightColor: 'black',
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
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
    marginVertical: 5,
    marginHorizontal: 5,
  },
});

export default styles;

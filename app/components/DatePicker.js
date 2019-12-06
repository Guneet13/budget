import React from 'react';
import {StyleSheet, Text} from 'react-native';

import ModalDatePicker from 'react-native-datepicker-modal';

const DatePicker = ({style, ...props}) => (
  <ModalDatePicker
    style={[styles.container, style]}
    renderDate={({year, month, day, date}) => {
      if (!date) {
        return (
          <Text style={[styles.text, styles.placeholderText]}>
            Enter Date of Expense
          </Text>
        );
      }

      const dateStr = `${day}-${month}-${year}`;
      return <Text style={styles.text}>{dateStr}</Text>;
    }}
    {...props}
  />
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderRadius: 2,
    height: 50,
  },
  placeholderText: {
    color: 'black',
  },
  text: {
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 5,
    fontFamily: 'Montserrat',
    fontSize: 20,
    color: 'black',
  },
});

export default DatePicker;

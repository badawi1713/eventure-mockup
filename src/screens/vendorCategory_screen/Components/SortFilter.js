import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SortFilter = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Filter</Text>
        <Icon size={15} name="filter" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Sort</Text>
        <Icon size={15} name="sort-amount-down" />
      </TouchableOpacity>
    </View>
  );
};

export default SortFilter;

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    backgroundColor: '#25274D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#EEEEEE',
    width: '46%',
    borderRadius: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  buttonTitle: {
    fontSize: 18,
  },
});

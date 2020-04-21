import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderVendorLists = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchBar}>
        <Icon color={'#7E7E7E'} name="search" size={15} />
        <TextInput style={styles.textInput} placeholder="Search Vendors" />
      </View>
    </View>
  );
};

export default HeaderVendorLists;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  searchBar: {
    borderRadius: 6,
    borderWidth: 0.4,
    backgroundColor: '#FFF',
    paddingLeft: 20,
    paddingRight: 30,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    paddingLeft: 15,
    fontSize: 15,
  },
});

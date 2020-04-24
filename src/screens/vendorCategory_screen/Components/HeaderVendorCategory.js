import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderVendorCategory = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Icon name="arrow-left" size={20} />
      </TouchableOpacity>
      <View style={styles.searchBar}>
        <Icon color={'#7E7E7E'} name="search" size={15} />
        <TextInput style={styles.textInput} placeholder="Search Vendors" />
      </View>
      <View style={styles.rightIconTopbar}>
        <Icon color={'#7E7E7E'} name="bell" size={20} />
        <Icon color={'#7E7E7E'} name="map-marker-alt" size={20} />
      </View>
    </View>
  );
};

export default HeaderVendorCategory;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchBar: {
    borderRadius: 6,
    borderWidth: 0.4,
    backgroundColor: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,
    width: '65%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIconTopbar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '15%',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '100%',
    paddingLeft: 15,
    fontSize: 15,
  },
});

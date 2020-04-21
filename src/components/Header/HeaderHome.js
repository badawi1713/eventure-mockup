import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderHome = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchBar}>
        <Icon color={'#7E7E7E'} name="search" size={15} />
        <TextInput style={styles.textInput} placeholder="Search Vendors" />
      </View>
      <Icon color={'#7E7E7E'} name="bell" size={20} />
      <Icon color={'#7E7E7E'} name="comment-dots" size={20} />
    </View>
  );
};

export default HeaderHome;

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
    width: '75%',
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

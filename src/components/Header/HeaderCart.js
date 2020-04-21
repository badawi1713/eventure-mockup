import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderCart = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} color="#7E7E7E" name="history" size={20} />
        <Icon
          style={styles.icon}
          color="#7E7E7E"
          name="sort-amount-down"
          size={20}
        />
      </View>
    </View>
  );
};

export default HeaderCart;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: 20,
  },
});

import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderCart = props => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Icon style={styles.icon} color="#7E7E7E" name="history" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.setModalVisible}>
          <Icon
            style={styles.icon}
            color="#7E7E7E"
            name="sort-amount-down"
            size={20}
          />
        </TouchableOpacity>
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

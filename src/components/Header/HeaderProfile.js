import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderProfile = props => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} color="#7E7E7E" name="bell" size={20} />
        <TouchableOpacity onPress={props.settingNav}>
          <Icon style={styles.icon} color="#7E7E7E" name="cog" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderProfile;

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

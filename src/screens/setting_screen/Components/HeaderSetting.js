import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderSettings = props => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={props.backButton}>
          <Icon
            style={styles.icon}
            color="#7E7E7E"
            name="arrow-left"
            size={20}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 22, color: '#7E7E7E'}}>Settings</Text>
      </View>
    </View>
  );
};

export default HeaderSettings;

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
    justifyContent: 'flex-start',
  },
  icon: {
    marginRight: 20,
  },
});

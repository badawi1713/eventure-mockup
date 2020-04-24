/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SortModal = props => {
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <View style={styles.modalContainer}>
        <View style={styles.backdrop}>
          <TouchableOpacity onPress={props.hideModal} style={styles.backdrop} />
        </View>
        <View style={styles.modalBox}>
          <View style={styles.topHorizontalLine} />
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.headerIcon}
              onPress={props.hideModal}>
              <Icon size={18} color="#2B2B2B" name="times" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Sort</Text>
          </View>
          <View style={styles.optionSection}>
            <View style={styles.optionContainer}>
              <Text style={{fontSize: 16}}>Status</Text>
              <TouchableOpacity style={styles.iconBorderRadius}>
                <Icon name="chevron-right" />
              </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine} />

            <View style={styles.optionContainer}>
              <Text style={{fontSize: 16}}>Oldest</Text>
              <TouchableOpacity style={styles.iconBorderRadius}>
                <Icon name="chevron-right" />
              </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine} />

            <View style={styles.optionContainer}>
              <Text style={{fontSize: 16}}>Latest</Text>
              <TouchableOpacity style={styles.iconBorderRadius}>
                <Icon name="chevron-right" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SortModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    backgroundColor: 'transparent',
    height: '100%',
  },
  modalBox: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: '#FFF',
    height: 230,
  },
  topHorizontalLine: {
    borderWidth: 2,
    borderColor: '#E4E4E4',
    borderRadius: 20,
    width: 50,
    marginVertical: 10,
    alignSelf: 'center',
  },
  headerContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#E4E4E4',
    paddingBottom: 10,
    borderBottomWidth: 1,
    height: '20%',
  },
  headerTitle: {
    fontSize: 18,
    color: '#2B2B2B',
    width: 178,
  },
  headerIcon: {
    padding: 10,
  },
  optionSection: {
    height: '80%',
    backgroundColor: '#F9F9F9',
    paddingVertical: 15,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#E4E4E4',
    marginVertical: 15,
  },
  iconBorderRadius: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 20,
    height: 20,
    borderWidth: 0.5,
    borderColor: 'black',
  },
});

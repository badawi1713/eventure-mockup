/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import HeaderCart from '../../components/Header/HeaderCart';
import Accordion from './Accordion';
import SortModal from './SortModal';

const CartScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const cartData = [
    {
      id: 1,
      name: 'Packet A',
      vendorName: "D'Pawon",
      status: 'Confirmed',
      paymentDate: 'test',
      paymentTime: 'test',
      deliveryAddress: 'Jl. Kaliurang KM. 12, Ngaglik, Sleman',
      deliveryDate: '18/05/2020',
      deliveryTime: '09:30 WIB',
      total: 100,
    },
    {
      id: 2,
      name: 'Packet B',
      vendorName: "D'Pawon",
      status: 'Confirmed',
      paymentDate: 'test',
      paymentTime: 'test',
      deliveryAddress: 'Jl. Kaliurang KM. 12, Ngaglik, Sleman',
      deliveryDate: '18/05/2020',
      deliveryTime: '09:30 WIB',
      total: 100,
    },
    {
      id: 3,
      name: 'Packet C',
      vendorName: "D'Pawon",
      status: 'Confirmed',
      paymentDate: 'test',
      paymentTime: 'test',
      deliveryAddress: 'Jl. Kaliurang KM. 12, Ngaglik, Sleman',
      deliveryDate: '18/05/2020',
      deliveryTime: '09:30 WIB',
      total: 100,
    },
  ];

  const renderCartLists = () => {
    const items = [];
    let item;
    for (item of cartData) {
      items.push(<Accordion items={item} />);
    }
    return items;
  };

  return (
    <View style={styles.container}>
      <HeaderCart
        setModalVisible={() => {
          setModalVisible(true);
        }}
      />

      <View style={styles.headerBackground} />
      <View style={styles.headerText}>
        <Text style={{fontSize: 24, paddingBottom: 5}}>Cart</Text>
        <Text style={{fontSize: 14}}>
          Showing your order item to be checkout
        </Text>
      </View>
      <View style={styles.horizontalLine} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.orderScrollContainer}>
        <View style={{marginTop: 20}}>{renderCartLists()}</View>
      </ScrollView>
      <SortModal
        visible={modalVisible}
        hideModal={() => {
          setModalVisible(!modalVisible);
        }}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerBackground: {
    top: 60,
    zIndex: 0,
    position: 'absolute',
    backgroundColor: '#FFDD00',
    width: '100%',
    height: 250,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  headerText: {
    marginTop: 30,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  horizontalLine: {
    zIndex: 1,
    height: 1,
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: '#707070',
  },
  orderScrollContainer: {
    zIndex: 1,
    paddingHorizontal: 20,
    width: '100%',
  },
  modalContainer: {
    height: 200,
  },
});

import React from 'react';
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HeaderCart from '../../components/Header/HeaderCart';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderCart />
      <View style={styles.headerBackground}>
        <Text style={{fontSize: 24, paddingBottom: 5}}>Cart</Text>
        <Text style={{fontSize: 14}}>
          Showing your order item to be checkout
        </Text>
        <View style={styles.horizontalLine} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.orderScrollContainer}>
        <View style={styles.orderCardContainer}>
          <View style={styles.packetItemNameContainer}>
            <Text style={{fontSize: 18}}>Item's Name</Text>
            <Text>Vendor's Name</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://2heartsweddings.net/wp-content/uploads/2015/08/Windwood-8.jpg',
              }}
            />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.vendorTitle}>
              <View style={styles.statusContainer}>
                <Text>Waiting</Text>
              </View>
              <View style={styles.duePaymentContainer}>
                <View>
                  <Icon name="clock" size={10} />
                </View>
                <View>
                  <Text>Due Payment:</Text>
                  <Text>30/01/2020 19:59 WIB</Text>
                </View>
              </View>
            </View>
            <View style={styles.orderInfo}>
              <View style={styles.orderDetails}>
                <Text>Order Details</Text>
                <View style={styles.detailIconBorder}>
                  <Icon name="chevron-down" size={10} />
                </View>
              </View>
              <View style={styles.checkoutContainer}>
                <Text style={{color: '#FFF'}}>Checkout</Text>
                <View style={styles.checkoutIconBorder}>
                  <Icon color={'#FFF'} name="chevron-right" size={10} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.orderCardContainer}>
          <View style={styles.packetItemNameContainer}>
            <Text style={{fontSize: 18}}>Item's Name</Text>
            <Text>Vendor's Name</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://2heartsweddings.net/wp-content/uploads/2015/08/Windwood-8.jpg',
              }}
            />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.vendorTitle}>
              <View style={styles.statusContainer}>
                <Text>Waiting</Text>
              </View>
              <View style={styles.duePaymentContainer}>
                <View>
                  <Icon name="clock" size={10} />
                </View>
                <View>
                  <Text>Due Payment:</Text>
                  <Text>30/01/2020 19:59 WIB</Text>
                </View>
              </View>
            </View>
            <View style={styles.orderInfo}>
              <View style={styles.orderDetails}>
                <Text>Order Details</Text>
                <View style={styles.detailIconBorder}>
                  <Icon name="chevron-down" size={10} />
                </View>
              </View>
              <View style={styles.checkoutContainer}>
                <Text style={{color: '#FFF'}}>Checkout</Text>
                <View style={styles.checkoutIconBorder}>
                  <Icon color={'#FFF'} name="chevron-right" size={10} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: -1,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  headerBackground: {
    position: 'absolute',
    top: 60,
    zIndex: 0,
    width: '100%',
    height: 260,
    backgroundColor: '#FFD700',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  horizontalLine: {
    paddingHorizontal: 20,
    paddingTop: 12,
    borderBottomWidth: 1,
    borderColor: '#707070',
  },
  orderScrollContainer: {
    paddingVertical: 10,
    marginTop: 100,
    zIndex: 1,
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  orderCardContainer: {
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#ACACAC',
    backgroundColor: '#FFF',
    height: 300,
    paddingBottom: 5,
    marginBottom: 15,
  },
  packetItemNameContainer: {
    padding: 10,
  },
  imageContainer: {
    backgroundColor: '#ACACAC',
    width: '100%',
    height: '45%',
  },
  vendorImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    width: '100%',
    height: '35%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  vendorTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  statusContainer: {
    backgroundColor: '#FFD700',
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '35%',
    alignItems: 'center',
  },
  orderInfo: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  duePaymentContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '55%',
    justifyContent: 'space-between',
  },
  orderDetails: {
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
  },
  detailIconBorder: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#25274D',
    borderRadius: 9,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    width: '55%',
    height: 30,
    backgroundColor: '#25274D',
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  checkoutIconBorder: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 9,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

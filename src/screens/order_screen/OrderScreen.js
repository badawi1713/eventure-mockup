import React from 'react';
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';

import HeaderOrderLists from '../../components/Header/HeaderOrderLists';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderOrderLists />
      <View style={styles.headerBackground}>
        <Text style={{fontSize: 24, paddingBottom: 5}}>Order Lists</Text>
        <Text style={{fontSize: 14}}>
          Showing your order lists to be confirmed
        </Text>
        <View style={styles.horizontalLine} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.orderScrollContainer}>
        <View style={styles.orderCardContainer}>
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
              <Text style={{fontSize: 16}}>Vendor's Name</Text>
              <View style={styles.statusContainer}>
                <Text>Waiting</Text>
              </View>
            </View>
            <View style={styles.orderInfo}>
              <Text>Catering</Text>
              <Text>31/12/2019</Text>
            </View>
          </View>
        </View>
        <View style={styles.orderCardContainer}>
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
              <Text style={{fontSize: 16}}>Vendor's Name</Text>
              <View style={styles.statusContainer}>
                <Text>Waiting</Text>
              </View>
            </View>
            <View style={styles.orderInfo}>
              <Text>Catering</Text>
              <Text>31/12/2019</Text>
            </View>
          </View>
        </View>
        <View style={styles.orderCardContainer}>
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
              <Text style={{fontSize: 16}}>Vendor's Name</Text>
              <View style={styles.statusContainer}>
                <Text>Waiting</Text>
              </View>
            </View>
            <View style={styles.orderInfo}>
              <Text>Catering</Text>
              <Text>31/12/2019</Text>
            </View>
          </View>
        </View>
        <View style={styles.orderCardContainer}>
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
              <Text style={{fontSize: 16}}>Vendor's Name</Text>
              <View style={styles.statusContainer}>
                <Text>Waiting</Text>
              </View>
            </View>
            <View style={styles.orderInfo}>
              <Text>Catering</Text>
              <Text>31/12/2019</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderScreen;

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
    paddingTop: 10,
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
    height: 250,
    paddingBottom: 5,
    marginBottom: 15,
  },
  imageContainer: {
    backgroundColor: '#ACACAC',
    width: '100%',
    height: '65%',
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
  },
  vendorImage: {
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
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
  },
});

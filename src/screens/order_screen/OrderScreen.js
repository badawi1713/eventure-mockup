import React from 'react';
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';

import HeaderOrderLists from '../../components/Header/HeaderOrderLists';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderOrderLists />
      <View style={styles.headerBackground} />
      <View style={styles.headerText}>
        <Text style={{fontSize: 24, paddingBottom: 5}}>Order Lists</Text>
        <Text style={{fontSize: 14}}>
          Showing your order lists to be confirmed
        </Text>
      </View>
      <View style={styles.horizontalLine} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.orderScrollContainer}>
        <View style={{marginTop: 20}}>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderScreen;

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
  orderCardContainer: {
    marginVertical: 10,

    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#ACACAC',
    backgroundColor: '#FFF',
    height: 250,
    paddingBottom: 5,
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

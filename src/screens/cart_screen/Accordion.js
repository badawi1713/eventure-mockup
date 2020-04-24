/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Platform,
  LayoutAnimation,
  UIManager,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const Accordion = props => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View key={props.items.id} style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.vendorNameSection}>
          <Text style={styles.itemName}>{props.items.name}</Text>
          <Text style={styles.vendorName}>{props.items.vendorName}</Text>
        </View>
        <View style={styles.itemImageContainer}>
          <Image
            style={styles.itemImage}
            source={{
              uri:
                'https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/4/2018/02/forking-clean-healthy-catering-jakarta.jpg',
            }}
          />
        </View>
        <View style={styles.paymentStatusSection}>
          <View style={styles.statusContainer}>
            <Text>{props.items.status}</Text>
          </View>
          <View style={styles.duePaymentContainer}>
            <Icon style={{marginRight: 8}} name="clock" size={14} />
            <View>
              <Text>Due Payment:</Text>
              <Text>30/01/2020 19:59 WIB</Text>
            </View>
          </View>
        </View>
        <View style={styles.detailSection}>
          <View style={styles.orderDetailsContainer}>
            <Text>Order Details</Text>
            <TouchableOpacity
              onPress={() => toggleExpand()}
              style={styles.iconCircleBorder}>
              <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={12} />
            </TouchableOpacity>
          </View>
          <View style={styles.checkoutContainer}>
            <Text style={{color: '#FFF'}}>Checkout</Text>
            <View style={[styles.iconCircleBorder, {borderColor: '#FFF'}]}>
              <Icon color="#FFF" name="chevron-right" size={12} />
            </View>
          </View>
        </View>
        {expanded && (
          <View style={styles.cartDetail}>
            <Text>{props.items.deliveryAddress}</Text>
            <View style={styles.deliveryTime}>
              <Text style={{marginRight: 10}}>{props.items.deliveryDate}</Text>
              <Text>{props.items.deliveryTime}</Text>
            </View>
            <Text>{props.items.total}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    flex: 1,
    marginVertical: 10,
  },
  cardContainer: {
    backgroundColor: '#fff',
    height: '100%',
    borderWidth: 0.5,
    borderRadius: 6,
    paddingVertical: 10,
    borderColor: '#ACACAC',
  },
  vendorNameSection: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  itemName: {
    fontWeight: '100',
    fontSize: 20,
  },
  vendorName: {
    fontSize: 16,
    marginBottom: 5,
  },
  itemImageContainer: {
    width: '100%',
    height: 150,
    backgroundColor: '#EEE',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  paymentStatusSection: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 10,
  },
  statusContainer: {
    backgroundColor: '#03E421',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  duePaymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailSection: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 10,
  },
  orderDetailsContainer: {
    flexDirection: 'row',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkoutContainer: {
    flexDirection: 'row',
    backgroundColor: '#25274D',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  iconCircleBorder: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  deliveryTime: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});

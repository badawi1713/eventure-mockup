import React from 'react';
import {View, ScrollView, Image, StyleSheet, Text} from 'react-native';
import HeaderVendorCategory from './Components/HeaderVendorCategory';
import SortFilter from './Components/SortFilter';
const VendorByCategoryScreen = props => {
  return (
    <View>
      <HeaderVendorCategory />
      <SortFilter />
      <Text>Catering Vendor</Text>
    </View>
  );
};

export default VendorByCategoryScreen;

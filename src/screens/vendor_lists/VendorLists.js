import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import HeaderVendorLists from '../../components/Header/HeaderVendorLists';

const VendorLists = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}
      style={styles.container}>
      <HeaderVendorLists />
      <View style={styles.headerText}>
        <Text style={{fontSize: 20}}>Browse Vendor Services</Text>
        <Text style={{fontSize: 14}}>Showing all vendor categories</Text>
      </View>
      <View style={styles.vendorListContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.vendorItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://2heartsweddings.net/wp-content/uploads/2015/08/Windwood-8.jpg',
              }}
            />
          </View>
          <Text style={styles.vendorTitle}>Catering</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.vendorItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://www.namalonews.com/wp-content/uploads/2019/05/Jasa-Studio-Foto.02.jpg',
              }}
            />
          </View>
          <Text style={styles.vendorTitle}>Photographer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.vendorItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_762,q_50,w_1908/v1/clients/hendricks/Wedding_Venue_Table_Settings_by_Sarah_Crail_313100b6-35a7-4f7d-98a2-1dd1c6f19c63.gif',
              }}
            />
          </View>
          <Text style={styles.vendorTitle}>Venue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.vendorItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://rizkaedmanda.com/wp-content/uploads/2017/08/IMG_0382.jpg',
              }}
            />
          </View>
          <Text style={styles.vendorTitle}>Wedding</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.vendorItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://alexandra.bridestory.com/image/upload/assets/bluebelle-invitations-1537926184-SJQ8EwuYX.png',
              }}
            />
          </View>
          <Text style={styles.vendorTitle}>Invitations</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.vendorItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://thebridedept.s3-ap-southeast-1.amazonaws.com/2018/03/dscf2418-1449127823.jpg',
              }}
            />
          </View>
          <Text style={styles.vendorTitle}>MC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.vendorItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://thebridedept.s3-ap-southeast-1.amazonaws.com/2018/03/ambil-5_resized-1448002355.jpg',
              }}
            />
          </View>
          <Text style={styles.vendorTitle}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.vendorItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://www.videoyourway.com/wp-content/uploads/2019/01/videographer-1024x585.jpg',
              }}
            />
          </View>
          <Text style={styles.vendorTitle}>Videographer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.vendorItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://balishukawedding.com/sites/default/files/gallery/arch%20flower%2010.jpg',
              }}
            />
          </View>
          <Text style={styles.vendorTitle}>Decoration</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.vendorItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/m6Wii1U04K.jpg',
              }}
            />
          </View>
          <Text style={styles.vendorTitle}>Gifts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.vendorItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://image.wedmegood.com/resized/500X/uploads/member/31123/1451553956_Jeenas_Make_Up_Affair_Bridal_Makeup_Studio_005.jpg',
              }}
            />
          </View>
          <Text style={styles.vendorTitle}>Make Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.vendorItemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.vendorImage}
              source={{
                uri:
                  'https://zellycherry.files.wordpress.com/2015/05/flowers-vendor.jpg',
              }}
            />
          </View>
          <Text style={styles.vendorTitle}>Flowers</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default VendorLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    height: '100%',
  },
  headerText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  vendorListContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vendorItemContainer: {
    width: '48%',
    height: 125,
    backgroundColor: '#25274D',
    borderRadius: 6,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'column',
  },
  imageContainer: {
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    width: '100%',
    height: '70%',
    backgroundColor: '#EEE',
    marginBottom: 10,
  },
  vendorImage: {
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  vendorTitle: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

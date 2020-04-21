import React from 'react';
import {
  ScrollView,
  ImageBackground,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HeaderProfile from '../../components/Header/HeaderProfile';
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderProfile />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <ImageBackground
            style={styles.imageBackground}
            source={{
              uri:
                'https://ak2.picdn.net/shutterstock/videos/6086642/thumb/1.jpg',
            }}>
            <View style={styles.headerContent}>
              <View style={styles.profileImageContainer}>
                <Image
                  style={styles.profileImage}
                  source={{
                    uri:
                      'https://miro.medium.com/max/3150/1*igO2kAkuVkZxS0Enj-ocKQ.jpeg',
                  }}
                />
              </View>
              <View style={styles.profileNameContainer}>
                <Text style={styles.profileNameText}>Dzaky Badawi</Text>
              </View>
              <View style={styles.profileJoinedContainer}>
                <Icon style={styles.calendarIcon} size={20} name="calendar" />
                <Text style={styles.joinedText}>Joined December 2019</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.menuContent}>
            <View style={styles.menuItems}>
              <View style={styles.groupItemsMenu}>
                <Icon name="user" size={25} />
                <Text style={styles.menuText}>Profile</Text>
              </View>
              <View style={styles.iconBorder}>
                <Icon
                  style={styles.iconChevronRight}
                  name="chevron-right"
                  size={15}
                />
              </View>
            </View>
            <View style={styles.borderBottomLine} />
          </View>
          <View style={styles.menuContent}>
            <View style={styles.menuItems}>
              <View style={styles.groupItemsMenu}>
                <Icon name="receipt" size={25} />
                <Text style={styles.menuText}>Waiting for Payment</Text>
              </View>
              <View style={styles.iconBorder}>
                <Icon
                  style={styles.iconChevronRight}
                  name="chevron-right"
                  size={15}
                />
              </View>
            </View>
            <View style={styles.borderBottomLine} />
          </View>
          <View style={styles.menuContent}>
            <View style={styles.menuItems}>
              <View style={styles.groupItemsMenu}>
                <Icon name="bookmark" size={25} />
                <Text style={styles.menuText}>Wishlist</Text>
              </View>
              <View style={styles.iconBorder}>
                <Icon
                  style={styles.iconChevronRight}
                  name="chevron-right"
                  size={15}
                />
              </View>
            </View>
            <View style={styles.borderBottomLine} />
          </View>
          <View style={styles.menuContent}>
            <View style={styles.menuItems}>
              <View style={styles.groupItemsMenu}>
                <Icon name="star" size={25} />
                <Text style={styles.menuText}>My Review</Text>
              </View>
              <View style={styles.iconBorder}>
                <Icon
                  style={styles.iconChevronRight}
                  name="chevron-right"
                  size={15}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.eventureText}>EVENTURE</Text>
          <Text style={styles.versionText}>v0.00.1</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#EEE',
  },
  headerContainer: {
    height: 250,
    backgroundColor: '#EEE',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerContent: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 25,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  profileNameContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  profileNameText: {
    color: '#FFF',
    fontSize: 22,
  },
  profileJoinedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    color: '#FFF',
    marginRight: 10,
  },
  joinedText: {
    color: '#FFF',
    fontSize: 16,
  },
  menuContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#FFF',
    height: 370,
  },
  menuText: {
    marginLeft: 20,
    fontSize: 16,
  },
  menuContent: {
    marginBottom: 35,
    height: 55,
    justifyContent: 'space-between',
  },
  menuItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  groupItemsMenu: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconBorder: {
    borderWidth: 1,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  iconChevronRight: {
    alignSelf: 'center',
  },
  borderBottomLine: {
    borderBottomWidth: 1,
    borderColor: '#707070',
  },
  footerContainer: {
    backgroundColor: '#EEEEEE',
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  eventureText: {
    fontSize: 18,
    letterSpacing: 1.5,
    color: '#C7C7C7',
  },
  versionText: {
    fontSize: 14,
    color: '#C7C7C7',
    letterSpacing: 1,
  },
});

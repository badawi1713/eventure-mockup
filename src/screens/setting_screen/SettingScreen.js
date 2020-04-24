import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderSettings from './Components/HeaderSetting';

const SettingScreen = props => {
  return (
    <View style={styles.container}>
      <HeaderSettings
        backButton={() => {
          props.navigation.navigate('Profile');
        }}
      />
      <ScrollView>
        <View style={styles.generalSettingContainer}>
          <Text style={styles.containerTitle}>General Settings</Text>

          <View style={styles.containerMenuContent}>
            <View style={styles.menuTextContainer}>
              <Icon size={22} name="user" />
              <Text style={styles.menuText}>Account Settings</Text>
            </View>
            <View style={styles.iconBorderRadius}>
              <Icon size={16} name="chevron-right" />
            </View>
          </View>
          <View style={styles.horizontalLine} />

          <View style={styles.containerMenuContent}>
            <View style={styles.menuTextContainer}>
              <Icon size={22} name="bell" />
              <Text style={styles.menuText}>Notification</Text>
            </View>
            <View style={styles.iconBorderRadius}>
              <Icon size={16} name="chevron-right" />
            </View>
          </View>
          <View style={styles.horizontalLine} />

          <View style={styles.containerMenuContent}>
            <View style={styles.menuTextContainer}>
              <Icon size={22} name="language" />
              <Text style={styles.menuText}>Language</Text>
            </View>
            <View style={styles.iconBorderRadius}>
              <Icon size={16} name="chevron-right" />
            </View>
          </View>
        </View>

        <View style={styles.contactUsContainer}>
          <Text style={styles.containerTitle}>Contact Us</Text>

          <View style={styles.containerMenuContent}>
            <View style={styles.menuTextContainer}>
              <Icon size={22} name="thumbs-up" />
              <Text style={styles.menuText}>Rate Us on The Play Store</Text>
            </View>
            <View style={styles.iconBorderRadius}>
              <Icon size={16} name="chevron-right" />
            </View>
          </View>
          <View style={styles.horizontalLine} />

          <View style={styles.containerMenuContent}>
            <View style={styles.menuTextContainer}>
              <Icon size={22} name="clipboard-check" />
              <Text style={styles.menuText}>Terms & Conditions</Text>
            </View>
            <View style={styles.iconBorderRadius}>
              <Icon size={16} name="chevron-right" />
            </View>
          </View>
          <View style={styles.horizontalLine} />

          <View style={styles.containerMenuContent}>
            <View style={styles.menuTextContainer}>
              <Icon size={22} name="exclamation-triangle" />
              <Text style={styles.menuText}>Report a Problem</Text>
            </View>
            <View style={styles.iconBorderRadius}>
              <Icon size={16} name="chevron-right" />
            </View>
          </View>
        </View>

        <View style={styles.logOutContainer}>
          <View style={styles.containerMenuContent}>
            <TouchableOpacity
              style={styles.menuTextContainer}
              onPress={() => {
                props.navigation.navigate('Login');
              }}>
              <Icon size={22} name="sign-out-alt" />
              <Text style={styles.menuText}>Logout</Text>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  generalSettingContainer: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 30,
    marginBottom: 20,
  },
  contactUsContainer: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    marginBottom: 20,
    paddingBottom: 30,
  },
  logOutContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
    marginBottom: 20,
  },
  containerTitle: {
    fontSize: 22,
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  containerMenuContent: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  menuText: {
    fontSize: 18,
    marginLeft: 15,
  },
  iconBorderRadius: {
    width: 22,
    height: 22,
    borderColor: 'black',
    borderRadius: 11,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    marginHorizontal: 20,
    marginVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'grey',
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

export default SettingScreen;

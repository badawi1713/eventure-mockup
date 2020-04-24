import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import SplashScreen from './src/screens/splash_screen/SplashScreen';

import LoginScreen from './src/screens/auth_screen/Login';
import RegisterScreen from './src/screens/auth_screen/Register';

import HomeScreen from './src/screens/home_screen/HomeScreen';
import VendorListsScreen from './src/screens/vendor_lists/VendorLists';
import OrderListsScreen from './src/screens/order_screen/OrderScreen';
import CartScreen from './src/screens/cart_screen/CartScreen';
import ProfileScreen from './src/screens/profile_screen/ProfileScreen';

import VendorByCategoryScreen from './src/screens/vendorCategory_screen/vendorCategoryScreen';

import SettingScreen from './src/screens/setting_screen/SettingScreen';

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    headerMode: 'none',
  },
);

const SettingStack = createStackNavigator(
  {MainSetting: SettingScreen},
  {
    headerMode: 'none',
  },
);

const VendorStack = createStackNavigator(
  {VendorByCategory: VendorByCategoryScreen},
  {
    headerMode: 'none',
  },
);

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={tintColor} name="home" size={20} />
        ),
        header: null,
      },
    },
    Vendors: {
      screen: VendorListsScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={tintColor} name="store" size={20} />
        ),
        header: null,
      },
    },
    Order: {
      screen: OrderListsScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={tintColor} name="history" size={20} />
        ),
        header: null,
      },
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarLabel: 'My Cart',
        tabBarIcon: ({tintColor}) => (
          <Icon color={tintColor} name="shopping-cart" size={20} />
        ),
        header: null,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon color={tintColor} name="user" size={20} />
        ),
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#25274D',
      inactiveTintColor: '#ACACAC',
      showLabel: true,
      inactiveBackgroundColor: '#FFF',
      activeBackgroundColor: '#FFF',
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Splash: SplashScreen,
      App: AppStack,
      Auth: AuthStack,
      Setting: SettingStack,
      VendorByCategory: VendorStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);

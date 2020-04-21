/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import loginIcon from '../../public/images/Login-Icon.png';

const RegisterScreen = props => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#25274D'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerIcon}>
          <Image source={loginIcon} />
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={styles.loginButton}>
            <Image source={require('../../public/images/facebook-icon.png')} />
            <Text style={styles.loginText}>Connect with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={styles.googleButton}>
            <Image source={require('../../public/images/google-icon.png')} />
            <Text style={styles.googleText}>Connect with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textWithLine}>
          <View style={styles.lineBorder} />
          <Text style={styles.lineText}>or</Text>
          <View style={styles.lineBorder} />
        </View>
        <View style={styles.registerHeader}>
          <Text style={styles.headerText}>Sign In Now</Text>
          <Text style={styles.headerSubText}>
            Please sign in to continue using our app
          </Text>
        </View>
        <View style={styles.registerForm}>
          <TextInput
            placeholderTextColor={'#B2B2B2'}
            style={styles.inputForm}
            placeholder="Email"
          />
          <TextInput
            placeholderTextColor={'#B2B2B2'}
            style={styles.inputForm}
            placeholder="Password"
          />
        </View>
        <View style={styles.termsOfService}>
          <Text style={{fontSize: 16, color: '#25274D'}}>Forgot Password?</Text>
        </View>
        <View style={styles.registerButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Home');
            }}
            style={styles.registerButton}>
            <Text style={styles.registerText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpText}>
          <Text style={{fontSize: 16, color: '#757575'}}>
            Don't have an account?
          </Text>
          <Text
            onPress={() => props.navigation.navigate('Register')}
            style={{fontSize: 16, color: '#25274D'}}>
            Sign Up
          </Text>
        </View>

        <View />
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  headerIcon: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  registerHeader: {
    paddingVertical: 10,
  },
  headerText: {fontSize: 35, color: '#25274D'},
  headerSubText: {paddingTop: 5, fontSize: 16, color: '#757575'},
  registerForm: {
    paddingTop: 15,
  },
  inputForm: {
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: '#707070',
    color: '#000',
    fontSize: 16,
  },
  termsOfService: {
    // alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingVertical: 10,
  },
  signUpText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 30,
  },
  registerButtonContainer: {
    marginVertical: 10,
  },
  registerButton: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#25274D',
  },
  registerText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  textWithLine: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineText: {fontSize: 18, color: '#757575', width: '20%', textAlign: 'center'},
  lineBorder: {
    borderColor: '#707070',
    borderBottomWidth: 0.5,
    width: '40%',
  },
  loginButtonContainer: {
    marginTop: 10,
    // marginBottom: 30,
  },
  loginButton: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3B5998',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  googleButton: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#C3C3C3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleText: {
    fontSize: 18,
    color: '#7E7E7E',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

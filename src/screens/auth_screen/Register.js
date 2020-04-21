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
import registerIcon from '../../public/images/Register-Icon.png';

const RegisterScreen = props => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#25274D'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerIcon}>
          <Image source={registerIcon} />
        </View>
        <View style={styles.registerHeader}>
          <Text style={styles.headerText}>Register</Text>
          <Text style={styles.headerSubText}>
            Please sign up to continue using our app
          </Text>
        </View>
        <View style={styles.registerForm}>
          <TextInput
            placeholderTextColor={'#B2B2B2'}
            style={styles.inputForm}
            placeholder="Your Name"
          />
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
          <TextInput
            placeholderTextColor={'#B2B2B2'}
            style={styles.inputForm}
            placeholder="Confirm Password"
          />
        </View>
        <View style={styles.termsOfService}>
          <View style={styles.checkbox} />
          <Text style={{fontSize: 16, color: '#757575'}}>
            I accept the{' '}
            <Text style={{color: '#000'}}>Terms of Eventure Service</Text>
          </Text>
        </View>
        <View style={styles.registerButtonContainer}>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textWithLine}>
          <View style={styles.lineBorder} />
          <Text style={styles.lineText}>Already have an account?</Text>
          <View style={styles.lineBorder} />
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={styles.loginButton}>
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#707070',
    color: '#000',
    fontSize: 16,
  },
  termsOfService: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#707070',
    marginEnd: 20,
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
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineText: {fontSize: 18, color: '#757575', width: '70%', textAlign: 'center'},
  lineBorder: {
    borderColor: '#707070',
    borderBottomWidth: 0.5,
    width: '15%',
  },
  loginButtonContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  loginButton: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFDD00',
  },
  loginText: {
    fontSize: 24,
    color: '#25274D',
    textAlign: 'center',
  },
});

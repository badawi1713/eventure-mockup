import React, {useEffect} from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import Logo from '../../public/images/Splash-Screen.png';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Register');
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#25274D'} />
      <Image source={Logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25274D',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

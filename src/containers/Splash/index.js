import React from 'react';
import {View} from 'react-native';
import {useEffect} from 'react';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Images} from '../../config';
import {NavigationService} from '../../config';
import Image from '../../components/Image';
import {CustomText} from '../../components';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      checkUserStatus();
    }, 2000);

    return () => {};
  }, []);

  const checkUserStatus = async () => {
    let currentUser = await AsyncStorage.getItem('current_user');
    currentUser = JSON.parse(currentUser);

    const routeName = currentUser !== null ? 'Home' : 'Signin';

    NavigationService.replace(routeName);
  };

  return (
    <View style={styles.myView}>
      <Image
        localImage={Images.Logo}
        imageStyle={styles.logoImage}
        resizeMode={'contain'}
      />
      <CustomText.RegularText style={styles.logoText} text="SHOP NOW" />
    </View>
  );
};

export default SplashScreen;

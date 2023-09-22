/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, StatusBar, Text, Alert} from 'react-native';
import {Colors, showToast} from './src/config';
import Route from './src';
import {ToastComponent, Loader} from './src/components';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
import notifee, {
  AndroidBadgeIconType,
  AndroidColor,
  AndroidImportance,
  AndroidStyle,
  AndroidVisibility,
} from '@notifee/react-native';

const App = () => {
  /********************************************** don't remove the code below ****************************/

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '960575756696-pf4epnlrb28erl1gqrribqijcj1hfd09.apps.googleusercontent.com',
  //   });
  // }, []);

  // useEffect(() => {
  //   RequestUserPermission();
  //   GetNotification();
  // }, []);

  // const RequestUserPermission = async () => {
  //   const authorizationStatus = await messaging().requestPermission();

  //   if (
  //     authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
  //   ) {
  //     console.log('Permission status:', authorizationStatus);
  //     GetFCMToken();
  //   } else {
  //     console.log('User has notification permissions disabled');
  //   }
  // };

  // const GetFCMToken = async () => {
  //   try {
  //     const fcmToken = await messaging().getToken();
  //     console.log('@@@@@@FCM token: ', fcmToken);
  //   } catch (error) {
  //     console.log('ERROR getting token: ', error);
  //     Alert.alert(error?.message);
  //   }
  // };

  // const GetNotification = async () => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //     displayNotification(remoteMessage);
  //   });

  //   return unsubscribe;
  // };

  // const displayNotification = async data => {
  //   await notifee.requestPermission();

  //   // creating a channel which is required
  //   const channelId = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //   });

  //   //displaying notification:

  //   await notifee.displayNotification({
  //     title: data.notification.title,
  //     body: data.notification.body,
  //     android: {
  //       channelId,

  //       actions: [
  //         {
  //           title: 'Yes',
  //           pressAction: {id: 'dance'},
  //         },
  //         {
  //           title: 'No',
  //           pressAction: {id: 'cry'},
  //         },
  //       ],

  //       color: Colors.Primary,
  //     },
  //   });
  // };

  return (
    <View style={{flex: 1, backgroundColor: Colors.Secondary}}>
      <StatusBar backgroundColor={Colors.Primary} barStyle="light-content" />
      {/* <Loader /> */}
      <Route />
      <ToastComponent />
    </View>
  );

  /********************************************** don't remove the code above ****************************/

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  //   return enabled;
  // };

  // useEffect(() => {
  //   getTokenFunction();
  // }, []);

  // const getTokenFunction = async () => {
  //   if (await requestUserPermission()) {
  //     messaging()
  //       .getToken()
  //       .then(fcmToken => {
  //         console.log('FCM TOKEN: ', fcmToken);
  //       })
  //       .catch(err => console.log(err));
  //   } else {
  //     console.log('Not Authorization status: ', authStatus);
  //   }
  // };

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //     displayNotification(remoteMessage);
  //   });

  //   return unsubscribe;
  // }, []);

  // // display notification: //

  // const displayNotification = async data => {
  //   await notifee.requestPermission();

  //   // creating a channel which is required
  //   const channelId = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //   });

  //   //displaying notification:

  //   await notifee.displayNotification({
  //     title: data.notification.title,
  //     body: data.notification.body,
  //     android: {
  //       channelId,
  //       color: '#4caf50',

  //       actions: [
  //         {
  //           title: 'Yes',
  //           pressAction: {id: 'dance'},
  //         },
  //         {
  //           title: 'No',
  //           pressAction: {id: 'cry'},
  //         },
  //       ],

  //       largeIcon: require('../social_authentication/src/assets/images/app_logo.png'),

  //       color: Colors.Primary,
  //     },
  //   });
  // };

  // return (
  //   <View>
  //     <Text>Hello REACT NATIVE</Text>
  //   </View>
  // );
};

export default App;

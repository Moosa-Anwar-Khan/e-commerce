import React, {useEffect} from 'react';
import {
  AppRegistry,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Colors, Constants} from './src/config';
import {Provider} from 'react-redux';
import Store from './src/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import notifee, {
  AndroidBadgeIconType,
  AndroidColor,
  AndroidImportance,
  AndroidStyle,
  AndroidVisibility,
} from '@notifee/react-native';

const AppView = () => {
  /************ When sending data from backend then we are going to use notifee to display. ****************/
  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   console.log(
  //     'Message handled in the background!',
  //     remoteMessage.notification,
  //   );
  //   displayNotification(remoteMessage);
  // });

  // messaging().getInitialNotification(async remoteMessage => {
  //   console.log(
  //     'Message handled in the killed state',
  //     remoteMessage.notification,
  //   );
  //   displayNotification(remoteMessage);
  // });

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

  return Platform.OS == 'ios' ? (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.Secondary}}>
      <Provider store={Store}>
        <App />
      </Provider>
    </SafeAreaView>
  ) : (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppView);

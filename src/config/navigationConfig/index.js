import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack} from './AuthStack';
import {HomeStack} from './HomeStack';

export const MainStackNavigator = () => {
  // useEffect(() => {
  //     GoogleSignin.configure({
  //         webClientId: "551141387128-18v3fj6m4hnof9is1muddvcq3qpe8j6s.apps.googleusercontent.com"
  //       });
  // },[])

  const StackNavigator = createNativeStackNavigator();
  const AppStacks = [...AuthStack, ...HomeStack];

  return (
    <StackNavigator.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        headerShown: false,
      }}>
      {AppStacks.map(stack => (
        <StackNavigator.Screen {...stack} />
      ))}
    </StackNavigator.Navigator>
  );
};

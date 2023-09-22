import {SplashScreen, Signin, Signup} from '../../containers';

export const AuthStack = [
  {
    name: 'SplashScreen',
    component: SplashScreen,
    key: 'SplashScreen',
  },
  {
    name: 'Signin',
    component: Signin,
    key: 'Signin',
  },
  {
    name: 'Signup',
    component: Signup,
    key: 'Signup',
  },
];

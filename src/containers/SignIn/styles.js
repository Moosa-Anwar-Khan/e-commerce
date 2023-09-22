import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  loaderIndicatorView: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  myView: {
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  appIcon: {
    width: '50%',
    height: '20%',
  },

  iconText: {
    color: Colors.Danger,
    marginBottom: '5%',
    fontWeight: '900',
    fontSize: Metrix.customFontSize(20),
  },

  inputViewFocused: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Black,
    borderWidth: 0.5,
    borderRadius: Metrix.Radius,
    marginVertical: '2%',
    marginLeft: '7%',
    marginRight: '7%',
    height: '7%',
    width: '85%',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(3),
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Primary,
    borderWidth: 0.5,
    borderRadius: Metrix.Radius,
    marginVertical: '2%',
    marginLeft: '7%',
    marginRight: '7%',
    height: '7%',
    width: '85%',
  },

  emailIcon: {
    color: Colors.Primary,
    margin: '2%',
  },

  inputEmailStyle: {
    textAlign: 'left',
    color: Colors.Black,
    width: '85%',
    height: '100%',
  },

  passwordView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Black,
    borderWidth: 0.5,
    borderRadius: Metrix.Radius,
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '5%',
    height: '7%',
    width: '85%',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(3),
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  passwordView2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Primary,
    borderWidth: 0.5,
    borderRadius: Metrix.Radius,
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '5%',
    height: '7%',
    width: '85%',
  },

  keyIcon: {
    color: Colors.Primary,
    margin: '2%',
  },

  inputPasswordStyle: {
    textAlign: 'left',
    color: Colors.Black,
    width: '85%',
    height: '100%',
  },

  emailRedTextView: {
    marginRight: '57%',
  },

  emailRedText: {
    color: Colors.Danger,
    fontWeight: '700',
    fontSize: Metrix.customFontSize(10),
  },

  passwordRedTextView: {
    marginRight: '52%',
  },

  passwordRedText: {
    color: Colors.Danger,
    fontWeight: '700',
    fontSize: Metrix.customFontSize(10),
  },

  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: Colors.LoginButton,
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '5%',
    height: '7%',
    width: '85%',
    borderColor: Colors.White,
    borderWidth: 1,
  },
  loginButtonText: {
    color: Colors.White,
    fontWeight: '900',
    textAlign: 'center',
    fontSize: Metrix.customFontSize(15),
  },

  dontHaveAnAccountText: {
    marginTop: '2%',
    fontSize: Metrix.customFontSize(15),
    color: Colors.LoginButton,
    textAlign: 'center',
  },

  dontHaveAnAccountSpanText: {
    textDecorationLine: 'underline',
    fontWeight: '900',
    fontSize: Metrix.customFontSize(15),
    color: Colors.MediumGray,
  },

  errorText: {
    textAlign: 'left',
    color: Colors.Danger,
    marginTop: '8%',
    fontWeight: '500',
  },
});

export {styles};

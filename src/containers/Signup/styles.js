import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  loaderIndicatorView: {
    position: 'absolute',
    left: Metrix.HorizontalSize(0),
    right: Metrix.HorizontalSize(0),
    top: Metrix.VerticalSize(0),
    bottom: Metrix.VerticalSize(0),
    alignItems: 'center',
    justifyContent: 'center',
  },

  myView: {
    backgroundColor: Colors.White,
    flex: 1,
  },

  backButton: {
    backgroundColor: Colors.White,
    marginTop: '3%',
    marginRight: '80%',
    marginLeft: '3%',
  },

  backButtonIcons: {
    color: Colors.Primary,
  },

  appIconView: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  appIcon: {
    width: Metrix.HorizontalSize(100),
    height: Metrix.VerticalSize(100),
    marginTop: '2%',
  },
  iconText: {
    color: Colors.LoginButton,
    fontSize: Metrix.customFontSize(20),
    marginBottom: '10%',
    fontWeight: '900',
  },

  inputViewFocused: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Black,
    borderWidth: 0.5,
    borderRadius: Metrix.Radius,
    marginVertical: '2%',
    marginHorizontal: '5%',
    height: Metrix.VerticalSize(50),
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
    marginHorizontal: '5%',
    height: Metrix.VerticalSize(50),
  },

  nameIcon: {
    color: Colors.Primary,
    margin: '2%',
  },

  inputStyle: {
    textAlign: 'left',
    color: Colors.Black,
    width: '85%',
    height: '100%',
  },

  emailIcon: {
    color: Colors.Primary,
    margin: '2%',
  },

  inputEmailStyle: {
    textAlign: 'left',
    borderColor: Colors.Primary,
    color: Colors.Black,
    width: '90%',
  },

  mobileIcon: {
    color: Colors.Primary,
    margin: '2%',
  },

  inputMobileStyle: {
    textAlign: 'left',
    borderColor: Colors.Primary,
    color: Colors.Black,
    width: '90%',
  },

  keyIcon: {
    color: Colors.Primary,
    margin: '2%',
  },

  inputPasswordStyle: {
    textAlign: 'left',
    borderColor: Colors.Primary,
    color: Colors.Black,
    width: '90%',
  },

  lockCheckIcon: {
    color: Colors.Primary,
    margin: '2%',
  },

  retypePasswordStyle: {
    textAlign: 'left',
    borderColor: Colors.Primary,
    color: Colors.Black,
    width: '90%',
  },

  SignUpButton: {
    borderRadius: 15,
    backgroundColor: Colors.LoginButton,
    paddingVertical: Metrix.VerticalSize(15),
    paddingHorizontal: Metrix.HorizontalSize(100),
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '0%',
    borderColor: Colors.White,
    borderWidth: 1,
  },
  redText: {
    color: Colors.Danger,
    fontWeight: '700',
    fontSize: Metrix.customFontSize(10),
    marginLeft: '7%',
  },
  SignUpButtonText: {
    color: Colors.White,
    fontWeight: '900',
    fontSize: Metrix.customFontSize(15),
    textAlign: 'center',
  },
});

export {styles};

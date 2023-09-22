import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  myView: {
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logoImage: {
    width: '50%',
    height: '20%',
    borderRadius: 50,
  },
  logoText: {
    color: Colors.Primary,
    textAlign: 'center',
    fontWeight: '900',
    fontSize: Metrix.customFontSize(25),
  },
});

export {styles};

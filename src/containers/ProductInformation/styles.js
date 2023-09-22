import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: 'center',
  },

  backButton: {
    backgroundColor: Colors.White,
    marginTop: '3%',
    marginRight: '85%',
  },

  backButtonIcons: {
    color: Colors.Primary,
  },

  image: {
    height: '40%',
    width: '50%',
    marginTop: '5%',
  },

  brandText: {
    color: Colors.Black,
    fontWeight: '400',
    fontSize: Metrix.customFontSize(18),
  },

  brandSpanText: {
    fontWeight: 'bold',
    fontSize: Metrix.customFontSize(18),
  },

  titleText: {
    color: Colors.Black,
    fontWeight: '400',
    fontSize: Metrix.customFontSize(18),
    marginTop: '2%',
  },

  titleSpanText: {
    fontWeight: 'bold',
    fontSize: Metrix.customFontSize(18),
  },

  categoryText: {
    color: Colors.Black,
    fontWeight: '400',
    fontSize: Metrix.customFontSize(18),
    marginTop: '2%',
  },

  categorySpanText: {
    fontWeight: 'bold',
    fontSize: Metrix.customFontSize(18),
  },

  priceText: {
    color: Colors.Black,
    fontWeight: '400',
    fontSize: Metrix.customFontSize(18),
    marginTop: '2%',
  },

  priceSpanText: {
    fontWeight: 'bold',
    fontSize: Metrix.customFontSize(18),
  },

  descriptionText: {
    color: Colors.Black,
    fontWeight: '400',
    fontSize: Metrix.customFontSize(12),
    marginTop: '2%',
  },

  descriptionSpanText: {
    fontWeight: 'bold',
    fontSize: Metrix.customFontSize(12),
  },
});

export {styles};

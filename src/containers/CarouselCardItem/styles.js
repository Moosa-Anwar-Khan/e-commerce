import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';
import {ITEM_WIDTH, SLIDER_WIDTH} from '.';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Black,
    borderRadius: 20,
    width: ITEM_WIDTH,
    padding: 5,
    marginLeft: Metrix.HorizontalSize(-40),
    marginTop: '5%',
  },
  image: {
    width: '100%',
    height: Metrix.VerticalSize(150),
    borderRadius: Metrix.Radius,
    textAlign: 'center',
  },
  header: {
    color: Colors.Black,
    fontSize: Metrix.FontMedium,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 5,
  },
  body: {
    color: Colors.Black,
    fontSize: Metrix.FontSmall,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export {styles};

import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {styles} from './styles';
import Image from '../../components/Image';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        networkImage={item.imageUrl}
        resizeMode={'cover'}
        imageStyle={styles.image}
      />
    </View>
  );
};

export default CarouselCardItem;

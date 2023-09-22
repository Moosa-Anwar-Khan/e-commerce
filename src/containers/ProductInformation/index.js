import {ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {styles} from './styles';
import Image from '../../components/Image';
import {CustomText, PressableComponent} from '../../components';
import Icons from '../../config/icons';
import {NavigationService} from '../../config';

const ProductInformation = () => {
  const route = useRoute();

  const {productInfo} = route.params;

  const handleBackButton = () => {
    NavigationService.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <PressableComponent
        onPress={() => handleBackButton()}
        style={styles.backButton}>
        <Icons.Ionicons
          name="arrow-back-circle"
          size={45}
          style={styles.backButtonIcons}
        />
      </PressableComponent>
      <Image
        networkImage={productInfo.thumbnail}
        resizeMode={'contain'}
        imageStyle={styles.image}
      />

      <CustomText.TextWithSpan
        text="Brand: "
        style={styles.brandText}
        spanText={productInfo.brand}
        spanTextStyle={styles.brandSpanText}
      />

      <CustomText.TextWithSpan
        text="Title: "
        style={styles.titleText}
        spanText={productInfo.title}
        spanTextStyle={styles.titleSpanText}
      />

      <CustomText.TextWithSpan
        text="Category: "
        style={styles.categoryText}
        spanText={productInfo.category}
        spanTextStyle={styles.categorySpanText}
      />

      <CustomText.TextWithSpan
        text="Price: "
        style={styles.priceText}
        spanText={`PKR ${productInfo.price}`}
        spanTextStyle={styles.priceSpanText}
      />

      <CustomText.TextWithSpan
        text="Description: "
        style={styles.descriptionText}
        spanText={productInfo.description}
        spanTextStyle={styles.descriptionSpanText}
      />
    </ScrollView>
  );
};

export default ProductInformation;

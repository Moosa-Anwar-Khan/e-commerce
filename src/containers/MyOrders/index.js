import React, {useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomText, PressableComponent} from '../../components';
import styles from './styles';
import {Colors, NavigationService} from '../../config';
import Icons from '../../config/icons';
import {useRoute} from '@react-navigation/native';

const MyOrders = () => {
  const route = useRoute();

  const {userOrders} = route.params;

  const Loader = useSelector(state => state.AppReducer.loader);

  const [orders, setOrders] = useState(userOrders);

  const handleBackButton = () => {
    NavigationService.goBack();
  };

  const productsBoughtItem = ({item}) => {
    return (
      <View style={styles.productsBoughtItemView}>
        <CustomText.TextWithSpan
          text={'brand: '}
          style={styles.brandText}
          spanText={item.brand}
          spanTextStyle={styles.brandSpanText}
        />
        <CustomText.TextWithSpan
          text={'title: '}
          style={styles.titleText}
          spanText={item.title}
          spanTextStyle={styles.titleSpanText}
        />
        <CustomText.TextWithSpan
          text={'price: '}
          style={styles.priceText}
          spanText={item.price}
          spanTextStyle={styles.priceSpanText}
        />
        <CustomText.TextWithSpan
          text={'quantity: '}
          style={styles.quantityText}
          spanText={item.quantity}
          spanTextStyle={styles.quantitySpanText}
        />
      </View>
    );
  };

  const orderItem = ({item}) => {
    return (
      <View style={styles.ordersView}>
        <View style={styles.addressView}>
          <CustomText.RegularText text={'Address'} style={styles.addressText} />
          <CustomText.TextWithSpan
            text={'house: '}
            style={styles.houseText}
            spanText={item.address_selected.house}
            spanTextStyle={styles.houseSpanText}
          />
          <CustomText.TextWithSpan
            text={'location: '}
            style={styles.locationText}
            spanText={item.address_selected.location}
            spanTextStyle={styles.locationSpanText}
          />
          <CustomText.TextWithSpan
            text={'city: '}
            style={styles.cityText}
            spanText={item.address_selected.city}
            spanTextStyle={styles.citySpanText}
          />
        </View>

        <View style={styles.itemsBoughtView}>
          <CustomText.RegularText
            text={'Items bought'}
            style={styles.itemsBoughtText}
          />
          <FlatList data={item.items_bought} renderItem={productsBoughtItem} />
        </View>

        <View style={styles.cardInformationView}>
          <CustomText.RegularText
            text={'Card information'}
            style={styles.cardInformationText}
          />
          <CustomText.TextWithSpan
            text={'brand: '}
            style={styles.cardBrandText}
            spanText={item.card_information.brand}
            spanTextStyle={styles.cardBrandSpanText}
          />
          <CustomText.TextWithSpan
            text={'expiry: '}
            style={styles.expiryText}
            spanText={`${item.card_information.expiryMonth}/${item.card_information.expiryYear}`}
            spanTextStyle={styles.expirySpanText}
          />
          <CustomText.TextWithSpan
            text={'last 4 digits: '}
            style={styles.last4Text}
            spanText={item.card_information.last4}
            spanTextStyle={styles.last4SpanText}
          />
        </View>

        <CustomText.TextWithSpan
          text={'Purchase time: '}
          style={styles.dateTimeText}
          spanText={`${item.purchase_date}, ${item.purchase_time}`}
          spanTextStyle={styles.dateTimeSpanText}
        />

        <CustomText.TextWithSpan
          text={'Total amount spent: '}
          style={styles.totalAmountText}
          spanText={`$${item.total_amount}`}
          spanTextStyle={styles.totalAmountSpanText}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PressableComponent
          onPress={() => handleBackButton()}
          style={styles.backButton}>
          <Icons.Ionicons
            name="arrow-back-circle"
            size={45}
            style={styles.backButtonIcons}
          />
        </PressableComponent>
        <CustomText.BoldText text="My orders" style={styles.headingText} />
      </View>

      {Loader ? (
        <View style={styles.loaderIndicatorView}>
          <ActivityIndicator size="large" color={Colors.Primary} />
        </View>
      ) : (
        <>
          {orders?.length >= 1 ? (
            <FlatList data={orders} renderItem={orderItem} />
          ) : (
            <View style={styles.container}>
              <CustomText.RegularText
                text="No history of orders"
                style={styles.noOrderTextStyle}
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default MyOrders;

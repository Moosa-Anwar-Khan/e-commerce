/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, FlatList, LogBox, Alert, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomText, PressableComponent} from '../../components';
import {AppAction} from '../../store/actions';
import styles from './styles';
import {Colors, NavigationService} from '../../config';
import Icons from '../../config/icons';
import Image from '../../components/Image';
import {useRoute} from '@react-navigation/native';
import SelectAddressModal from '../../components/Modal/selectAddressModal';

const Checkout = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const route = useRoute();

  const {cartItems} = route.params;

  const dispatch = useDispatch();

  const Loader = useSelector(state => state.AppReducer.loader);

  const [addToCart, setAddToCart] = useState(cartItems);
  const [totalAmount, setTotalAmount] = useState(null);
  const [addressModalVisible, setAddressModalVisible] = useState(false);
  const [selectHouse, setSelectHouse] = useState(null);
  const [selectLocation, setSelectLocation] = useState(null);
  const [selectCity, setSelectCity] = useState(null);
  const [selectAddress, setSelectAddress] = useState(null);

  const user_info_from_FS = useSelector(state => state.AppReducer.userInfoFS);

  const [wishlist, setWishlist] = useState(user_info_from_FS?.wishlist);

  useEffect(() => {
    dispatch(AppAction.GetUserInfoFromFs());
  }, []);

  useEffect(() => {
    setTotalAmount(getTotalAmount());
  }, []);

  const handleBackButton = () => {
    NavigationService.goBack();
  };

  const getTotalAmount = () => {
    let total = 0;
    for (let i = 0; i < addToCart.length; i++) {
      total = total + addToCart[i].quantity * addToCart[i].price;
    }
    return total;
  };

  console.log('userInfo: ', user_info_from_FS?.address);

  const handleAddAddressButton = () => {
    NavigationService.replace('AddAddress', {
      wishlistItems: wishlist,
      cartItems: addToCart,
    });
  };

  const handleAddressPress = (house, location, city) => {
    setSelectAddress(`${house}, ${location}, ${city}`);
    setSelectHouse(house);
    setSelectLocation(location);
    setSelectCity(city);
    setAddressModalVisible(false);
  };

  const handlePayButton = () => {
    if (
      selectHouse === null ||
      selectLocation === null ||
      selectCity === null
    ) {
      Alert.alert('Select your address');
    } else {
      NavigationService.navigate('PaymentScreen', {
        userName: user_info_from_FS?.name,
        userEmail: user_info_from_FS?.email,
        cartItems: addToCart,
        houseSelected: selectHouse,
        locationSelected: selectLocation,
        citySelected: selectCity,
        totalAmount: totalAmount,
      });
    }
  };

  const cartItem = ({item, index}) => {
    const totalItemPrice = () => {
      return item.price * item.quantity;
    };

    return (
      <View style={styles.cartItemView}>
        <Image
          networkImage={item.thumbnail}
          imageStyle={styles.cartItemImage}
          resizeMode={'contain'}
        />

        <View style={styles.cartItemDetails}>
          <CustomText.RegularText
            text={item.title}
            style={styles.cartItemTitle}
          />

          <CustomText.TextWithSpan
            text={'price: '}
            style={styles.priceText}
            spanText={`$${item.price}`}
            spanTextStyle={styles.priceSpanText}
          />

          <CustomText.TextWithSpan
            text={'quantity: '}
            style={styles.quantityText}
            spanText={item.quantity}
            spanTextStyle={styles.quantitySpanText}
          />

          <CustomText.TextWithSpan
            text={'total price of item: '}
            style={styles.totalItemPriceText}
            spanText={`$${totalItemPrice()}`}
            spanTextStyle={styles.totalItemPriceSpanText}
          />
        </View>
      </View>
    );
  };

  const renderAddress = ({index, item}) => {
    return (
      <PressableComponent
        style={styles.AddressView}
        onPress={() =>
          handleAddressPress(item.house, item.location, item.city)
        }>
        <CustomText.TextWithSpan
          text={'House: '}
          style={styles.houseText}
          spanText={item.house}
          spanTextStyle={styles.houseSpanText}
        />

        <CustomText.TextWithSpan
          text={'Location: '}
          style={styles.locationText}
          spanText={item.location}
          spanTextStyle={styles.locationSpanText}
        />

        <CustomText.TextWithSpan
          text={'City: '}
          style={styles.cityText}
          spanText={item.city}
          spanTextStyle={styles.citySpanText}
        />
      </PressableComponent>
    );
  };

  return (
    <>
      {Loader ? (
        <View style={styles.loaderIndicatorView}>
          <ActivityIndicator size="large" color={Colors.Primary} />
        </View>
      ) : (
        <View style={styles.container}>
          <SelectAddressModal
            animationType="slide"
            visible={addressModalVisible}
            onRequestClose={() => setAddressModalVisible(false)}
            myModalContainer={styles.myModal}
            addressDataExists={user_info_from_FS?.address}
            selectYourAddressText={styles.selectYourAddressText}
            addAddressButtonPress={() => handleAddAddressButton()}
            addAddressButtonStyle={styles.addAddressButton}
            addAddressButtonTextStyle={styles.addAddressButtonText}
            flatlistData={user_info_from_FS?.address}
            flatlistStyle={styles.addressFlatlistStyle}
            renderAddressItem={renderAddress}
            noAddressAddedTextStyle={styles.noAddressAddedTextStyle}
            backModalButtonStyle={styles.backModalButton}
            backModalButtonOnPress={() => setAddressModalVisible(false)}
          />

          <PressableComponent
            onPress={() => handleBackButton()}
            style={styles.backButton}>
            <Icons.Ionicons
              name="arrow-back-circle"
              size={45}
              style={styles.backButtonIcons}
            />
          </PressableComponent>

          <FlatList
            data={addToCart}
            renderItem={cartItem}
            style={styles.cartItemFlatList}
          />

          <PressableComponent
            style={styles.selectAddressButton}
            onPress={() => setAddressModalVisible(true)}>
            <CustomText.BoldText
              text={'Select Address'}
              style={styles.selectAddressButtonText}
            />
          </PressableComponent>

          <View>
            {selectAddress ? (
              <CustomText.TextWithSpan
                text={'Address: '}
                style={styles.addressTextStyle}
                spanText={selectAddress}
                spanTextStyle={styles.addressSpanTextStyle}
              />
            ) : null}
          </View>

          <View style={styles.totalAmountTextView}>
            <CustomText.TextWithSpan
              text={'Total amount payable: '}
              style={styles.totalText}
              spanText={`$${totalAmount}`}
              spanTextStyle={styles.totalSpanText}
            />
          </View>

          <PressableComponent
            style={styles.payButton}
            onPress={() => handlePayButton()}>
            <CustomText.BoldText
              text={'Proceed to Pay'}
              style={styles.payButtonText}
            />
          </PressableComponent>
        </View>
      )}
    </>
  );
};

export default Checkout;

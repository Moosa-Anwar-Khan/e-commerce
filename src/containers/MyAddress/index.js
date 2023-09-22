/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomText, PressableComponent} from '../../components';
import {AppAction} from '../../store/actions';
import styles from './styles';
import {Colors, NavigationService} from '../../config';
import Icons from '../../config/icons';
import BottomNavigator from '../../components/BottomNavigator';

const MyAddress = () => {
  const dispatch = useDispatch();

  const Loader = useSelector(state => state.AppReducer.loader);
  const user_info = useSelector(state => state.AppReducer.userInfoFS);

  const [addresses, setAddresses] = useState();

  useEffect(() => {
    dispatch(
      AppAction.GetAddress(userAddress => {
        setAddresses(userAddress);
      }),
    );
  }, []);

  const handleBackButton = () => {
    NavigationService.replace('Profile', {
      wishlistItems: user_info?.wishlist,
      cartItems: user_info?.add_to_cart,
    });
  };

  const handleAddAddress = () => {
    NavigationService.navigate('AddAddress');
  };

  const handleDeleteButton = item => {
    Alert.alert(
      'Are you sure',
      `you want to delete address ${item.house}, ${item.location}, ${item.city}`,
      [
        {
          text: 'Yes',
          onPress: () => {
            try {
              setAddresses(user_info?.address);
              let filteredAddresses = addresses.filter(it => {
                if (it !== item) {
                  return it;
                }
                dispatch(AppAction.RemoveAddress({delAddress: item}));
              });
              setAddresses(filteredAddresses);
            } catch (err) {
              console.log(err);
            }
          },
        },
        {
          text: 'No',
          onPress: () => {
            console.log('cancelled is pressed');
          },
        },
      ],
    );
  };

  const handleHomeIcon = () => {
    NavigationService.replace('Home');
  };

  const handleHeartIcon = () => {
    NavigationService.replace('Wishlist', {
      wishlistItems: user_info?.wishlist,
    });
  };

  const handleCartIcon = () => {
    NavigationService.replace('AddToCart', {
      cartItems: user_info?.add_to_cart,
    });
  };

  const addressesItem = ({item}) => {
    return (
      <View style={styles.addressView}>
        <CustomText.TextWithSpan
          text="House: "
          style={styles.houseText}
          spanText={item.house}
          spanTextStyle={styles.houseSpanText}
        />
        <CustomText.TextWithSpan
          text="Location: "
          style={styles.locationText}
          spanText={item.location}
          spanTextStyle={styles.locationSpanText}
        />
        <CustomText.TextWithSpan
          text="City: "
          style={styles.cityText}
          spanText={item.city}
          spanTextStyle={styles.citySpanText}
        />
        <PressableComponent
          style={styles.deleteButton}
          onPress={() => handleDeleteButton(item)}>
          <Icons.MaterialCommunityIcons
            name="delete"
            size={20}
            style={styles.deleteIcon}
          />
        </PressableComponent>
      </View>
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
          <PressableComponent
            onPress={() => handleBackButton()}
            style={styles.backButton}>
            <Icons.Ionicons
              name="arrow-back-circle"
              size={45}
              style={styles.backButtonIcons}
            />
          </PressableComponent>

          <PressableComponent
            style={styles.addAddressButton}
            onPress={() => handleAddAddress()}>
            <CustomText.RegularText
              text="Add Address"
              style={styles.addAddressButtonText}
            />
          </PressableComponent>

          <>
            {addresses?.length >= 1 ? (
              <FlatList data={addresses} renderItem={addressesItem} />
            ) : (
              <View style={styles.container}>
                <CustomText.RegularText
                  text="No address added"
                  style={styles.noAddressTextStyle}
                />
              </View>
            )}
          </>

          <BottomNavigator
            navigationBarView={styles.navigationBarView}
            wishlistLength={user_info?.wishlist?.length}
            wishlistIconPress={handleHeartIcon}
            wishlistQuanitityView={styles.wishlistQuanitityView}
            wishlistQuanitityText={styles.wishlistQuanitity}
            wishlistIconSizeInNavbar={20}
            wishlistIconStyleInNavBar={styles.heartIconInNavBar}
            homeIconPress={handleHomeIcon}
            homeIconSizeInNavbar={20}
            homeIconStyleInNavBar={styles.homeIconStyleInNavBar}
            cartLength={user_info?.add_to_cart?.length}
            cartIconPress={handleCartIcon}
            cartQuantityView={styles.addToCartQuantityView}
            cartQuantityText={styles.addToCartQuantity}
            cartIconSizeInNavbar={20}
            cartIconStyleInNavBar={styles.cartIconStyleInNavBar}
          />
        </View>
      )}
    </>
  );
};

export default MyAddress;

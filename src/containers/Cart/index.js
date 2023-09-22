/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, FlatList, LogBox, Alert, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomText, PressableComponent} from '../../components';
import {AppAction} from '../../store/actions';
import styles from './styles';
import {Colors, Images, NavigationService} from '../../config';
import Icons from '../../config/icons';
import Image from '../../components/Image';
import {useRoute} from '@react-navigation/native';
import {AirbnbRating} from 'react-native-ratings';
import BottomNavigator from '../../components/BottomNavigator';

const AddToCart = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const route = useRoute();

  const {cartItems} = route.params;

  const [wishlist, setWishlist] = useState(null);
  const [addToCart, setAddToCart] = useState(cartItems);
  const [loadingItemId, setLoadingItemId] = useState(null);

  const dispatch = useDispatch();

  const card_loader = useSelector(state => state.AppReducer.cardLoader);

  useEffect(() => {
    getWishListItems();
  }, []);

  const getWishListItems = () => {
    dispatch(
      AppAction.GetWishlistItems(wishlistItems => setWishlist(wishlistItems)),
    );
  };

  const handleCheckoutButton = () => {
    try {
      if (addToCart?.length >= 1) {
        Alert.alert('Are you sure', 'You want to proceed for checkout', [
          {
            text: 'Yes',
            onPress: () => {
              NavigationService.navigate('Checkout', {
                cartItems: addToCart,
              });
            },
          },
          {
            text: 'No',
            onPress: () => {
              console.log('cancelled is pressed');
            },
          },
        ]);
      } else {
        Alert.alert('No items in cart');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowProductButton = item => {
    NavigationService.navigate('ProductInformation', {
      productInfo: item,
    });
  };

  const removeFromCart = item => {
    try {
      Alert.alert(
        'Are you sure',
        `You want to remove, "${item.title}" from cart`,
        [
          {
            text: 'Yes',
            onPress: () => {
              try {
                setLoadingItemId(item.id);
                let filteredWishlist = addToCart.filter(it => {
                  if (it.id !== item.id) {
                    return it;
                  }
                });
                setAddToCart(filteredWishlist);
                dispatch(
                  AppAction.RemoveAddToCartItem({delAddToCartItem: item}),
                );
                setLoadingItemId(null);
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
    } catch (err) {
      console.log(err);
    }
  };

  const handleHomeIcon = () => {
    NavigationService.replace('Home');
  };

  const handleHeartIcon = () => {
    NavigationService.replace('Wishlist', {
      wishlistItems: wishlist,
    });
  };

  const handleUserProfileImage = () => {
    NavigationService.replace('Profile', {
      wishlistItems: wishlist,
      cartItems: addToCart,
    });
  };

  const cartItem = ({item, index}) => {
    const handleDecreaseQuantityButton = () => {
      if (item.quantity === 1) {
      } else {
        item.quantity = item.quantity - 1;
        console.log('item: ', item);
        getWishListItems();
      }
    };

    const handleIncreaseQuantityButton = () => {
      item.quantity = item.quantity + 1;
      console.log('item: ', item);
      getWishListItems();
    };

    return (
      <>
        {card_loader && loadingItemId === item.id ? (
          <View style={styles.loaderIndicatorView}>
            <ActivityIndicator size="large" color={Colors.Primary} />
          </View>
        ) : (
          <PressableComponent
            style={styles.cartItemView}
            key={index}
            onPress={() => handleShowProductButton(item, index)}>
            <Image
              networkImage={item.thumbnail}
              imageStyle={styles.cartItemImage}
              resizeMode={'contain'}
            />

            <CustomText.RegularText
              style={styles.cartItemTitleText}
              text={item.title}
            />
            <CustomText.RegularText
              style={styles.cartItemPriceText}
              text={`$ ${item.price}`}
            />

            <AirbnbRating
              count={5}
              defaultRating={5}
              size={15}
              showRating={false}
              isDisabled={false}
            />

            <View style={styles.ItemQuantityAndAddToCartView}>
              <PressableComponent
                style={styles.removeFromAddToCartButton}
                onPress={() => removeFromCart(item, index)}>
                <Icons.MaterialCommunityIcons
                  name="cart-off"
                  style={styles.cartOffIcon}
                  size={25}
                />
              </PressableComponent>

              <View style={styles.productQuantity}>
                <PressableComponent
                  style={styles.decreaseButton}
                  onPress={() => handleDecreaseQuantityButton()}>
                  <Icons.FontAwesome
                    name="minus-circle"
                    size={30}
                    style={styles.decreaseButtonIcon}
                  />
                </PressableComponent>

                <CustomText.BoldText
                  key={index}
                  text={item.quantity}
                  style={styles.quantityText}
                />

                <PressableComponent
                  style={styles.increaseButton}
                  onPress={() => handleIncreaseQuantityButton()}>
                  <Icons.MaterialIcons
                    name="add-circle"
                    size={30}
                    style={styles.increaseButtonIcon}
                  />
                </PressableComponent>
              </View>
            </View>
          </PressableComponent>
        )}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText.BoldText text="Cart" style={styles.headingText} />
        <PressableComponent onPress={() => handleUserProfileImage()}>
          <Image
            localImage={Images.userImage}
            imageStyle={styles.userIcon}
            resizeMode={'cover'}
          />
        </PressableComponent>
      </View>

      {!addToCart || addToCart === [] ? (
        <View style={styles.cartItemsQuantityView}>
          <Icons.MaterialCommunityIcons
            name="cart"
            size={20}
            style={styles.headercartIcon}
          />
          <CustomText.BoldText
            text=": 0"
            style={styles.headercartItemsQuantity}
          />
        </View>
      ) : (
        <View style={styles.cartItemsQuantityView}>
          <Icons.MaterialCommunityIcons
            name="cart"
            size={20}
            style={styles.headercartIcon}
          />
          <CustomText.BoldText
            text={`: ${addToCart?.length}`}
            style={styles.headercartItemsQuantity}
          />
        </View>
      )}

      {addToCart?.length >= 1 ? (
        <FlatList data={addToCart} renderItem={cartItem} />
      ) : (
        <View style={styles.container}>
          <CustomText.RegularText
            text="No items in cart"
            style={styles.noItemsText}
          />
        </View>
      )}

      {addToCart?.length >= 1 ? (
        <PressableComponent
          style={styles.checkoutButton}
          onPress={() => handleCheckoutButton()}>
          <CustomText.BoldText
            text={'Checkout'}
            style={styles.checkoutButtonText}
          />
          <Icons.MaterialCommunityIcons
            name="cart-check"
            size={25}
            style={styles.checkoutIcon}
          />
        </PressableComponent>
      ) : null}

      <BottomNavigator
        navigationBarView={styles.navigationBarView}
        wishlistLength={wishlist?.length}
        wishlistIconPress={handleHeartIcon}
        wishlistQuanitityView={styles.wishlistQuanitityView}
        wishlistQuanitityText={styles.wishlistQuanitity}
        wishlistIconSizeInNavbar={20}
        wishlistIconStyleInNavBar={styles.heartIconInNavBar}
        homeIconPress={handleHomeIcon}
        homeIconSizeInNavbar={20}
        homeIconStyleInNavBar={styles.homeIconStyleInNavBar}
        cartIconButtonStyleInNavBar={styles.cartIconButtonInNavBar}
        cartIconSizeInNavbar={25}
        cartIconStyleInNavBar={styles.cartIconStyleInNavBar}
      />
    </View>
  );
};

export default AddToCart;

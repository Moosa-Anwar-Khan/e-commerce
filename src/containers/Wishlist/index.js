/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
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

const Wishlist = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const route = useRoute();

  const {wishlistItems} = route.params;

  const [wishlist, setWishlist] = useState(wishlistItems);
  const [addToCart, setAddToCart] = useState(null);
  const [updateAddToCart, setUpdateAddToCart] = useState(true);
  const [loadingItemId, setLoadingItemId] = useState(null);

  const dispatch = useDispatch();

  const card_loader = useSelector(state => state.AppReducer.cardLoader);

  useEffect(() => {
    dispatch(AppAction.GetAddToCartItems(cartItems => setAddToCart(cartItems)));
  }, []);

  const handleShowProductButton = (item, ind) => {
    NavigationService.navigate('ProductInformation', {
      productInfo: item,
    });
  };

  const removeFromWishlist = (item, index) => {
    try {
      Alert.alert(
        'Are you sure',
        `You want to remove, "${item.title}" from wishlist`,
        [
          {
            text: 'Yes',
            onPress: () => {
              try {
                let filteredWishlist = wishlist.filter((it, i) => {
                  if (it.id !== item.id) {
                    return it;
                  }
                });
                setWishlist(filteredWishlist);
                dispatch(AppAction.RemoveWishlistItem({delWishlistItem: item}));
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

  const handleCartButton = (item, index) => {
    if (addToCart == null) {
      setLoadingItemId(item.id);
      setAddToCart([item]);
      dispatch(AppAction.SetAddToCartItems({addToCartItem: item}));
    } else if (!addToCart.some(product => product.id == item.id)) {
      setLoadingItemId(item.id);
      setAddToCart([...addToCart, item]);
      dispatch(AppAction.SetAddToCartItems({addToCartItem: item}));
    } else {
      setLoadingItemId(item.id);
      let filteredAddToCart = addToCart.filter(it => {
        if (it.id !== item.id) {
          return it;
        }
        dispatch(AppAction.RemoveAddToCartItem({delAddToCartItem: item}));
      });
      setAddToCart(filteredAddToCart);
    }
    setUpdateAddToCart(false);
    setLoadingItemId(null);
  };

  const handleHomeIcon = () => {
    NavigationService.replace('Home');
  };

  const handleCartIcon = () => {
    NavigationService.replace('AddToCart', {
      cartItems: addToCart,
    });
  };

  const handleUserProfileImage = () => {
    NavigationService.replace('Profile', {
      wishlistItems: wishlist,
      cartItems: addToCart,
    });
  };

  const wishlistItem = ({item, index}) => {
    return (
      <>
        {card_loader && loadingItemId === item.id ? (
          <View style={styles.loaderIndicatorView}>
            <ActivityIndicator size="large" color={Colors.Primary} />
          </View>
        ) : (
          <PressableComponent
            style={styles.wishlistItemView}
            key={index}
            onPress={() => handleShowProductButton(item, index)}>
            <Image
              networkImage={item.thumbnail}
              imageStyle={styles.wishlistItemsImage}
              resizeMode={'contain'}
            />

            <CustomText.RegularText
              style={styles.wishlistItemTitleText}
              text={item.title}
            />
            <CustomText.RegularText
              style={styles.wishlistItemPriceText}
              text={`$ ${item.price}`}
            />

            <AirbnbRating
              count={5}
              defaultRating={5}
              size={15}
              showRating={false}
              isDisabled={false}
            />

            <View style={styles.removeAndAddToCartView}>
              <PressableComponent
                style={styles.removeFromWishlistButton}
                onPress={() => removeFromWishlist(item, index)}>
                <Icons.Ionicons
                  name="heart-dislike-sharp"
                  style={styles.heartDislikeIcon}
                  size={25}
                />
              </PressableComponent>

              {addToCart?.some(product => product.id == item.id) ? (
                <Icons.MaterialCommunityIcons
                  name="cart"
                  size={30}
                  style={styles.coloredCart}
                  onPress={() => handleCartButton(item, index)}
                />
              ) : (
                <Icons.MaterialCommunityIcons
                  name="cart-outline"
                  size={30}
                  style={styles.uncoloredCart}
                  onPress={() => handleCartButton(item, index)}
                />
              )}
            </View>
          </PressableComponent>
        )}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText.BoldText text="Wishlist" style={styles.headingText} />
        <PressableComponent onPress={() => handleUserProfileImage()}>
          <Image
            localImage={Images.userImage}
            imageStyle={styles.userIcon}
            resizeMode={'cover'}
          />
        </PressableComponent>
      </View>

      <>
        {!wishlist || wishlist == [] ? (
          <View style={styles.wishlistItemsQuantityView}>
            <Icons.AntDesign
              name="heart"
              size={20}
              style={styles.headerHeartIcon}
            />
            <CustomText.BoldText
              text=": 0"
              style={styles.headerWishlistItemsQuantity}
            />
          </View>
        ) : (
          <View style={styles.wishlistItemsQuantityView}>
            <Icons.AntDesign
              name="heart"
              size={20}
              style={styles.headerHeartIcon}
            />
            <CustomText.BoldText
              text={`: ${wishlist?.length}`}
              style={styles.headerWishlistItemsQuantity}
            />
          </View>
        )}
      </>

      {wishlist?.length >= 1 ? (
        <FlatList data={wishlist} renderItem={wishlistItem} />
      ) : (
        <View style={styles.container}>
          <CustomText.RegularText
            text="No items in wishlist"
            style={styles.noItemsText}
          />
        </View>
      )}

      <BottomNavigator
        navigationBarView={styles.navigationBarView}
        wishlistIconSizeInNavbar={25}
        wishlistIconButtonStyleInNavBar={styles.heartIconButtonInNavBar}
        wishlistIconStyleInNavBar={styles.heartIconNavBar}
        homeIconPress={handleHomeIcon}
        homeIconSizeInNavbar={20}
        homeIconStyleInNavBar={styles.homeIconStyleInNavBar}
        cartLength={addToCart?.length}
        cartIconPress={handleCartIcon}
        cartQuantityView={styles.addToCartQuantityView}
        cartQuantityText={styles.addToCartQuantity}
        cartIconSizeInNavbar={20}
        cartIconStyleInNavBar={styles.cartIconStyleInNavBar}
      />
    </View>
  );
};

export default Wishlist;

/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, LogBox, ActivityIndicator, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomText, PressableComponent} from '../../components';
import {AppAction} from '../../store/actions';
import styles from './styles';
import {Colors, Images, NavigationService} from '../../config';
import Icons from '../../config/icons';
import Image from '../../components/Image';
import {ScrollView} from 'react-native';
import MenuModal from '../../components/Modal/modal';
import {useRoute} from '@react-navigation/native';
import BottomNavigator from '../../components/BottomNavigator';

const Profile = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const route = useRoute();

  const {wishlistItems, cartItems} = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const Loader = useSelector(state => state.AppReducer.loader);
  const current_user = useSelector(state => state.AppReducer.userInfoFS);

  useEffect(() => {
    dispatch(AppAction.GetUserInfoFromFs());
  }, []);

  const handleLogout = () => {
    Alert.alert('Are you sure', 'You want to Logout ?', [
      {
        text: 'Yes',
        onPress: () => {
          dispatch(AppAction.Logout());
        },
      },
      {
        text: 'No',
        onPress: () => {
          console.log('cancelled is pressed');
        },
      },
    ]);
  };

  const handleHomeIcon = () => {
    NavigationService.replace('Home');
  };

  const handleHeartIcon = () => {
    NavigationService.replace('Wishlist', {
      wishlistItems: wishlistItems,
    });
  };

  const handleCartIcon = () => {
    NavigationService.replace('AddToCart', {
      cartItems: cartItems,
    });
  };

  const handleMyAddressButton = () => {
    NavigationService.replace('MyAddress', {
      wishlistItems: wishlistItems,
      cartItems: cartItems,
    });
  };

  const handleMyOrdersButton = () => {
    NavigationService.navigate('MyOrders', {
      userOrders: current_user?.orders,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <MenuModal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          myModalContainer={styles.myModal}
          userIconStyle={styles.modalUserIcon}
          usernameText={styles.usernameTxt}
          username={current_user?.name}
          emailText={styles.emailTxt}
          email={current_user?.email}
          isLoader={Loader}
          loaderStyle={styles.modalLoader}
          logoutButtonStyle={styles.logOutButton}
          logoutButtonOnPress={() => handleLogout()}
          logoutButtonText={styles.logOutButtonText}
          settingsButtonStyle={styles.settingsButton}
          settingsButtonText={styles.settingsButtonText}
          backModalButtonStyle={styles.backModalButton}
          backModalButtonOnPress={() => setModalVisible(false)}
        />

        <View style={styles.header}>
          <PressableComponent
            style={styles.optionsIconView}
            onPress={() => setModalVisible(true)}>
            <Icons.AntDesign
              name="appstore1"
              size={15}
              style={styles.optionsIcon}
            />
          </PressableComponent>
          <CustomText.BoldText
            text="Profile Information"
            style={styles.headingText}
          />
          <PressableComponent
            style={styles.logoutIconView}
            onPress={() => handleLogout()}>
            <Icons.MaterialCommunityIcons
              name="logout"
              size={15}
              style={styles.logoutIcon}
            />
          </PressableComponent>
        </View>

        <>
          {Loader ? (
            <View style={styles.loaderIndicatorView}>
              <ActivityIndicator size="large" color={Colors.Primary} />
            </View>
          ) : (
            <View style={styles.userInformationView}>
              <Image
                localImage={Images.userImage}
                imageStyle={styles.userImage}
                resizeMode={'cover'}
              />

              <CustomText.TextWithSpan
                text="Username: "
                style={styles.usernameTextStyle}
                spanText={current_user?.name}
                spanTextStyle={styles.usernameSpanTextStyle}
              />

              <CustomText.TextWithSpan
                text="Email: "
                style={styles.emailTextStyle}
                spanText={current_user?.email}
                spanTextStyle={styles.emailSpanTextStyle}
              />

              <CustomText.TextWithSpan
                text="Mobile: "
                style={styles.mobileTextStyle}
                spanText={current_user?.mobile}
                spanTextStyle={styles.mobileSpanTextStyle}
              />

              <View style={styles.addressAndOrderButtonsView}>
                <PressableComponent
                  style={styles.myAddressButton}
                  onPress={handleMyAddressButton}>
                  <CustomText.RegularText
                    text="My Address"
                    style={styles.myAddressText}
                  />
                </PressableComponent>

                <PressableComponent
                  style={styles.myOrdersButton}
                  onPress={handleMyOrdersButton}>
                  <CustomText.RegularText
                    text="My Orders"
                    style={styles.myOrdersText}
                  />
                </PressableComponent>
              </View>
            </View>
          )}
        </>
      </ScrollView>

      <BottomNavigator
        navigationBarView={styles.navigationBarView}
        wishlistLength={wishlistItems?.length}
        wishlistIconPress={handleHeartIcon}
        wishlistQuanitityView={styles.wishlistQuanitityView}
        wishlistQuanitityText={styles.wishlistQuanitity}
        wishlistIconSizeInNavbar={20}
        wishlistIconStyleInNavBar={styles.heartIconInNavBar}
        homeIconPress={handleHomeIcon}
        homeIconSizeInNavbar={20}
        homeIconStyleInNavBar={styles.homeIconStyleInNavBar}
        cartLength={cartItems?.length}
        cartIconPress={handleCartIcon}
        cartQuantityView={styles.addToCartQuantityView}
        cartQuantityText={styles.addToCartQuantity}
        cartIconSizeInNavbar={20}
        cartIconStyleInNavBar={styles.cartIconStyleInNavBar}
      />
    </View>
  );
};

export default Profile;

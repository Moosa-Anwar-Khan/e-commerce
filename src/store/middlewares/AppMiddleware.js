import { AppAction } from '../actions';
import { put } from 'redux-saga/effects';
import database from '@react-native-firebase/database';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { showToast } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { NavigationService } from '../../config';

export default class AppMiddleware {
  static *SignUp({ payload }) {
    try {
      console.log('I am in SignUp middleware');
      // yield firestore()
      //   .collection('users')
      //   .doc(payload.user_data.id)
      //   .set(payload.user_data);
      // yield auth().currentUser.sendEmailVerification();
      // yield auth().signOut();
      // showToast('success', 'Please check your inbox to verify your Email');
      // yield put(AppAction.SignUpSuccess());
      // NavigationService.replace('Signin');
      const batch = firestore().batch();

      const usersRef = firestore().collection('users').doc(payload.user_data.id);
      yield batch.set(usersRef, payload.user_data);

      const usersOrderRef = firestore().collection('users_orders').doc(payload.user_data.id);
      yield batch.set(usersOrderRef, payload.user_data);

      yield batch.commit();
      yield auth().currentUser.sendEmailVerification();
      yield auth().signOut();
      showToast('success', 'Please check your inbox to verify your Email');
      yield put(AppAction.SignUpSuccess());
      NavigationService.replace('Signin');
    } catch (err) {
      console.log(err);
    }
  }

  static *SignIn({ payload, cb }) {
    try {
      console.log('I am in SignIn middleware');
      const isUserLogin = yield auth().signInWithEmailAndPassword(
        payload.userEmail,
        payload.userPassword,
      );

      if (isUserLogin.user.emailVerified) {
        console.log('user Info:::::::::::: ', isUserLogin);
        AsyncStorage.setItem('current_user', JSON.stringify(isUserLogin));
        NavigationService.replace('Home');
        yield put(AppAction.LoginSuccess(isUserLogin));
      } else {
        showToast('error', 'Please verify your Email first');
        yield auth().currentUser.sendEmailVerification();
        yield put(AppAction.Logout());
      }
    } catch (err) {
      console.log('error in Signin middleware: ', err);
      cb(err);
      yield put(AppAction.LogoutSuccess());
    }
  }

  static *LogOut() {
    try {
      console.log('I am in LogOut middleware');
      yield AsyncStorage.removeItem('current_user');
      yield AsyncStorage.removeItem('userInfoFs');

      yield auth().signOut();
      yield put(AppAction.LogoutSuccess());
      NavigationService.reset_0('Signin');
    } catch (err) {
      console.log(err);
    }
  }

  static *Get_User_Info_From_Fs() {
    try {
      console.log('I am in Get_User_Info_From_Fs middleware');
      const userInfo = yield firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .get();
      yield put(AppAction.GetUserInfoFromFsSuccess(userInfo?._data));
    } catch (err) {
      console.log(err);
    }
  }

  static *Get_Popular_Products({cb}) {
    try {
      console.log('I am in Get_Popular_Products middleware');
      const popularProducts = yield firestore()
        .collection('popular_products')
        .doc("zdNYhSptZO03WhXaVGRi")
        .get();
      cb(popularProducts?._data.products);  
      yield put(AppAction.GetPopularProductsSuccess());
    } catch (err) {
      console.log(err);
    }
  }

  static *Get_Wishlist_Items({ cb }) {
    try {
      console.log('I am in Get_Wishlist_Items middleware');
      const wishlistItems = yield firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .get();
      console.log('Wishlist items:$$$$$$ ', wishlistItems?._data.wishlist);
      cb(wishlistItems?._data.wishlist);
      yield put(
        AppAction.GetWishlistItemsSuccess(wishlistItems?._data.wishlist),
      );
    } catch (err) {
      console.log(err);
    }
  }

  static *Set_Wishlist_Items({ payload }) {
    try {
      console.log('I am in Set_Wishlist_Items middleware');
      yield firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .update({
          wishlist: firestore.FieldValue.arrayUnion(payload.wishlistItem),
        });
      yield put(AppAction.SetWishlistItemsSuccess(payload.wishlistItem));
    } catch (err) {
      console.log(err);
    }
  }

  static *Remove_Wishlist_Item({ payload }) {
    try {
      console.log('I am in Remove_Wishlist_Item middleware');
      yield firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .update({
          wishlist: firestore.FieldValue.arrayRemove(payload.delWishlistItem),
        });
      yield put(AppAction.RemoveWishlistItemSuccess());
    } catch (err) {
      console.log(err);
    }
  }

  static *Get_Add_To_Cart_Items({ cb }) {
    try {
      console.log('I am in Get_Add_To_Cart_Items middleware');
      const addToCartItems = yield firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .get();
      console.log(
        'add to cart items:£££££££ ',
        addToCartItems?._data.add_to_cart,
      );
      cb(addToCartItems?._data.add_to_cart);
      yield put(
        AppAction.GetAddToCartItemsSuccess(addToCartItems?._data.add_to_cart),
      );
    } catch (err) {
      console.log(err);
    }
  }

  static *Set_Add_To_Cart_Items({ payload }) {
    try {
      console.log('I am in Set_Add_To_Cart_Items middleware');
      yield firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .update({
          add_to_cart: firestore.FieldValue.arrayUnion(payload.addToCartItem),
        });
      yield put(AppAction.SetAddToCartItemsSuccess(payload.addToCartItem));
    } catch (err) {
      console.log(err);
    }
  }

  static *Remove_Add_To_Cart_Item({ payload }) {
    try {
      console.log('I am in Remove_Add_To_Cart_Items middleware');
      yield firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .update({
          add_to_cart: firestore.FieldValue.arrayRemove(
            payload.delAddToCartItem,
          ),
        });
      yield put(AppAction.RemoveAddToCartItemSuccess());
    } catch (err) {
      console.log(err);
    }
  }

  static *Get_Address({ cb }) {
    try {
      console.log('I am in Get_Address middleware');
      const userData = yield firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .get();
      console.log('addresses %%%%%%%: ', userData?._data.address);
      cb(userData?._data.address);
      yield put(AppAction.GetAddressSuccess(userData?._data.address));
    } catch (err) {
      console.log(err);
    }
  }

  static *Set_Address({ payload }) {
    try {
      console.log('I am in Set_Address middleware');
      yield firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .update({
          address: firestore.FieldValue.arrayUnion(payload.added_address),
        });
      console.log(
        'I am in Set_Address middleware and address: ',
        payload.added_address,
      );
      yield put(AppAction.SetAddressSuccess());
      showToast('success', 'Address has been added successfully');
    } catch (err) {
      console.log(err);
    }
  }

  static *Remove_Address({ payload }) {
    try {
      console.log('I am in Remove_Address middleware');
      yield firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .update({
          address: firestore.FieldValue.arrayRemove(payload.delAddress),
        });
      yield put(AppAction.RemoveAddressSuccess());
    } catch (err) {
      console.log(err);
    }
  }

  static *Get_Orders({ cb }) {
    try {
      console.log('I am in Get_Orders middleware');
      const userData = yield firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .get();
      console.log('orders %%%%%%%: ', userData?._data.orders);
      cb(userData?._data.orders);
      yield put(AppAction.GetOrdersSuccess(userData?._data.orders));
    } catch (err) {
      console.log(err);
    }
  }

  static *Set_Order({ payload }) {
    try {
      console.log('I am in Set_Order middleware');
      // yield firestore().collection('users').doc(auth().currentUser.uid).update({
      //   orders: firestore.FieldValue.arrayUnion(payload.order_information),
      // });
      // yield firestore().collection('users').doc(auth().currentUser.uid).update({
      //   add_to_cart: [],
      // });
      // yield put(AppAction.SetOrderSuccess());
      // showToast('success', 'Payment completed successfully');
      // NavigationService.replace('Home');
      const batch = firestore().batch();

      const usersRef = firestore().collection('users').doc(auth().currentUser.uid);
      yield batch.update(usersRef, {orders: firestore.FieldValue.arrayUnion(payload.order_information)});
      yield batch.update(usersRef, {add_to_cart: []});

      const usersOrderRef = firestore().collection('users_orders').doc(auth().currentUser.uid);
      yield batch.update(usersOrderRef, {orders: firestore.FieldValue.arrayUnion(payload.order_information)});

      yield batch.commit();
      yield put(AppAction.SetOrderSuccess());
      showToast('success', 'Payment completed successfully');
      NavigationService.replace('Home');
    } catch (err) {
      console.log(err);
    }
  }
}

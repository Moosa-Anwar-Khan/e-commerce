import {AppMiddleware} from '../middlewares';
import {takeLatest, all} from 'redux-saga/effects';
import {
  GET_ADDRESS,
  GET_ADD_TO_CART_ITEMS,
  GET_ORDERS,
  GET_POPULAR_PRODUCTS,
  GET_USER_FROM_FS,
  GET_WISHLIST_ITEMS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  REMOVE_ADDRESS,
  REMOVE_ADD_TO_CART_ITEM,
  REMOVE_WISHLIST_ITEM,
  SET_ADDRESS,
  SET_ADD_TO_CART_ITEMS,
  SET_ORDER,
  SET_WISHLIST_ITEMS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
} from '../constants';

export function* Sagas() {
  yield all([
    yield takeLatest(SIGN_UP, AppMiddleware.SignUp),
    yield takeLatest(LOGIN, AppMiddleware.SignIn),
    yield takeLatest(LOGOUT, AppMiddleware.LogOut),
    yield takeLatest(GET_USER_FROM_FS, AppMiddleware.Get_User_Info_From_Fs),
    yield takeLatest(GET_POPULAR_PRODUCTS, AppMiddleware.Get_Popular_Products),
    yield takeLatest(GET_WISHLIST_ITEMS, AppMiddleware.Get_Wishlist_Items),
    yield takeLatest(SET_WISHLIST_ITEMS, AppMiddleware.Set_Wishlist_Items),
    yield takeLatest(REMOVE_WISHLIST_ITEM, AppMiddleware.Remove_Wishlist_Item),
    yield takeLatest(
      GET_ADD_TO_CART_ITEMS,
      AppMiddleware.Get_Add_To_Cart_Items,
    ),
    yield takeLatest(
      SET_ADD_TO_CART_ITEMS,
      AppMiddleware.Set_Add_To_Cart_Items,
    ),
    yield takeLatest(
      REMOVE_ADD_TO_CART_ITEM,
      AppMiddleware.Remove_Add_To_Cart_Item,
    ),
    yield takeLatest(GET_ADDRESS, AppMiddleware.Get_Address),
    yield takeLatest(SET_ADDRESS, AppMiddleware.Set_Address),
    yield takeLatest(REMOVE_ADDRESS, AppMiddleware.Remove_Address),
    yield takeLatest(GET_ORDERS, AppMiddleware.Get_Orders),
    yield takeLatest(SET_ORDER, AppMiddleware.Set_Order),
  ]);
}

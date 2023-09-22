import {
  GET_ADDRESS,
  GET_ADDRESS_SUCCESS,
  GET_ADD_TO_CART_ITEMS,
  GET_ADD_TO_CART_ITEMS_SUCCESS,
  GET_ORDERS,
  GET_ORDERS_SUCCESS,
  GET_POPULAR_PRODUCTS,
  GET_POPULAR_PRODUCTS_SUCCESS,
  GET_USER_FROM_FS,
  GET_USER_FROM_FS_SUCCESS,
  GET_WISHLIST_ITEMS,
  GET_WISHLIST_ITEMS_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  REMOVE_ADDRESS,
  REMOVE_ADDRESS_SUCCESS,
  REMOVE_ADD_TO_CART_ITEM,
  REMOVE_ADD_TO_CART_ITEM_SUCCESS,
  REMOVE_WISHLIST_ITEM,
  REMOVE_WISHLIST_ITEM_SUCCESS,
  SET_ADDRESS,
  SET_ADDRESS_SUCCESS,
  SET_ADD_TO_CART_ITEMS,
  SET_ADD_TO_CART_ITEMS_SUCCESS,
  SET_ORDER,
  SET_ORDER_SUCCESS,
  SET_WISHLIST_ITEMS,
  SET_WISHLIST_ITEMS_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
} from '../constants';

export default class AppAction {
  static Signup(payload) {
    return {
      type: SIGN_UP,
      payload,
    };
  }

  static SignUpSuccess(payload) {
    return {
      type: SIGN_UP_SUCCESS,
      payload,
    };
  }

  static Login(payload, cb) {
    return {
      type: LOGIN,
      payload,
      cb,
    };
  }

  static LoginSuccess(payload) {
    return {
      type: LOGIN_SUCCESS,
      payload,
    };
  }

  static Logout() {
    return {
      type: LOGOUT,
    };
  }

  static LogoutSuccess() {
    return {
      type: LOGOUT_SUCCESS,
    };
  }

  static GetUserInfoFromFs() {
    return {
      type: GET_USER_FROM_FS,
    };
  }

  static GetUserInfoFromFsSuccess(payload) {
    return {
      type: GET_USER_FROM_FS_SUCCESS,
      payload,
    };
  }

  static GetPopularProducts(cb) {
    return {
      type: GET_POPULAR_PRODUCTS,
      cb,
    };
  }

  static GetPopularProductsSuccess() {
    return {
      type: GET_POPULAR_PRODUCTS_SUCCESS,
    };
  }

  static GetWishlistItems(cb) {
    return {
      type: GET_WISHLIST_ITEMS,
      cb,
    };
  }

  static GetWishlistItemsSuccess(payload) {
    return {
      type: GET_WISHLIST_ITEMS_SUCCESS,
      payload,
    };
  }

  static SetWishlistItems(payload) {
    return {
      type: SET_WISHLIST_ITEMS,
      payload,
    };
  }

  static SetWishlistItemsSuccess(payload) {
    return {
      type: SET_WISHLIST_ITEMS_SUCCESS,
      payload,
    };
  }

  static RemoveWishlistItem(payload) {
    return {
      type: REMOVE_WISHLIST_ITEM,
      payload,
    };
  }

  static RemoveWishlistItemSuccess() {
    return {
      type: REMOVE_WISHLIST_ITEM_SUCCESS,
    };
  }

  static GetAddToCartItems(cb) {
    return {
      type: GET_ADD_TO_CART_ITEMS,
      cb,
    };
  }

  static GetAddToCartItemsSuccess(payload) {
    return {
      type: GET_ADD_TO_CART_ITEMS_SUCCESS,
      payload,
    };
  }

  static SetAddToCartItems(payload) {
    return {
      type: SET_ADD_TO_CART_ITEMS,
      payload,
    };
  }

  static SetAddToCartItemsSuccess(payload) {
    return {
      type: SET_ADD_TO_CART_ITEMS_SUCCESS,
      payload,
    };
  }

  static RemoveAddToCartItem(payload) {
    return {
      type: REMOVE_ADD_TO_CART_ITEM,
      payload,
    };
  }

  static RemoveAddToCartItemSuccess() {
    return {
      type: REMOVE_ADD_TO_CART_ITEM_SUCCESS,
    };
  }

  static GetAddress(cb) {
    return {
      type: GET_ADDRESS,
      cb,
    };
  }

  static GetAddressSuccess(payload) {
    return {
      type: GET_ADDRESS_SUCCESS,
      payload,
    };
  }

  static SetAddress(payload) {
    return {
      type: SET_ADDRESS,
      payload,
    };
  }

  static SetAddressSuccess() {
    return {
      type: SET_ADDRESS_SUCCESS,
    };
  }

  static RemoveAddress(payload) {
    return {
      type: REMOVE_ADDRESS,
      payload,
    };
  }

  static RemoveAddressSuccess() {
    return {
      type: REMOVE_ADDRESS_SUCCESS,
    };
  }

  static GetOrders(cb) {
    return {
      type: GET_ORDERS,
      cb,
    };
  }

  static GetOrdersSuccess(payload) {
    return {
      type: GET_ORDERS_SUCCESS,
      payload,
    };
  }

  static SetOrder(payload) {
    return {
      type: SET_ORDER,
      payload,
    };
  }

  static SetOrderSuccess() {
    return {
      type: SET_ORDER_SUCCESS,
    };
  }
}

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

const initialState = {
  user: null,
  userInfoFS: null,
  loader: false,
  cardLoader: false,
  wishlistItems: null,
  addToCartItems: null,
  address: null,
  orders: null,
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      state = {
        ...state,
        loader: true,
      };
      break;

    case SIGN_UP_SUCCESS:
      state = {
        ...state,
        loader: false,
      };
      break;

    case LOGIN:
      state = {
        ...state,
        loader: true,
      };
      break;

    case LOGIN_SUCCESS:
      state = {
        ...state,
        loader: false,
        user: action.payload,
      };
      break;

    case LOGOUT:
      state = {
        ...state,
        loader: true,
      };
      break;

    case LOGOUT_SUCCESS:
      state = {
        user: null,
        userInfoFS: null,
        loader: false,
        cardLoader: false,
        wishlistItems: null,
        addToCartItems: null,
        address: null,
        orders: null,
      };
      break;

    case GET_USER_FROM_FS:
      state = {
        ...state,
        loader: true,
      };
      break;

    case GET_USER_FROM_FS_SUCCESS:
      state = {
        ...state,
        userInfoFS: action.payload,
        loader: false,
      };
      break;

    case GET_POPULAR_PRODUCTS:
    state = {
      ...state,
      loader: true,
    };
    break;

    case GET_POPULAR_PRODUCTS_SUCCESS:
    state = {
      ...state,
      loader: false,
    };
    break;

    case GET_WISHLIST_ITEMS:
      state = {
        ...state,
        cardLoader: true,
      };
      break;

    case GET_WISHLIST_ITEMS_SUCCESS:
      state = {
        ...state,
        wishlistItems: action.payload,
        cardLoader: false,
      };
      break;

    case SET_WISHLIST_ITEMS:
      state = {
        ...state,
        cardLoader: true,
      };
      break;

    case SET_WISHLIST_ITEMS_SUCCESS:
      state = {
        ...state,
        wishlistItems: action.payload,
        cardLoader: false,
      };
      break;

    case REMOVE_WISHLIST_ITEM:
      state = {
        ...state,
        cardLoader: true,
      };
      break;

    case REMOVE_WISHLIST_ITEM_SUCCESS:
      state = {
        ...state,
        cardLoader: false,
      };
      break;

    case GET_ADD_TO_CART_ITEMS:
      state = {
        ...state,
        cardLoader: true,
      };
      break;

    case GET_ADD_TO_CART_ITEMS_SUCCESS:
      state = {
        ...state,
        addToCartItems: action.payload,
        cardLoader: false,
      };
      break;

    case SET_ADD_TO_CART_ITEMS:
      state = {
        ...state,
        cardLoader: true,
      };
      break;

    case SET_ADD_TO_CART_ITEMS_SUCCESS:
      state = {
        ...state,
        addToCartItems: action.payload,
        cardLoader: false,
      };
      break;

    case REMOVE_ADD_TO_CART_ITEM:
      state = {
        ...state,
        cardLoader: true,
      };
      break;

    case REMOVE_ADD_TO_CART_ITEM_SUCCESS:
      state = {
        ...state,
        cardLoader: false,
      };
      break;

    case GET_ADDRESS:
      state = {
        ...state,
        loader: true,
      };
      break;

    case GET_ADDRESS_SUCCESS:
      state = {
        ...state,
        address: action.payload,
        loader: false,
      };
      break;

    case SET_ADDRESS:
      state = {
        ...state,
        loader: true,
      };
      break;

    case SET_ADDRESS_SUCCESS:
      state = {
        ...state,
        loader: false,
      };
      break;

    case REMOVE_ADDRESS:
      state = {
        ...state,
        loader: true,
      };
      break;

    case REMOVE_ADDRESS_SUCCESS:
      state = {
        ...state,
        loader: false,
      };
      break;

    case GET_ORDERS:
      state = {
        ...state,
        loader: true,
      };
      break;

    case GET_ORDERS_SUCCESS:
      state = {
        ...state,
        orders: action.payload,
        loader: false,
      };
      break;

    case SET_ORDER:
      state = {
        ...state,
        loader: true,
      };
      break;

    case SET_ORDER_SUCCESS:
      state = {
        ...state,
        loader: false,
      };
      break;

    default:
      break;
  }

  return state;
}
import {
  Home,
  ProductInformation,
  Wishlist,
  AddToCart,
  Profile,
  MyAddress,
  AddAddress,
  Checkout,
  PaymentScreen,
  MyOrders,
} from '../../containers';

export const HomeStack = [
  {
    name: 'Home',
    component: Home,
    key: 'Home',
  },
  {
    name: 'ProductInformation',
    component: ProductInformation,
    key: 'ProductInformation',
  },
  {
    name: 'Wishlist',
    component: Wishlist,
    key: 'Wishlist',
  },
  {
    name: 'AddToCart',
    component: AddToCart,
    key: 'AddToCart',
  },
  {
    name: 'Profile',
    component: Profile,
    key: 'Profile',
  },
  {
    name: 'MyAddress',
    component: MyAddress,
    key: 'MyAddress',
  },
  {
    name: 'AddAddress',
    component: AddAddress,
    key: 'AddAddress',
  },
  {
    name: 'Checkout',
    component: Checkout,
    key: 'Checkout',
  },
  {
    name: 'PaymentScreen',
    component: PaymentScreen,
    key: 'PaymentScreen',
  },
  {
    name: 'MyOrders',
    component: MyOrders,
    key: 'MyOrders',
  },
];

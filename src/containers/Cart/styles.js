import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  loaderIndicatorView: {
    position: 'absolute',
    left: Metrix.HorizontalSize(0),
    right: Metrix.HorizontalSize(0),
    top: Metrix.VerticalSize(0),
    bottom: Metrix.VerticalSize(0),
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },

  noItemsText: {
    fontWeight: '500',
    color: Colors.Black,
    fontSize: Metrix.customFontSize(20),
    marginTop: '50%',
  },

  cartItemsQuantityAndCheckoutButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '2%',
  },

  cartItemsQuantityView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '1%',
    backgroundColor: Colors.Black,
    marginLeft: '40%',
    marginRight: '40%',
    borderRadius: Metrix.Radius,
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  checkoutButton: {
    position: 'absolute',
    left: '4%',
    right: '4%',
    top: '85%',
    bottom: '9%',
    backgroundColor: Colors.Success,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
    borderRadius: Metrix.Radius,
    opacity: 0.95,
  },

  checkoutButtonText: {
    color: Colors.White,
  },

  checkoutIcon: {
    color: Colors.White,
    marginLeft: '5%',
  },

  headercartIcon: {
    color: Colors.Success,
  },

  headercartItemsQuantity: {
    color: Colors.White,
  },

  scrollView: {
    paddingVertical: Metrix.VerticalSize(20),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
  },

  headingText: {
    color: Colors.Black,
    fontSize: Metrix.FontLarge,
    fontWeight: 'bold',
    marginLeft: '45%',
  },

  userIcon: {
    height: Metrix.VerticalSize(35),
    width: Metrix.HorizontalSize(30),
    borderRadius: 50,
    marginLeft: '55%',
    borderWidth: 0.5,
    borderColor: Colors.Primary,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: Metrix.Radius,
    marginLeft: '5%',
    marginRight: '5%',
    height: Metrix.VerticalSize(45),
    marginTop: '5%',
  },

  cartItemView: {
    backgroundColor: Colors.White,
    marginTop: '3%',
    marginHorizontal: '5%',
    borderRadius: Metrix.Radius,
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(2),
    },
    shadowOpacity: 0.41,
    shadowRadius: 2,

    elevation: 5,
  },

  cartItemImage: {
    width: '40%',
    height: Metrix.VerticalSize(150),
    marginLeft: '30%',
  },

  cartItemTitleText: {
    textAlign: 'left',
    fontSize: Metrix.customFontSize(10),
    fontWeight: '900',
    marginLeft: '2%',
  },

  cartItemPriceText: {
    textAlign: 'left',
    color: Colors.Black,
    fontWeight: '900',
    fontSize: Metrix.customFontSize(12),
    marginLeft: '2%',
  },

  ItemQuantityAndAddToCartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2%',
  },

  removeFromAddToCartButton: {
    backgroundColor: Colors.Black,
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    margin: '1%',
    marginLeft: '2%',
    borderRadius: 20,
    borderColor: Colors.MediumGray,
    borderWidth: 0.5,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(2),
    },
    shadowOpacity: 0.41,
    shadowRadius: 2,

    elevation: 5,
  },

  cartOffIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.Success,
  },

  productQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: '2%',
  },

  quantityHeading: {
    color: Colors.Black,
    fontSize: Metrix.customFontSize(13),
  },

  increaseButton: {
    marginLeft: '5%',
  },

  increaseButtonIcon: {
    color: Colors.Success,
  },

  quantityText: {
    color: Colors.Black,
    fontSize: Metrix.customFontSize(13),
  },

  decreaseButton: {
    marginRight: '5%',
  },

  decreaseButtonIcon: {
    color: Colors.Danger,
  },

  navigationBarView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.LightGray,
    borderRadius: 5,
    paddingHorizontal: Metrix.HorizontalSize(15),
    paddingVertical: Metrix.VerticalSize(15),
  },

  cartIconButtonInNavBar: {
    backgroundColor: Colors.Primary,
    paddingHorizontal: Metrix.HorizontalSize(9),
    paddingVertical: Metrix.VerticalSize(9),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrix.VerticalSize(-30),
    borderWidth: 3,
    borderColor: Colors.White,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  homeIconStyleInNavBar: {
    color: Colors.Primary,
  },

  wishlistQuanitityView: {
    backgroundColor: Colors.Danger,
    paddingHorizontal: Metrix.HorizontalSize(5),
    borderRadius: 50,
    marginTop: Metrix.VerticalSize(-10),
  },

  wishlistQuanitity: {
    fontSize: Metrix.VerticalSize(10),
    color: Colors.White,
    fontWeight: '700',
  },

  heartIconInNavBar: {
    color: Colors.Primary,
  },

  addToCartQuantityView: {
    backgroundColor: Colors.Success,
    paddingHorizontal: Metrix.HorizontalSize(5),
    borderRadius: 50,
  },

  addToCartQuantity: {
    fontSize: Metrix.customFontSize(10),
    color: Colors.White,
    fontWeight: '700',
  },

  cartIconStyleInNavBar: {
    color: Colors.White,
  },

  userIconNavBar: {
    color: Colors.Primary,
  },
});

export default styles;

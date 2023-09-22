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

  wishlistItemsQuantityView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '2%',
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

  headerHeartIcon: {
    color: Colors.Danger,
  },

  headerWishlistItemsQuantity: {
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
    marginLeft: '41%',
  },

  userIcon: {
    height: Metrix.VerticalSize(35),
    width: Metrix.HorizontalSize(30),
    borderRadius: 50,
    marginLeft: '52%',
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
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  searchInput: {
    fontSize: Metrix.customFontSize(12),
    color: Colors.PlaceHolder,
    marginLeft: '7%',
    alignItems: 'center',
    marginRight: '10%',
  },

  searchIcon: {
    color: Colors.MediumGray,
    marginLeft: '92%',
    position: 'absolute',
  },

  wishlistItemView: {
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

  showButton: {
    backgroundColor: Colors.Primary,
    borderRadius: 10,
    marginLeft: '35%',
    marginRight: '35%',
    marginTop: '2%',
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
  },

  showButtonText: {
    fontSize: Metrix.customFontSize(10),
    color: Colors.White,
    fontWeight: 'bold',
  },

  wishlistItemsImage: {
    width: '40%',
    height: Metrix.VerticalSize(150),
    marginLeft: '30%',
  },

  wishlistItemTitleText: {
    textAlign: 'left',
    fontSize: Metrix.customFontSize(10),
    fontWeight: '900',
    marginLeft: '2%',
  },

  wishlistItemPriceText: {
    textAlign: 'left',
    color: Colors.Black,
    fontWeight: '900',
    fontSize: Metrix.customFontSize(12),
    marginLeft: '2%',
    marginTop: '1%',
  },

  removeAndAddToCartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2%',
  },

  removeFromWishlistButton: {
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

  heartDislikeIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.Danger,
  },

  coloredCart: {
    color: Colors.Success,
    margin: '1%',
    marginRight: '2%',
  },

  uncoloredCart: {
    color: Colors.Success,
    margin: '1%',
    marginRight: '2%',
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

  heartIconButtonInNavBar: {
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
    borderRadius: 50,
  },

  wishlistQuanitity: {
    fontSize: Metrix.customFontSize(10),
    color: Colors.White,
    fontWeight: '700',
  },

  heartIconNavBar: {
    color: Colors.White,
  },

  addToCartQuantityView: {
    backgroundColor: Colors.Success,
    paddingHorizontal: Metrix.HorizontalSize(5),
    borderRadius: 50,
    marginTop: Metrix.VerticalSize(-10),
  },

  addToCartQuantity: {
    fontSize: Metrix.customFontSize(10),
    color: Colors.White,
    fontWeight: '700',
  },

  cartIconStyleInNavBar: {
    color: Colors.Primary,
  },

  userIconNavBar: {
    color: Colors.Primary,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  loaderIndicatorView: {
    marginTop: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },

  scrollView: {
    paddingVertical: Metrix.VerticalSize(15),
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0%',
  },

  optionsIconView: {
    backgroundColor: Colors.LightGray,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Metrix.VerticalSize(10),
    marginLeft: '2%',
  },

  optionsIcon: {
    color: Colors.Primary,
  },

  logoutIconView: {
    backgroundColor: Colors.LightGray,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Metrix.VerticalSize(10),
    marginRight: '2%',
  },

  logoutIcon: {
    color: Colors.Primary,
  },

  userInformationView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    backgroundColor: Colors.White,
    paddingHorizontal: Metrix.HorizontalSize(50),
    paddingVertical: Metrix.VerticalSize(50),
    borderRadius: 20,
    marginLeft: '3%',
    marginRight: '3%',
    opacity: 0.95,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(2),
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  userImage: {
    height: Metrix.VerticalSize(150),
    width: Metrix.HorizontalSize(150),
    borderColor: Colors.Primary,
    borderRadius: 100,
    borderWidth: 2,
  },

  usernameTextStyle: {
    color: Colors.Black,
    marginTop: '5%',
  },

  usernameSpanTextStyle: {
    fontWeight: '900',
  },

  emailTextStyle: {
    color: Colors.Black,
    marginTop: '1%',
  },

  emailSpanTextStyle: {
    fontWeight: '900',
  },

  mobileTextStyle: {
    color: Colors.Black,
    marginTop: '1%',
  },

  mobileSpanTextStyle: {
    fontWeight: '900',
  },

  addressAndOrderButtonsView: {
    flexDirection: 'row',
    marginTop: '10%',
  },

  myAddressButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
    marginRight: '25%',
    borderRadius: Metrix.Radius,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(2),
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  myAddressText: {
    color: Colors.White,
    fontSize: Metrix.customFontSize(12),
    fontWeight: '900',
  },

  myOrdersButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
    marginLeft: '25%',
    borderRadius: Metrix.Radius,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(2),
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  myOrdersText: {
    color: Colors.White,
    fontSize: Metrix.customFontSize(12),
    fontWeight: '900',
  },

  myModal: {
    backgroundColor: Colors.Primary,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    borderColor: Colors.White,
    borderRadius: 40,
    marginTop: '20%',
    marginBottom: '10%',
    paddingHorizontal: Metrix.HorizontalSize(100),
    paddingVertical: Metrix.VerticalSize(100),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(7),
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },

  modalUserIcon: {
    textAlign: 'center',
    color: Colors.White,
    height: Metrix.VerticalSize(200),
    width: Metrix.HorizontalSize(200),
    borderColor: Colors.White,
    borderWidth: 2,
    borderRadius: 100,
  },

  usernameTxt: {
    color: Colors.White,
    fontWeight: '900',
    fontSize: Metrix.customFontSize(15),
    textAlign: 'auto',
    marginTop: '5%',
  },

  emailTxt: {
    color: Colors.White,
    fontWeight: '900',
    fontSize: Metrix.customFontSize(12),
    textAlign: 'center',
  },

  modalLoader: {
    marginTop: '30%',
  },

  logOutButton: {
    borderWidth: 2,
    borderColor: Colors.White,
    marginTop: '20%',
    backgroundColor: Colors.LightGray,
    paddingVertical: Metrix.VerticalSize(15),
    paddingHorizontal: Metrix.HorizontalSize(40),
    marginHorizontal: Metrix.HorizontalSize(-20),
    borderRadius: 30,
  },

  logOutButtonText: {
    textAlign: 'center',
    color: Colors.Primary,
    fontWeight: '900',
  },

  settingsButton: {
    borderWidth: 2,
    borderColor: Colors.White,
    marginTop: 10,
    backgroundColor: Colors.LightGray,
    paddingVertical: Metrix.VerticalSize(15),
    paddingHorizontal: Metrix.HorizontalSize(40),
    marginHorizontal: Metrix.HorizontalSize(-20),
    borderRadius: 30,
  },

  settingsButtonText: {
    textAlign: 'center',
    color: Colors.Primary,
    fontWeight: '900',
  },

  backModalButton: {
    marginTop: '10%',
    marginBottom: 10,
    borderWidth: 3,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(5),
    backgroundColor: Colors.Primary,
    borderColor: Colors.White,
    borderRadius: 50,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(7),
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },

  headingText: {
    color: Colors.Black,
    fontSize: Metrix.FontLarge,
    fontWeight: 'bold',
  },

  userIcon: {
    height: Metrix.VerticalSize(30),
    width: Metrix.HorizontalSize(30),
    borderRadius: 50,
    borderColor: Colors.Primary,
    borderWidth: 0.5,
    marginRight: '2%',
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: Metrix.Radius,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    height: Metrix.VerticalSize(45),
  },

  searchInput: {
    fontSize: Metrix.customFontSize(12),
    color: Colors.MediumGray,
    marginLeft: '2%',
    alignItems: 'center',
  },

  searchIcon: {
    color: Colors.MediumGray,
    marginLeft: '92%',
    position: 'absolute',
  },

  categoryButton: {
    backgroundColor: Colors.White,
    marginHorizontal: Metrix.HorizontalSize(5),
    marginVertical: Metrix.VerticalSize(5),
    paddingHorizontal: Metrix.HorizontalSize(15),
    paddingVertical: Metrix.VerticalSize(10),
    borderRadius: Metrix.Radius,
    borderColor: Colors.Primary,
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

  categoryButtonText: {
    fontSize: Metrix.customFontSize(10),
    fontWeight: 'bold',
    color: Colors.Black,
  },

  categoryButtonText2: {
    fontSize: Metrix.FontSmall,
    fontWeight: 'bold',
    color: Colors.Black,
    shadowColor: Colors.Black,
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
  },

  homeViewImagesCategoryText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
  },

  popularTextButton: {
    backgroundColor: Colors.White,
    marginLeft: '2%',
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    borderRadius: Metrix.Radius,
    borderColor: Colors.Primary,
    borderWidth: 0.8,
  },

  popularTextButton2: {
    backgroundColor: Colors.Primary,
    marginLeft: '2%',
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    borderRadius: Metrix.Radius,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(2),
    },
    shadowOpacity: 0.41,
    shadowRadius: 2,

    elevation: 5,
  },

  popularText: {
    fontSize: Metrix.customFontSize(10),
    color: Colors.Black,
    fontWeight: 'bold',
  },

  popularText2: {
    fontSize: Metrix.FontSmall,
    fontWeight: 'bold',
    color: Colors.White,
  },

  viewAllTextButton: {
    backgroundColor: Colors.White,
    marginRight: '2%',
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    borderRadius: Metrix.Radius,
    borderColor: Colors.Primary,
    borderWidth: 0.8,
  },

  viewAllTextButton2: {
    backgroundColor: Colors.Primary,
    marginRight: '2%',
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    borderRadius: Metrix.Radius,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(2),
    },
    shadowOpacity: 0.41,
    shadowRadius: 2,

    elevation: 5,
  },

  viewAllText: {
    fontSize: Metrix.customFontSize(10),
    color: Colors.Black,
    fontWeight: 'bold',
  },

  viewAllText2: {
    fontSize: Metrix.FontSmall,
    fontWeight: 'bold',
    color: Colors.White,
  },

  popularItemsView: {
    margin: '2%',
    backgroundColor: Colors.White,
    width: '45%',
    height: Metrix.VerticalSize(200),
    borderRadius: Metrix.Radius,
    borderColor: Colors.Primary,
    borderWidth: 0.5,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(7),
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },

  showButton: {
    backgroundColor: Colors.Primary,
    borderRadius: 10,
    marginLeft: '30%',
    marginRight: '30%',
    marginTop: '2%',
  },

  showButtonText: {
    fontSize: Metrix.customFontSize(10),
    color: Colors.White,
    fontWeight: 'bold',
  },

  likeAndAddToCartView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2%',
  },

  coloredHeart: {
    marginLeft: '4%',
    color: Colors.Danger,
  },

  uncoloredHeart: {
    marginLeft: '4%',
    color: Colors.Danger,
  },

  coloredCart: {
    marginRight: '4%',
    color: Colors.Success,
  },

  uncoloredCart: {
    marginRight: '4%',
    color: Colors.Success,
  },

  popularItemsImage: {
    width: '60%',
    height: '40%',
    marginLeft: '20%',
  },

  popularItemsName: {
    fontSize: Metrix.customFontSize(8),
    fontWeight: '400',
    color: Colors.Primary,
    marginLeft: '2%',
    marginTop: '10%',
  },

  popularItemsPrice: {
    fontSize: Metrix.customFontSize(8),
    fontWeight: '900',
    color: Colors.Black,
    marginLeft: '2%',
  },

  allItemsView: {
    margin: '2%',
    backgroundColor: Colors.White,
    width: '45%',
    height: Metrix.VerticalSize(200),
    borderRadius: Metrix.Radius,
    borderColor: Colors.Primary,
    borderWidth: 0.5,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(7),
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },

  allItemsImage: {
    width: '60%',
    height: '40%',
    marginLeft: '20%',
  },

  allItemsName: {
    fontSize: Metrix.customFontSize(8),
    fontWeight: '400',
    color: Colors.Primary,
    marginLeft: '2%',
    marginTop: '10%',
  },

  allItemsPrice: {
    fontSize: Metrix.customFontSize(8),
    fontWeight: '900',
    color: Colors.Black,
    marginLeft: '2%',
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
    fontSize: Metrix.customFontSize(10),
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

  userIconNavBarView: {
    backgroundColor: Colors.Primary,
    paddingVertical: Metrix.VerticalSize(9),
    paddingHorizontal: Metrix.HorizontalSize(12),
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

  userIconNavBar: {
    color: Colors.White,
  },
});

export default styles;

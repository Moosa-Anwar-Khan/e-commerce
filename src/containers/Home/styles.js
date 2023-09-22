import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  loaderIndicatorView: {
    marginTop: '30%',
  },

  popularItemsLoader: {
    marginTop: '50%',
  },

  allItemsLoader: {
    marginTop: '50%',
  },

  container: {
    flex: 1,
    backgroundColor: Colors.LightGray,
  },

  scrollView: {
    paddingVertical: Metrix.VerticalSize(15),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '0%',
  },

  optionsIconView: {
    backgroundColor: Colors.White,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Metrix.VerticalSize(10),
    paddingHorizontal: Metrix.HorizontalSize(10),
    marginLeft: '2%',
  },

  optionsIcon: {
    color: Colors.Primary,
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
    paddingVertical: Metrix.VerticalSize(100),
    paddingHorizontal: Metrix.HorizontalSize(100),
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
    textAlign: 'auto',
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
    marginTop: Metrix.VerticalSize(10),
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
    marginBottom: Metrix.VerticalSize(10),
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
    marginLeft: '10%',
  },

  shoppingBagIconView: {
    backgroundColor: Colors.White,
    borderRadius: 50,
    marginRight: -65,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Metrix.VerticalSize(12),
    paddingHorizontal: Metrix.HorizontalSize(12),
    marginLeft: '2%',
  },

  shoppingBagIcon: {
    color: Colors.MediumGray,
  },

  userIcon: {
    height: Metrix.VerticalSize(35),
    width: Metrix.HorizontalSize(30),
    borderRadius: 50,
    marginRight: '2%',
    borderWidth: 0.5,
    borderColor: Colors.Primary,
  },

  searchBarView: {
    flexDirection: 'row',
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
    fontSize: 12,
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

  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    marginHorizontal: Metrix.HorizontalSize(5),
    marginVertical: Metrix.VerticalSize(5),
    paddingHorizontal: Metrix.HorizontalSize(15),
    paddingVertical: Metrix.VerticalSize(10),
    borderRadius: Metrix.Radius,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  categoryImageStyle: {
    height: Metrix.VerticalSize(20), 
    width: Metrix.HorizontalSize(20),
    margin: Metrix.HorizontalSize(3),
    backgroundColor: Colors.White,
  },

  categoryButtonText: {
    fontSize: Metrix.customFontSize(10),
    fontWeight: 'bold',
    color: Colors.Black,
  },

  categoryButtonSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.Primary,
    marginHorizontal: Metrix.HorizontalSize(5),
    marginVertical: Metrix.VerticalSize(5),
    paddingHorizontal: Metrix.HorizontalSize(15),
    paddingVertical: Metrix.VerticalSize(10),
    borderRadius: Metrix.Radius,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  categorySelectedImageStyle: {
    height: Metrix.VerticalSize(20), 
    width: Metrix.HorizontalSize(20),
    margin: Metrix.HorizontalSize(3),
    backgroundColor: Colors.Primary,
  },

  categoryButtonSelectedText: {
    fontSize: Metrix.customFontSize(10),
    fontWeight: 'bold',
    color: Colors.White,
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
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  popularTextButtonPressed: {
    backgroundColor: Colors.Primary,
    marginLeft: '2%',
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    borderRadius: Metrix.Radius,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  popularButtonText: {
    fontSize: Metrix.customFontSize(10),
    color: Colors.Black,
    fontWeight: 'bold',
  },

  popularButtonSelectedText: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: 'bold',
    color: Colors.White,
  },

  viewAllTextButton: {
    backgroundColor: Colors.White,
    marginRight: '2%',
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    borderRadius: Metrix.Radius,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  viewAllTextButtonPressed: {
    backgroundColor: Colors.Primary,
    marginRight: '2%',
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    borderRadius: Metrix.Radius,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  viewAllButtonText: {
    fontSize: Metrix.customFontSize(10),
    color: Colors.Black,
    fontWeight: 'bold',
  },

  viewAllButtonSelectedText: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: 'bold',
    color: Colors.White,
  },

  popularItemsView: {
    margin: '2%',
    marginLeft: '2.5%',
    backgroundColor: Colors.White,
    width: '45%',
    height: Metrix.VerticalSize(210),
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    borderRadius: Metrix.Radius,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
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
    height: '50%',
    marginLeft: '20%',
  },

  popularItemsName: {
    fontSize: Metrix.customFontSize(10),
    fontWeight: '600',
    color: Colors.Black,
    marginLeft: '2%',
    marginTop: '10%',
  },

  popularItemsPrice: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: '900',
    color: Colors.Black,
    marginLeft: '2%',
    marginTop: '2%',
  },

  allItemsView: {
    margin: '2%',
    marginLeft: '2.5%',
    backgroundColor: Colors.White,
    width: '45%',
    height: Metrix.VerticalSize(210),
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    borderRadius: Metrix.Radius,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  allItemsImage: {
    width: '60%',
    height: '50%',
    marginLeft: '20%',
    borderRadius: 25,
  },

  allItemsName: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.Black,
    marginLeft: '2%',
    marginTop: '10%',
  },

  allItemsPrice: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: '900',
    color: Colors.Black,
    marginLeft: '2%',
    marginTop: '2%',
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

  homeIconButtonStyleInNavBar: {
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
    color: Colors.White,
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

  userIconNavBar: {
    color: Colors.Primary,
  },
});

export default styles;

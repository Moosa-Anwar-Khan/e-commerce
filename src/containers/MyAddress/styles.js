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

  backButton: {
    backgroundColor: Colors.White,
    marginTop: '3%',
    marginRight: '80%',
    marginLeft: '3%',
  },

  backButtonIcons: {
    color: Colors.Primary,
  },

  addAddressButton: {
    backgroundColor: Colors.Primary,
    marginLeft: '30%',
    marginRight: '30%',
    marginTop: '3%',
    marginBottom: '3%',
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
    borderRadius: 15,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 5,
  },

  addAddressButtonText: {
    color: Colors.White,
    fontWeight: '700',
  },

  horizontalLine: {
    marginTop: '2%',
    borderWidth: 0.5,
    borderColor: Colors.Primary,
  },

  addressView: {
    backgroundColor: Colors.White,
    margin: '2%',
    marginHorizontal: '4%',
    paddingTop: Metrix.VerticalSize(20),
    borderRadius: 15,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(3),
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  houseText: {
    fontSize: Metrix.customFontSize(12),
    color: Colors.Black,
    textAlign: 'center',
  },

  houseSpanText: {
    fontWeight: '700',
  },

  locationText: {
    fontSize: Metrix.customFontSize(12),
    color: Colors.Black,
    textAlign: 'center',
  },

  locationSpanText: {
    fontWeight: '700',
  },

  cityText: {
    fontSize: Metrix.customFontSize(12),
    color: Colors.Black,
    textAlign: 'center',
  },

  citySpanText: {
    fontWeight: '700',
  },

  deleteButton: {
    backgroundColor: Colors.Black,
    margin: '1%',
    paddingHorizontal: Metrix.HorizontalSize(5),
    paddingVertical: Metrix.VerticalSize(5),
    borderRadius: 15,
    marginLeft: '85%',
    marginRight: '2%',
  },

  deleteIcon: {
    color: Colors.Danger,
    textAlign: 'center',
  },

  noAddressTextStyle: {
    marginTop: '50%',
  },

  myModal: {
    backgroundColor: Colors.Primary,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    borderColor: Colors.White,
    borderRadius: 40,
    marginTop: 10,
    paddingHorizontal: Metrix.HorizontalSize(100),
    paddingVertical: Metrix.VerticalSize(100),
    paddingBottom: Metrix.VerticalSize(150),
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
    height: Metrix.VerticalSize(150),
    width: Metrix.HorizontalSize(150),
    borderRadius: 100,
    borderColor: Colors.White,
    borderWidth: 2,
  },

  usernameTxt: {
    color: Colors.ModalTextColor,
    fontWeight: '900',
    fontSize: Metrix.customFontSize(15),
    textAlign: 'auto',
  },

  emailTxt: {
    color: Colors.White,
    fontWeight: '900',
    fontSize: Metrix.customFontSize(12),
    textAlign: 'center',
  },

  logOutButton: {
    borderWidth: 2,
    borderColor: Colors.White,
    marginTop: Metrix.VerticalSize(20),
    marginHorizontal: Metrix.HorizontalSize(-20),
    backgroundColor: Colors.LightGray,
    paddingVertical: Metrix.VerticalSize(15),
    paddingHorizontal: Metrix.HorizontalSize(40),
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
    marginTop: Metrix.VerticalSize(60),
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
  },

  userIcon: {
    height: Metrix.VerticalSize(30),
    width: Metrix.HorizontalSize(30),
    borderRadius: 50,
    borderColor: Colors.Primary,
    borderWidth: 0.5,
    marginRight: '2%',
  },

  navigationBarView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.LightGray,
    borderRadius: 5,
    paddingVertical: Metrix.VerticalSize(15),
    paddingHorizontal: Metrix.HorizontalSize(15),
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

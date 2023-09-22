import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrix} from '../../config';
import {Dimensions} from 'react-native';

const width = (Dimensions.get('window').width - 4 * 10) / 2;

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
    backgroundColor: Colors.LightGray,
  },

  myModal: {
    backgroundColor: Colors.LightGray,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.85,
    borderColor: Colors.White,
    borderRadius: 50,
    marginTop: '50%',
    paddingVertical: Metrix.VerticalSize(50),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(7),
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },

  selectYourAddressText: {
    color: Colors.Black,
    fontWeight: '900',
  },

  addAddressButton: {
    backgroundColor: Colors.Primary,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
    borderRadius: Metrix.Radius,
  },

  addAddressButtonText: {
    textAlign: 'center',
    color: Colors.White,
    fontSize: Metrix.customFontSize(12),
    fontWeight: '700',
  },

  addressFlatlistStyle: {
    marginTop: '10%',
    height: Metrix.VerticalSize(200),
  },

  noAddressAddedTextStyle: {
    marginTop: '10%',
  },

  AddressView: {
    margin: '2%',
    backgroundColor: Colors.White,
    paddingVertical: Metrix.VerticalSize(10),
    paddingHorizontal: Metrix.HorizontalSize(80),
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

  houseText: {
    textAlign: 'auto',
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
  },

  houseSpanText: {
    fontWeight: '700',
  },

  locationText: {
    textAlign: 'auto',
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
  },

  locationSpanText: {
    fontWeight: '700',
  },

  cityText: {
    textAlign: 'auto',
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
  },

  citySpanText: {
    fontWeight: '700',
  },

  backModalButton: {
    marginTop: '5%',
    borderWidth: 2,
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

  backButton: {
    backgroundColor: Colors.LightGray,
    marginTop: '3%',
    marginRight: '80%',
    marginLeft: '3%',
  },

  backButtonIcons: {
    color: Colors.Primary,
  },

  cartItemFlatList: {
    marginVertical: '2%',
  },

  cartItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    margin: '1%',
    marginHorizontal: '5%',
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

  cartItemImage: {
    width: Metrix.HorizontalSize(120),
    height: Metrix.VerticalSize(120),
    margin: '1%',
  },

  cartItemDetails: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  cartItemTitle: {
    color: Colors.Primary,
    fontWeight: '700',
    fontSize: Metrix.customFontSize(12),
  },

  priceText: {
    color: Colors.Black,
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
  },

  quantityText: {
    color: Colors.Black,
    fontWeight: '500',
    fontSize: Metrix.customFontSize(12),
  },

  totalItemPriceText: {
    color: Colors.Black,
    fontWeight: '500',
    fontSize: Metrix.customFontSize(12),
  },

  totalItemPriceSpanText: {
    fontWeight: '900',
  },

  selectAddressButton: {
    margin: '2%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.Primary,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
    marginHorizontal: '30%',
    borderRadius: Metrix.Radius,
  },

  selectAddressButtonText: {
    color: Colors.White,
    fontSize: Metrix.customFontSize(15),
  },

  addressTextStyle: {
    marginTop: '2%',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: Metrix.customFontSize(12),
    color: Colors.Black,
  },

  addressSpanTextStyle: {
    fontWeight: '900',
    color: Colors.Primary,
  },

  totalAmountTextView: {
    marginTop: '1%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  totalText: {
    fontWeight: '500',
    fontSize: Metrix.customFontSize(15),
    color: Colors.Black,
  },

  totalSpanText: {
    fontWeight: '900',
    color: Colors.Success,
  },

  payButton: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.Success,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
    marginHorizontal: '30%',
    marginVertical: '5%',
    borderRadius: Metrix.Radius,
  },

  payButtonText: {
    color: Colors.White,
  },
});

export default styles;

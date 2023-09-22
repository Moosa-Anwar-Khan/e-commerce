import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LightGray,
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

  creditCardImageView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
  },

  creditCardImage: {
    height: Metrix.HorizontalSize(200),
    width: Metrix.VerticalSize(300),
    borderRadius: Metrix.Radius,
  },

  logosView: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: Metrix.Radius,
    margin: '2%',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  visaLogo: {
    height: Metrix.VerticalSize(50),
    width: Metrix.HorizontalSize(50),
  },

  mastercardLogo: {
    height: Metrix.VerticalSize(50),
    width: Metrix.HorizontalSize(50),
  },

  americanExpressLogo: {
    height: Metrix.VerticalSize(50),
    width: Metrix.HorizontalSize(50),
  },

  paypalLogo: {
    height: Metrix.VerticalSize(50),
    width: Metrix.HorizontalSize(50),
  },

  discoverLogo: {
    height: Metrix.VerticalSize(50),
    width: Metrix.HorizontalSize(50),
  },

  cardStyle: {
    backgroundColor: Colors.White,
    textColor: Colors.Black,
    fontSize: Metrix.customFontSize(12),
  },

  cardFieldStyle: {
    marginTop: '2%',
    width: '100%',
    height: Metrix.VerticalSize(50),
    flexDirection: 'row',
    backgroundColor: Colors.White,
    borderColor: Colors.LightGray,
    borderWidth: 0.5,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  billingAddressView: {
    marginTop: '5%',
  },

  billingAddressText: {
    color: Colors.Black,
    fontWeight: '700',
  },

  nameText: {
    marginTop: '2%',
    color: Colors.Black,
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    backgroundColor: Colors.White,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
  },

  nameSpanText: {
    fontWeight: '700',
  },

  emailText: {
    marginTop: Metrix.VerticalSize(2),
    color: Colors.Black,
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    backgroundColor: Colors.White,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
  },

  emailSpanText: {
    fontWeight: '700',
  },

  houseText: {
    marginTop: Metrix.VerticalSize(2),
    color: Colors.Black,
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    backgroundColor: Colors.White,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
  },

  houseSpanText: {
    fontWeight: '700',
  },

  locationText: {
    marginTop: Metrix.VerticalSize(2),
    color: Colors.Black,
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    backgroundColor: Colors.White,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
  },

  locationSpanText: {
    fontWeight: '700',
  },

  cityText: {
    marginTop: Metrix.VerticalSize(2),
    color: Colors.Black,
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    backgroundColor: Colors.White,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
  },

  citySpanText: {
    fontWeight: '700',
  },

  totalText: {
    marginTop: Metrix.VerticalSize(2),
    textAlign: 'center',
    color: Colors.Black,
    fontSize: Metrix.customFontSize(15),
    fontWeight: '500',
    backgroundColor: Colors.White,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
  },

  totalSpanText: {
    fontWeight: '700',
    color: Colors.Success,
  },

  payButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Success,
    marginHorizontal: '10%',
    marginTop: '5%',
    padding: Metrix.VerticalSize(12),
    borderRadius: Metrix.Radius,
  },

  payButtonText: {
    color: Colors.White,
    fontWeight: '900',
  },
});

export {styles};

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
    backgroundColor: Colors.White,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    backgroundColor: Colors.White,
    marginLeft: '2%',
    marginTop: '2%',
  },

  backButtonIcons: {
    color: Colors.Primary,
  },

  headingText: {
    marginLeft: '23%',
    marginTop: '2%',
    color: Colors.Black,
    fontSize: Metrix.FontLarge,
  },

  ordersView: {
    backgroundColor: Colors.White,
    marginHorizontal: '3%',
    marginVertical: '5%',
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
    borderRadius: Metrix.Radius,
    borderColor: Colors.Primary,
    borderWidth: 0.6,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(1),
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  addressView: {
    backgroundColor: Colors.LightGray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: Metrix.LightRadius,
    borderColor: Colors.Black,
    borderWidth: 0.3,
  },

  addressText: {
    fontSize: Metrix.customFontSize(13),
    fontWeight: '700',
  },

  houseText: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    color: Colors.Black,
  },

  houseSpanText: {
    fontWeight: '700',
  },

  locationText: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    color: Colors.Black,
  },

  locationSpanText: {
    fontWeight: '700',
  },

  cityText: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    color: Colors.Black,
  },

  citySpanText: {
    fontWeight: '700',
  },

  itemsBoughtView: {
    backgroundColor: Colors.LightGray,
    paddingTop: Metrix.VerticalSize(5),
    paddingBottom: Metrix.VerticalSize(20),
    paddingHorizontal: Metrix.HorizontalSize(10),
    borderRadius: Metrix.LightRadius,
    borderColor: Colors.Black,
    borderWidth: 0.3,
    marginTop: '5%',
  },

  itemsBoughtText: {
    fontSize: Metrix.customFontSize(13),
    fontWeight: '700',
  },

  productsBoughtItemView: {
    backgroundColor: Colors.Primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: Metrix.LightRadius,
    marginTop: '2%',
    opacity: 0.75,
  },

  brandText: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    color: Colors.Black,
  },

  brandSpanText: {
    fontWeight: '700',
  },

  titleText: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    color: Colors.Black,
  },

  titleSpanText: {
    fontWeight: '700',
  },

  priceText: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    color: Colors.Black,
  },

  priceSpanText: {
    fontWeight: '700',
  },

  quantityText: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    color: Colors.Black,
  },

  quantitySpanText: {
    fontWeight: '700',
  },

  cardInformationView: {
    backgroundColor: Colors.LightGray,
    paddingVertical: Metrix.VerticalSize(5),
    paddingHorizontal: Metrix.HorizontalSize(10),
    borderRadius: Metrix.LightRadius,
    borderColor: Colors.Black,
    borderWidth: 0.3,
    marginTop: '5%',
  },

  cardInformationText: {
    fontSize: Metrix.customFontSize(13),
    fontWeight: '700',
  },

  cardBrandText: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    color: Colors.Black,
  },

  cardBrandSpanText: {
    fontWeight: '700',
  },

  expiryText: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    color: Colors.Black,
  },

  expirySpanText: {
    fontWeight: '700',
  },

  last4Text: {
    fontSize: Metrix.customFontSize(12),
    fontWeight: '500',
    color: Colors.Black,
  },

  last4SpanText: {
    fontWeight: '700',
  },

  dateTimeText: {
    color: Colors.Black,
    textAlign: 'center',
    marginTop: '3%',
    fontWeight: '700',
  },

  dateTimeSpanText: {
    color: Colors.MediumGray,
  },

  totalAmountText: {
    color: Colors.Black,
    textAlign: 'center',
    marginTop: '1%',
    fontWeight: '700',
  },

  totalAmountSpanText: {
    color: Colors.Success,
  },

  noOrderTextStyle: {
    fontWeight: '500',
    color: Colors.Black,
    fontSize: Metrix.customFontSize(20),
    marginTop: '50%',
  },
});

export default styles;

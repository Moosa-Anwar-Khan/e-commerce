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

  backButton: {
    backgroundColor: Colors.White,
    marginTop: '3%',
    marginRight: '80%',
    marginLeft: '3%',
  },

  backButtonIcons: {
    color: Colors.Primary,
  },

  addressImage: {
    height: Metrix.VerticalSize(150),
    width: Metrix.HorizontalSize(150),
    marginTop: '5%',
    marginLeft: '30%',
  },

  houseInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Black,
    borderWidth: 0.5,
    borderRadius: Metrix.Radius,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '10%',
    height: Metrix.VerticalSize(60),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  houseInputView2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Primary,
    borderWidth: 0.5,
    borderRadius: Metrix.Radius,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '10%',
    height: Metrix.VerticalSize(60),
  },

  houseIcon: {
    color: Colors.Primary,
    margin: '2%',
  },

  houseInputStyle: {
    textAlign: 'left',
    color: Colors.Black,
    width: '85%',
    height: Metrix.VerticalSize(60),
  },

  locationInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Black,
    borderWidth: 0.5,
    borderRadius: Metrix.Radius,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    height: Metrix.VerticalSize(60),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(3),
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  locationInputView2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Primary,
    borderWidth: 0.5,
    borderRadius: Metrix.Radius,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    height: Metrix.VerticalSize(60),
  },

  locationIcon: {
    color: Colors.Primary,
    margin: '2%',
  },

  locationInputStyle: {
    textAlign: 'left',
    color: Colors.Black,
    width: '85%',
    height: Metrix.VerticalSize(60),
  },

  cityInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Black,
    borderWidth: 0.5,
    borderRadius: Metrix.Radius,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    height: Metrix.VerticalSize(60),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: Metrix.HorizontalSize(0),
      height: Metrix.VerticalSize(3),
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  cityInputView2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.Primary,
    borderWidth: 0.5,
    borderRadius: Metrix.Radius,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    height: Metrix.VerticalSize(60),
  },

  cityIcon: {
    color: Colors.Primary,
    margin: '2%',
  },

  cityInputStyle: {
    textAlign: 'left',
    color: Colors.Black,
    width: '85%',
    height: Metrix.VerticalSize(60),
  },

  addButton: {
    borderRadius: 15,
    backgroundColor: Colors.LoginButton,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(15),
    marginTop: '15%',
    marginLeft: '15%',
    marginRight: '15%',
    borderColor: Colors.White,
    borderWidth: 1,
  },

  addButtonText: {
    color: Colors.White,
    fontWeight: '900',
    fontSize: Metrix.customFontSize(15),
    textAlign: 'center',
  },
});

export default styles;

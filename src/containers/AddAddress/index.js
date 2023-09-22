import React, {useRef, useState} from 'react';
import {View, Text, ActivityIndicator, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PressableComponent} from '../../components';
import {AppAction} from '../../store/actions';
import styles from './styles';
import {Colors, Images, NavigationService, showToast} from '../../config';
import Icons from '../../config/icons';
import Image from '../../components/Image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextField from '../../components/FormInput/TextField';

const AddAddress = () => {
  const Loader = useSelector(state => state.AppReducer.loader);

  const [house, setHouse] = useState(null);
  const [houseInputIsFocused, setHouseInputIsFocused] = useState(false);
  const [location, setLocation] = useState(null);
  const [locationInputIsFocused, setLocationInputIsFocused] = useState(false);
  const [city, setCity] = useState(null);
  const [cityInputIsFocused, setCityInputIsFocused] = useState(false);

  const houseInput = useRef();
  const locationInput = useRef();
  const cityInput = useRef();

  const focusHouseInput = () => {
    houseInput.current?.focus();
  };

  const focusLocationInput = () => {
    locationInput.current?.focus();
  };

  const focusCityInput = () => {
    cityInput.current.focus();
  };

  const dispatch = useDispatch();

  const handleBackButton = () => {
    // NavigationService.replace('MyAddress');
    NavigationService.goBack();
  };

  const handleAddButton = () => {
    if (!house || !location || !city) {
      showToast('error', 'No field should be left empty');
    } else {
      const fullAddress = {house: house, location: location, city: city};
      dispatch(AppAction.SetAddress({added_address: fullAddress}));
      setHouse(null);
      setLocation(null);
      setCity(null);
    }
  };

  return (
    <>
      {Loader ? (
        <View style={styles.loaderIndicatorView}>
          <ActivityIndicator size="large" color={Colors.Primary} />
        </View>
      ) : (
        <KeyboardAwareScrollView style={styles.container}>
          <PressableComponent
            onPress={() => handleBackButton()}
            style={styles.backButton}>
            <Icons.Ionicons
              name="arrow-back-circle"
              size={45}
              style={styles.backButtonIcons}
            />
          </PressableComponent>

          <Image
            localImage={Images.addressImage}
            imageStyle={styles.addressImage}
            resizeMode={'contain'}
          />

          <View
            style={
              houseInputIsFocused
                ? styles.houseInputView
                : styles.houseInputView2
            }
            onStartShouldSetResponder={() => focusHouseInput()}>
            <Icons.Entypo name="home" size={22} style={styles.houseIcon} />
            <TextField
              inputFieldStyle={styles.houseInputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="House"
              value={house}
              onChangeText={h => setHouse(h)}
              onFocus={() => setHouseInputIsFocused(true)}
              onBlur={() => setHouseInputIsFocused(false)}
              ref={houseInput}
            />
          </View>

          <View
            style={
              locationInputIsFocused
                ? styles.locationInputView
                : styles.locationInputView2
            }
            onStartShouldSetResponder={() => focusLocationInput()}>
            <Icons.Ionicons
              name="location-sharp"
              size={22}
              style={styles.locationIcon}
            />
            <TextField
              inputFieldStyle={styles.locationInputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Location"
              value={location}
              onChangeText={l => setLocation(l)}
              onFocus={() => setLocationInputIsFocused(true)}
              onBlur={() => setLocationInputIsFocused(false)}
              ref={locationInput}
            />
          </View>

          <View
            style={
              cityInputIsFocused ? styles.cityInputView : styles.cityInputView2
            }
            onStartShouldSetResponder={() => focusCityInput()}>
            <Icons.FontAwesome5 name="city" size={22} style={styles.cityIcon} />
            <TextField
              inputFieldStyle={styles.cityInputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="City"
              value={city}
              onChangeText={c => setCity(c)}
              onFocus={() => setCityInputIsFocused(true)}
              onBlur={() => setCityInputIsFocused(false)}
              ref={cityInput}
            />
          </View>

          <PressableComponent
            style={styles.addButton}
            onPress={() => handleAddButton()}>
            <Text style={styles.addButtonText}>Add</Text>
          </PressableComponent>
        </KeyboardAwareScrollView>
      )}
    </>
  );
};

export default AddAddress;

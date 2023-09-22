import React from 'react';
import {View, ActivityIndicator, Alert, ScrollView} from 'react-native';
import Image from '../../components/Image';
import {useState} from 'react';
import {styles} from './styles';
import {Colors, Icons, Images} from '../../config';
import {showToast} from '../../config';
import {NavigationService} from '../../config';
import {useDispatch, useSelector} from 'react-redux';
import {AppAction} from '../../store/actions';
import {CustomText, PressableComponent} from '../../components';
import {CardField} from '@stripe/stripe-react-native';
import {useRoute} from '@react-navigation/native';

const PaymentScreen = () => {
  const route = useRoute();

  const {
    userName,
    userEmail,
    cartItems,
    houseSelected,
    locationSelected,
    citySelected,
    totalAmount,
  } = route.params;

  const [cardInformation, setCardInformation] = useState(null);

  const dispatch = useDispatch();

  const Loader = useSelector(state => state.AppReducer.loader);

  const handleBackButton = () => {
    NavigationService.goBack();
  };

  const handlePayButton = () => {
    if (
      cardInformation?.complete === true &&
      cardInformation?.validCVC === 'Valid' &&
      cardInformation?.validExpiryDate === 'Valid'
    ) {
      const addressSelected = {
        house: houseSelected,
        location: locationSelected,
        city: citySelected,
      };

      const current_Date = new Date();
      const currentDate = current_Date.getDate();
      const currentMonth = current_Date.getMonth() + 1;
      const currentYear = current_Date.getFullYear();
      const purchaseTime = current_Date.getHours() + ":" + current_Date.getMinutes() + ":" + current_Date.getSeconds();
      const purchaseDate = `${currentDate}/${currentMonth}/${currentYear}`;


      const orderInformation = {
        items_bought: cartItems,
        address_selected: addressSelected,
        card_information: cardInformation,
        purchase_date: purchaseDate,
        purchase_time: purchaseTime,
        total_amount: totalAmount,
      };

      Alert.alert(`$${totalAmount}`, 'will be deducted from your card', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(AppAction.SetOrder({ order_information: orderInformation }));
          },
        },
        {
          text: 'No',
          onPress: () => {
            console.log('cancelled is pressed');
          },
        },
      ]);
    } else {
      showToast('error', 'Wrong card credentials');
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <PressableComponent
          onPress={() => handleBackButton()}
          style={styles.backButton}>
          <Icons.Ionicons
            name="arrow-back-circle"
            size={45}
            style={styles.backButtonIcons}
          />
        </PressableComponent>
        <View style={styles.creditCardImageView}>
          <Image
            localImage={Images.creditCardImage}
            resizeMode={'contain'}
            imageStyle={styles.creditCardImage}
          />
        </View>

        <View style={styles.logosView}>
          <Image
            localImage={Images.visaLogo}
            resizeMode={'contain'}
            imageStyle={styles.visaLogo}
          />
          <Image
            localImage={Images.mastercardLogo}
            resizeMode={'contain'}
            imageStyle={styles.mastercardLogo}
          />
          <Image
            localImage={Images.americanExpressLogo}
            resizeMode={'contain'}
            imageStyle={styles.americanExpressLogo}
          />
          <Image
            localImage={Images.paypalLogo}
            resizeMode={'contain'}
            imageStyle={styles.paypalLogo}
          />
          <Image
            localImage={Images.discoverLogo}
            resizeMode={'contain'}
            imageStyle={styles.discoverLogo}
          />
        </View>

        <CardField
          postalCodeEnabled={true}
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={styles.cardStyle}
          style={styles.cardFieldStyle}
          onCardChange={cardDetails => {
            console.log('cardDetails', cardDetails);
            setCardInformation(cardDetails);
          }}
          onFocus={focusedField => {
            console.log('focusField', focusedField);
          }}
        />

        <View style={styles.billingAddressView}>
          <CustomText.RegularText
            text={'Billing Address'}
            style={styles.billingAddressText}
          />
          <CustomText.TextWithSpan
            text={'Name: '}
            style={styles.nameText}
            spanText={userName}
            spanTextStyle={styles.nameSpanText}
          />
          <CustomText.TextWithSpan
            text={'Email: '}
            style={styles.emailText}
            spanText={userEmail}
            spanTextStyle={styles.emailSpanText}
          />
          <CustomText.TextWithSpan
            text={'House: '}
            style={styles.houseText}
            spanText={houseSelected}
            spanTextStyle={styles.houseSpanText}
          />
          <CustomText.TextWithSpan
            text={'Location: '}
            style={styles.locationText}
            spanText={locationSelected}
            spanTextStyle={styles.locationSpanText}
          />
          <CustomText.TextWithSpan
            text={'City: '}
            style={styles.cityText}
            spanText={citySelected}
            spanTextStyle={styles.citySpanText}
          />
          <CustomText.TextWithSpan
            text={'Total: '}
            style={styles.totalText}
            spanText={`$${totalAmount}`}
            spanTextStyle={styles.totalSpanText}
          />
        </View>

        <PressableComponent
          style={styles.payButton}
          onPress={() => handlePayButton()}>
          {Loader ? (
            <ActivityIndicator size="small" color={Colors.White} />
          ) : (
            <CustomText.RegularText text={'Pay'} style={styles.payButtonText} />
          )}
        </PressableComponent>
      </ScrollView>
    </>
  );
};

export default PaymentScreen;

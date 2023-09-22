import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import Image from '../../components/Image';
import {useState} from 'react';
import {styles} from './styles';
import {emailRegex, phoneNumberRegex, passwordRegex} from '../../config/util';
import {
  Colors,
  Icons,
  Images,
  NavigationService,
  showToast,
} from '../../config';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {AppAction} from '../../store/actions';
import TextField from '../../components/FormInput/TextField';
import StandardButton from '../../components/Button/StandardButton';
import {CustomText, PressableComponent} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRef} from 'react';

const Signup = () => {
  const [nameIsFocused, setNameIsFocused] = useState(false);
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [mobileIsFocused, setMobileIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  const [confirmPasswordIsFocused, setConfirmPasswordIsFocused] =
    useState(false);
  const [email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [checkMobileNumber, setCheckMobileNumber] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const nameInput = useRef();
  const emailInput = useRef();
  const mobileNumberInput = useRef();
  const passwordInput = useRef();
  const retypePasswordInput = useRef();

  const focusNameInput = () => {
    nameInput.current?.focus();
  };

  const focusEmailInput = () => {
    emailInput.current?.focus();
  };

  const focusMobileNumberInput = () => {
    mobileNumberInput.current.focus();
  };

  const focusPasswordInput = () => {
    passwordInput.current?.focus();
  };

  const focusRetypePasswordInput = () => {
    retypePasswordInput.current?.focus();
  };

  const Loader = useSelector(state => state.AppReducer.loader);

  const dispatch = useDispatch();

  const handleBackButton = () => {
    NavigationService.replace('Signin');
  };

  const checkEmailFormat = text => {
    setEmail(text);
    if (emailRegex.test(text)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }
  };

  const checkMobileNumberFormat = num => {
    setMobileNumber(num);
    if (phoneNumberRegex.test(num)) {
      setCheckMobileNumber(false);
    } else {
      setCheckMobileNumber(true);
    }
  };

  const checkPasswordFormat = pass => {
    setPassword(pass);
    if (passwordRegex.test(pass)) {
      setCheckPassword(false);
    } else {
      setCheckPassword(true);
    }
  };

  const handleSignup = async () => {
    try {
      if (
        mobileNumber === '' ||
        email === '' ||
        password === '' ||
        confirmPassword === '' ||
        name === ''
      ) {
        showToast('error', 'No field should be left empty');
      } else if (checkEmail) {
        showToast('error', 'Email format is incorrect');
      } else if (checkPassword) {
        showToast('error', 'Password format is incorrect');
      } else if (checkMobileNumber) {
        showToast('error', 'Mobile number format is incorrect');
      } else if (password !== confirmPassword) {
        showToast('error', 'Both password fields should match');
      } else {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );

        const userData = {
          id: response.user.uid,
          name: name,
          email: email,
          mobile: mobileNumber,
        };

        setShowMessage('');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setMobileNumber('');

        dispatch(
          AppAction.Signup({
            user_data: userData,
          }),
        );
      }
    } catch (err) {
      console.log(err);
      setMessage(err.message);
      setShowMessage(true);
    }
  };

  return (
    <>
      {Loader ? (
        <View style={styles.loaderIndicatorView}>
          <ActivityIndicator size="large" color={Colors.Primary} />
        </View>
      ) : (
        <KeyboardAwareScrollView style={styles.myView}>
          <PressableComponent
            onPress={() => handleBackButton()}
            style={styles.backButton}>
            <Icons.Ionicons
              name="arrow-back-circle"
              size={45}
              style={styles.backButtonIcons}
            />
          </PressableComponent>
          <View style={styles.appIconView}>
            <Image
              localImage={Images.Logo}
              imageStyle={styles.appIcon}
              resizeMode={'contain'}
            />
          </View>

          <CustomText.RegularText
            style={styles.iconText}
            text="Create an Account"
          />

          <View
            style={nameIsFocused ? styles.inputViewFocused : styles.inputView}
            onStartShouldSetResponder={() => focusNameInput()}>
            <Icons.Ionicons name="person" size={22} style={styles.nameIcon} />
            <TextField
              inputFieldStyle={styles.inputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="username"
              value={name}
              onChangeText={n => setName(n)}
              onFocus={() => setNameIsFocused(true)}
              onBlur={() => setNameIsFocused(false)}
              ref={nameInput}
            />
          </View>

          <View
            style={emailIsFocused ? styles.inputViewFocused : styles.inputView}
            onStartShouldSetResponder={() => focusEmailInput()}>
            <Icons.MaterialCommunityIcons
              name="email"
              size={22}
              style={styles.emailIcon}
            />
            <TextField
              inputFieldStyle={styles.inputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="email"
              value={email}
              onChangeText={e => checkEmailFormat(e)}
              onFocus={() => setEmailIsFocused(true)}
              onBlur={() => setEmailIsFocused(false)}
              ref={emailInput}
            />
          </View>
          {checkEmail ? (
            <Text style={styles.redText}>wrong Email format</Text>
          ) : null}

          <View
            style={mobileIsFocused ? styles.inputViewFocused : styles.inputView}
            onStartShouldSetResponder={() => focusMobileNumberInput()}>
            <Icons.Entypo name="mobile" size={22} style={styles.mobileIcon} />
            <TextField
              inputFieldStyle={styles.inputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="mobile number"
              value={mobileNumber}
              onChangeText={n => checkMobileNumberFormat(n)}
              onFocus={() => setMobileIsFocused(true)}
              onBlur={() => setMobileIsFocused(false)}
              ref={mobileNumberInput}
            />
          </View>
          {checkMobileNumber ? (
            <Text style={styles.redText}>wrong mobile number format</Text>
          ) : null}

          <View
            style={
              passwordIsFocused ? styles.inputViewFocused : styles.inputView
            }
            onStartShouldSetResponder={() => focusPasswordInput()}>
            <Icons.Ionicons name="key" size={22} style={styles.keyIcon} />
            <TextField
              inputFieldStyle={styles.inputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="password"
              value={password}
              secureTextEntry={true}
              onChangeText={p => checkPasswordFormat(p)}
              onFocus={() => setPasswordIsFocused(true)}
              onBlur={() => setPasswordIsFocused(false)}
              ref={passwordInput}
            />
          </View>
          {checkPassword ? (
            <Text style={styles.redText}>wrong password format</Text>
          ) : null}

          <View
            style={
              confirmPasswordIsFocused
                ? styles.inputViewFocused
                : styles.inputView
            }
            onStartShouldSetResponder={() => focusRetypePasswordInput()}>
            <Icons.MaterialCommunityIcons
              name="lock-check"
              size={22}
              style={styles.lockCheckIcon}
            />
            <TextField
              inputFieldStyle={styles.inputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="retype password"
              value={confirmPassword}
              secureTextEntry={true}
              onChangeText={p => setConfirmPassword(p)}
              onFocus={() => setConfirmPasswordIsFocused(true)}
              onBlur={() => setConfirmPasswordIsFocused(false)}
              ref={retypePasswordInput}
            />
          </View>

          <StandardButton
            onPress={() => handleSignup()}
            title="Sign up"
            buttonStyle={styles.SignUpButton}
            buttonTextStyle={styles.SignUpButtonText}
          />

          {showMessage ? (
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: Colors.Danger,
                fontWeight: '900',
                marginTop: 10,
              }}>
              {message}
            </Text>
          ) : null}
        </KeyboardAwareScrollView>
      )}
    </>
  );
};

export default Signup;

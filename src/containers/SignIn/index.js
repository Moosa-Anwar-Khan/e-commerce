import React, {useRef} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import Image from '../../components/Image';
import {useState} from 'react';
import {styles} from './styles';
import {Colors, Icons, Images} from '../../config';
import {showToast} from '../../config';
import {NavigationService} from '../../config';
import {emailRegex, passwordRegex} from '../../config/util';
import {useDispatch, useSelector} from 'react-redux';
import {AppAction} from '../../store/actions';
import TextField from '../../components/FormInput/TextField';
import {CustomText, PressableComponent} from '../../components';

const Signin = () => {
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const emailInput = useRef();
  const passwordInput = useRef();

  const focusEmailField = () => {
    emailInput.current?.focus();
  };

  const focusPasswordField = () => {
    passwordInput.current?.focus();
  };

  const dispatch = useDispatch();
  const Loader = useSelector(state => state.AppReducer.loader);

  const handleSignUpButton = () => {
    NavigationService.navigate('Signup');
  };

  const checkEmailFormat = text => {
    setEmail(text);
    setShowMessage(false);
    setMessage(null);
    if (emailRegex.test(text)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }
  };

  const checkPasswordFormat = pass => {
    setPassword(pass);
    setShowMessage(false);
    setMessage(null);
    if (passwordRegex.test(pass)) {
      setCheckPassword(false);
    } else {
      setCheckPassword(true);
    }
  };

  const handleLogin = () => {
    // try {
    if (email === '' || password === '') {
      showToast('error', 'Email and password fields are empty');
    } else if (checkEmail === true || checkPassword === true) {
      showToast('error', 'invalid credentials');
    } else {
      setEmail('');
      setPassword('');
      dispatch(
        AppAction.Login({userEmail: email, userPassword: password}, error => {
          setShowMessage(true);
          setMessage(error.message);
        }),
      );
    }
  };

  return (
    <KeyboardAvoidingView style={styles.myView} behavior="height">
      <Image
        localImage={Images.Logo}
        imageStyle={styles.appIcon}
        resizeMode={'contain'}
      />

      <CustomText.RegularText style={styles.iconText} text="SHOP NOW" />

      <View
        style={emailIsFocused ? styles.inputViewFocused : styles.inputView}
        onStartShouldSetResponder={() => focusEmailField()}>
        <Icons.MaterialCommunityIcons
          name="email"
          size={22}
          style={styles.emailIcon}
        />
        <TextField
          inputFieldStyle={styles.inputEmailStyle}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="email"
          value={email}
          check={checkEmail}
          onChangeText={e => checkEmailFormat(e)}
          errorTextStyle={styles.emailRedText}
          errorText="wrong Email format"
          onFocus={() => setEmailIsFocused(true)}
          onBlur={() => setEmailIsFocused(false)}
          ref={emailInput}
        />
      </View>
      {checkEmail ? (
        <View style={styles.emailRedTextView}>
          <Text style={styles.emailRedText}>wrong Email format</Text>
        </View>
      ) : null}

      <View
        style={passwordIsFocused ? styles.inputViewFocused : styles.inputView}
        onStartShouldSetResponder={() => focusPasswordField()}>
        <Icons.Ionicons name="key" size={22} style={styles.keyIcon} />
        <TextField
          inputFieldStyle={styles.inputPasswordStyle}
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
        <View style={styles.passwordRedTextView}>
          <Text style={styles.passwordRedText}>wrong Password format</Text>
        </View>
      ) : null}

      <PressableComponent
        style={styles.loginButton}
        onPress={() => handleLogin()}>
        {Loader ? (
          <ActivityIndicator size="small" color={Colors.White} />
        ) : (
          <CustomText.RegularText
            text={'Login'}
            style={styles.loginButtonText}
          />
        )}
      </PressableComponent>

      <Text style={styles.dontHaveAnAccountText}>
        Don't have an account?{' '}
        <Text
          style={styles.dontHaveAnAccountSpanText}
          onPress={() => handleSignUpButton()}>
          Click here to create one
        </Text>
      </Text>

      {showMessage ? (
        <Text style={styles.errorText}>{message}</Text>
      ) : (
        <Text></Text>
      )}
    </KeyboardAvoidingView>
  );
};

export default Signin;

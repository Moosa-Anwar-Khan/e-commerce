import React from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import Icons from '../../config/icons';

const TextField = ({
  // isInputFocused,
  // inputViewFocused,
  // inputView,
  // focusFieldFunction,
  // iconName,
  // iconSize,
  // iconStyle,
  inputFieldStyle,
  autoCapitalize,
  autoCorrect,
  placeholder,
  value,
  secureTextEntry,
  keyboardType,
  onChangeText,
  multiline,
  ref,
  onFocus,
  onBlur,
  // checkEmail,
  // redTextView,
  // errorText,
  // redText,
}) => {
  return (
    // <>
    //   <View
    //     style={isInputFocused ? inputViewFocused : inputView}
    //     onStartShouldSetResponder={focusFieldFunction}>
    //     <Icons.AntDesign name={iconName} size={iconSize} style={iconStyle} />

    //     <TextInput
    //       style={inputFieldStyle}
    //       autoCapitalize={autoCapitalize}
    //       autoCorrect={autoCorrect}
    //       placeholder={placeholder}
    //       value={value}
    //       secureTextEntry={secureTextEntry}
    //       keyboardType={keyboardType}
    //       onChangeText={onChangeText}
    //       multiline={multiline}
    //       onFocus={onFocus}
    //       onBlur={onBlur}
    //       ref={ref}
    //     />
    //   </View>
    //   {checkEmail ? (
    //     <View style={redTextView}>
    //       <Text style={redText}>{errorText}</Text>
    //     </View>
    //   ) : null}
    // </>

    <TextInput
      style={inputFieldStyle}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      multiline={multiline}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
    />
  );
};

export default TextField;

import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';
import {Colors, Icons, Images} from '../../config';
import Image from '../Image';

const MenuModal = ({
  animationType,
  visible,
  onRequestClose,
  myModalContainer,
  userIconStyle,
  usernameText,
  username,
  emailText,
  email,
  isLoader,
  loaderStyle,
  logoutButtonStyle,
  logoutButtonOnPress,
  logoutButtonText,
  settingsButtonStyle,
  settingsButtonOnPress,
  settingsButtonText,
  backModalButtonStyle,
  backModalButtonOnPress,
  loggingOutText,
}) => {
  return (
    <View>
      <Modal
        animationType={animationType}
        visible={visible}
        onRequestClose={onRequestClose}>
        <View style={myModalContainer}>
          <Image
            localImage={Images.userImage}
            imageStyle={userIconStyle}
            resizeMode={'cover'}
          />

          <Text numberOfLines={1} style={usernameText}>{username}</Text>

          <Text numberOfLines={1} style={emailText}>{email}</Text>

          {isLoader ? (
            <ActivityIndicator
              size="large"
              color={Colors.White}
              style={loaderStyle}
            />
          ) : (
            <>
              <TouchableOpacity
                style={logoutButtonStyle}
                onPress={logoutButtonOnPress}>
                <Text style={logoutButtonText}>
                  Logout{' '}
                  <Icons.Entypo
                    name="log-out"
                    size={20}
                    color={Colors.Primary}
                  />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={settingsButtonStyle}>
                <Text style={settingsButtonText}>
                  Settings{' '}
                  <Icons.Ionicons
                    name="settings"
                    size={20}
                    color={Colors.Primary}
                  />
                </Text>
              </TouchableOpacity>
            </>
          )}

          {/* <TouchableOpacity
            style={logoutButtonStyle}
            onPress={logoutButtonOnPress}>
            <Text style={logoutButtonText}>
              Logout{' '}
              <Icons.Entypo name="log-out" size={20} color={Colors.Primary} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={settingsButtonStyle}>
            <Text style={settingsButtonText}>
              Settings{' '}
              <Icons.Ionicons
                name="settings"
                size={20}
                color={Colors.Primary}
              />
            </Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={backModalButtonStyle}
            onPress={backModalButtonOnPress}>
            <Icons.AntDesign name="downcircle" size={30} color={Colors.White} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default MenuModal;

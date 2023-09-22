import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';
import {Colors, Icons, Images} from '../../config';
import Image from '../Image';

const SelectAddressModal = ({
  animationType,
  visible,
  onRequestClose,
  myModalContainer,
  addressDataExists,
  selectYourAddressTextStyle,
  addAddressButtonPress,
  addAddressButtonStyle,
  addAddressButtonTextStyle,
  flatlistStyle,
  flatlistData,
  renderAddressItem,
  noAddressAddedTextStyle,
  backModalButtonStyle,
  backModalButtonOnPress,
}) => {
  return (
    <Modal
      animationType={animationType}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={myModalContainer}>
        {addressDataExists?.length >= 1 ? (
          <Text style={selectYourAddressTextStyle}>Select your address</Text>
        ) : (
          <TouchableOpacity
            style={addAddressButtonStyle}
            onPress={addAddressButtonPress}>
            <Text style={addAddressButtonTextStyle}>Add Address</Text>
          </TouchableOpacity>
        )}
        {/* <TouchableOpacity
          style={addAddressButtonStyle}
          onPress={addAddressButtonPress}>
          <Text style={addAddressButtonTextStyle}>Add Address</Text>
        </TouchableOpacity> */}

        {addressDataExists?.length >= 1 ? (
          <FlatList
            style={flatlistStyle}
            data={flatlistData}
            renderItem={renderAddressItem}
          />
        ) : (
          <Text style={noAddressAddedTextStyle}>No address added</Text>
        )}

        {/* <FlatList
          style={flatlistStyle}
          data={flatlistData}
          renderItem={renderAddressItem}
        /> */}

        <TouchableOpacity
          style={backModalButtonStyle}
          onPress={backModalButtonOnPress}>
          <Icons.AntDesign name="downcircle" size={30} color={Colors.White} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SelectAddressModal;

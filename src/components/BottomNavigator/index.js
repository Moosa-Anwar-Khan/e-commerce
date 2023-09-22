import { View } from "react-native";
import PressableComponent from "../PressableComponent";
import Icons from "../../config/icons";
import { CustomText } from "..";


const BottomNavigator = ({ navigationBarView, wishlistLength, wishlistIconButtonStyleInNavBar, wishlistIconPress, wishlistQuanitityView,
    wishlistQuanitityText, wishlistIconSizeInNavbar, wishlistIconStyleInNavBar, homeIconButtonStyleInNavBar, homeIconPress, homeIconSizeInNavbar,
    homeIconStyleInNavBar, cartLength, cartIconButtonStyleInNavBar, cartIconPress, cartQuantityView, cartQuantityText, cartIconSizeInNavbar,
    cartIconStyleInNavBar }) => {
    return (
        <View style={navigationBarView}>

            {wishlistLength >= 1 ? (
                <PressableComponent onPress={wishlistIconPress} style={wishlistIconButtonStyleInNavBar}>
                    <View style={wishlistQuanitityView}>
                        <CustomText.RegularText
                            text={wishlistLength}
                            style={wishlistQuanitityText}
                        />
                    </View>
                    <Icons.AntDesign
                        name="heart"
                        size={wishlistIconSizeInNavbar}
                        style={wishlistIconStyleInNavBar}
                    />
                </PressableComponent>
            ) : (
                <PressableComponent onPress={wishlistIconPress} style={wishlistIconButtonStyleInNavBar}>
                    <Icons.AntDesign
                        name="heart"
                        size={wishlistIconSizeInNavbar}
                        style={wishlistIconStyleInNavBar}
                    />
                </PressableComponent>
            )}

            <PressableComponent style={homeIconButtonStyleInNavBar} onPress={homeIconPress}>
                <Icons.Entypo name="home" size={homeIconSizeInNavbar} style={homeIconStyleInNavBar} />
            </PressableComponent>

            {cartLength >= 1 ? (
                <PressableComponent onPress={cartIconPress} style={cartIconButtonStyleInNavBar}>
                    <View style={cartQuantityView}>
                        <CustomText.RegularText
                            text={cartLength}
                            style={cartQuantityText}
                        />
                    </View>
                    <Icons.MaterialCommunityIcons
                        name="cart"
                        size={cartIconSizeInNavbar}
                        style={cartIconStyleInNavBar}
                    />
                </PressableComponent>
            ) : (
                <PressableComponent onPress={cartIconPress} style={cartIconButtonStyleInNavBar}>
                    <Icons.MaterialCommunityIcons
                        name="cart"
                        size={cartIconSizeInNavbar}
                        style={cartIconStyleInNavBar}
                    />
                </PressableComponent>
            )}

        </View>
    );
}

export default BottomNavigator;

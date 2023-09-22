/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  LogBox,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomText, PressableComponent} from '../../components';
import {AppAction} from '../../store/actions';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {Colors, Images, NavigationService} from '../../config';
import Icons from '../../config/icons';
import Image from '../../components/Image';
import TextField from '../../components/FormInput/TextField';
import {ScrollView} from 'react-native';
import CarouselCards from '../CarouselCard';
import popularItems from '../PopularItemsData';
import productCategories from '../productCategories';
import MenuModal from '../../components/Modal/modal';
import firestore from '@react-native-firebase/firestore';
import {AirbnbRating} from 'react-native-ratings';
import BottomNavigator from '../../components/BottomNavigator';

const Home = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const [search, setSearch] = useState('');
  const [popularProducts, setPopularProducts] = useState();
  const [viewPopularProducts, setViewPopularProducts] = useState(true);
  const [viewAllProducts, setViewAllProducts] = useState(false);
  const [allProducts, setAllProducts] = useState(null);
  const [categoricalProducts, setCategoricalProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState(null);
  const [addToCart, setAddToCart] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingItemId, setLoadingItemId] = useState(null);
  const [itemCategory, setItemCategory] = useState(null);

  const url = 'https://dummyjson.com/products';

  const dispatch = useDispatch();

  const Loader = useSelector(state => state.AppReducer.loader);
  const card_loader = useSelector(state => state.AppReducer.cardLoader);
  const current_user = useSelector(state => state.AppReducer.userInfoFS);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    await fetch(url)
      .then(response => response.json())
      .then(json => setAllProducts(json.products))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    dispatch(AppAction.GetUserInfoFromFs());
  }, []);

  useEffect(() => {
    dispatch(
      AppAction.GetPopularProducts(products => {
        setPopularProducts(products);
      }),
    );
  }, []);

  useEffect(() => {
    getWishListItems();
  }, []);

  const getWishListItems = async () => {
    const wishlistItems = await firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get();
    setWishlist(wishlistItems?._data.wishlist);
  };

  useEffect(() => {
    getAddToCartItems();
  }, []);

  const getAddToCartItems = async () => {
    const addToCartItems = await firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get();
    setAddToCart(addToCartItems?._data.add_to_cart);
  };

  const handleLogout = () => {
    Alert.alert('Are you sure', 'You want to Logout ?', [
      {
        text: 'Yes',
        onPress: () => {
          dispatch(AppAction.Logout());
        },
      },
      {
        text: 'No',
        onPress: () => {
          console.log('cancelled is pressed');
        },
      },
    ]);
  };

  const handleCategoryButton = (item, index) => {
    setViewPopularProducts(false);
    setViewAllProducts(false);
    setItemCategory(item.category);
    console.log("itemCategory: ",itemCategory)
    const filteredProducts = allProducts.filter((it, i) => {
      if(it.category === item.category) {
        return it;
      }
    })
    setCategoricalProducts(filteredProducts);
  }

  const handlePopularButton = () => {
    setItemCategory(null);
    setViewAllProducts(false);
    setViewPopularProducts(true);
  }

  const handleViewAllProductsButton = () => {
    setItemCategory(null);
    setViewPopularProducts(false);
    setViewAllProducts(true);
  };

  const handleHeartButton = (item, index) => {
    if (wishlist == null) {
      setLoadingItemId(item.id);
      item.quantity = 1;
      setWishlist([item]);
      dispatch(AppAction.SetWishlistItems({wishlistItem: item}));
    } else if (!wishlist?.some(product => product.id == item.id)) {
      setLoadingItemId(item.id);
      item.quantity = 1;
      setWishlist([...wishlist, item]);
      dispatch(AppAction.SetWishlistItems({wishlistItem: item}));
    } else {
      setLoadingItemId(item.id);
      let filteredWishlist = wishlist.filter((it, i) => {
        if (it.id !== item.id) {
          return it;
        }
        dispatch(AppAction.RemoveWishlistItem({delWishlistItem: item}));
      });
      setWishlist(filteredWishlist);
      setLoadingItemId(null);
    }
  };

  const handleShowProductButton = (item, ind) => {
    NavigationService.navigate('ProductInformation', {
      productInfo: item,
    });
  };

  const handleCartButton = (item, index) => {
    if (addToCart == null) {
      setLoadingItemId(item.id);
      item.quantity = 1;
      setAddToCart([item]);
      dispatch(AppAction.SetAddToCartItems({addToCartItem: item}));
    } else if (!addToCart?.some(product => product.id == item.id)) {
      setLoadingItemId(item.id);
      item.quantity = 1;
      setAddToCart([...addToCart, item]);
      dispatch(AppAction.SetAddToCartItems({addToCartItem: item}));
    } else {
      setLoadingItemId(item.id);
      let filteredAddToCart = addToCart.filter((it, i) => {
        if (it.id !== item.id) {
          return it;
        }
        dispatch(AppAction.RemoveAddToCartItem({delAddToCartItem: item}));
      });
      setAddToCart(filteredAddToCart);
      setLoadingItemId(null);
    }
  };

  const handleHeartIcon = () => {
    NavigationService.replace('Wishlist', {
      wishlistItems: wishlist,
    });
  };

  const handleCartIcon = () => {
    NavigationService.replace('AddToCart', {
      cartItems: addToCart,
    });
  };

  const handleUserProfileImage = () => {
    NavigationService.replace('Profile', {
      wishlistItems: wishlist,
      cartItems: addToCart,
    });
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const CategoriesItem = ({item, index}) => {
    const item_category = item.category.toUpperCase();
    return (
      <>
       { item.category === itemCategory ?
         <PressableComponent style={styles.categoryButtonSelected} onPress={() => handleCategoryButton(item, index)}>
             <View>
               <Image localImage={item.image} resizeMode={'contain'} imageStyle={styles.categorySelectedImageStyle} />
             </View>
             <Text style={styles.categoryButtonSelectedText}>{item_category}</Text>
         </PressableComponent> : 
        <PressableComponent style={styles.categoryButton} onPress={() => handleCategoryButton(item, index)}>
          <View>
            <Image localImage={item.image} resizeMode={'contain'} imageStyle={styles.categoryImageStyle} />
           </View>
        <Text style={styles.categoryButtonText}>{item_category}</Text>
        </PressableComponent>
       }
      </>
    );
  };

  const popularProductsItem = ({item, index}) => {
    return (
      <>
        {(card_loader && loadingItemId === item.id) || popularProducts == null ? (
          <View style={styles.popularItemsView}>
            <ActivityIndicator
              size="small"
              color={Colors.Black}
              style={styles.popularItemsLoader}
            />
          </View>
        ) : (
          <PressableComponent
            style={styles.popularItemsView}
            key={index}
            onPress={() => handleShowProductButton(item, index)}>
            <View style={styles.likeAndAddToCartView}>
              {wishlist?.some(product => product.id == item.id) ? (
                <Icons.AntDesign
                  name="heart"
                  size={22}
                  style={styles.coloredHeart}
                  onPress={() => handleHeartButton(item, index)}
                />
              ) : (
                <Icons.AntDesign
                  name="hearto"
                  size={22}
                  style={styles.uncoloredHeart}
                  onPress={() => handleHeartButton(item, index)}
                />
              )}
              {addToCart?.some(product => product.id == item.id) ? (
                <Icons.MaterialCommunityIcons
                  name="cart"
                  size={22}
                  style={styles.coloredCart}
                  onPress={() => handleCartButton(item, index)}
                />
              ) : (
                <Icons.MaterialCommunityIcons
                  name="cart-outline"
                  size={22}
                  style={styles.uncoloredCart}
                  onPress={() => handleCartButton(item, index)}
                />
              )}
            </View>

            <Image
              networkImage={item.thumbnail}
              imageStyle={styles.popularItemsImage}
              resizeMode={'contain'}
            />

            <Text style={styles.popularItemsName}>{item.title}</Text>
            <Text style={styles.popularItemsPrice}>$ {item.price}</Text>
            <AirbnbRating
              count={5}
              defaultRating={5}
              size={12}
              showRating={false}
              isDisabled={false}
              starContainerStyle={{marginLeft: -80}}
            />
          </PressableComponent>
        )}
      </>
    );
  };

  const allProductsItem = ({item, index}) => {
    return (
      <>
        {(card_loader && loadingItemId === item.id) || loading ? (
          <View style={styles.allItemsView}>
            <ActivityIndicator
              size="small"
              color={Colors.Black}
              style={styles.allItemsLoader}
            />
          </View>
        ) : (
          <PressableComponent
            style={styles.allItemsView}
            key={index}
            onPress={() => handleShowProductButton(item, index)}>
            <View style={styles.likeAndAddToCartView}>
              {wishlist?.some(product => product.id == item.id) ? (
                <Icons.AntDesign
                  name="heart"
                  size={22}
                  style={styles.coloredHeart}
                  onPress={() => handleHeartButton(item, index)}
                />
              ) : (
                <Icons.AntDesign
                  name="hearto"
                  size={22}
                  style={styles.uncoloredHeart}
                  onPress={() => handleHeartButton(item, index)}
                />
              )}
              {addToCart?.some(product => product.id == item.id) ? (
                <Icons.MaterialCommunityIcons
                  name="cart"
                  size={22}
                  style={styles.coloredCart}
                  onPress={() => handleCartButton(item, index)}
                />
              ) : (
                <Icons.MaterialCommunityIcons
                  name="cart-outline"
                  size={22}
                  style={styles.uncoloredCart}
                  onPress={() => handleCartButton(item, index)}
                />
              )}
            </View>
            <Image
              networkImage={item.thumbnail}
              imageStyle={styles.allItemsImage}
              resizeMode={'contain'}
            />
            <Text style={styles.allItemsName}>{item.title}</Text>
            <Text style={styles.allItemsPrice}>$ {item.price}</Text>
            <AirbnbRating
              count={5}
              defaultRating={5}
              size={12}
              showRating={false}
              isDisabled={false}
              starContainerStyle={{marginLeft: -80}}
            />
          </PressableComponent>
        )}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <MenuModal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          myModalContainer={styles.myModal}
          userIconStyle={styles.modalUserIcon}
          usernameText={styles.usernameTxt}
          username={current_user?.name}
          emailText={styles.emailTxt}
          email={current_user?.email}
          isLoader={Loader}
          loaderStyle={styles.modalLoader}
          logoutButtonStyle={styles.logOutButton}
          logoutButtonOnPress={() => handleLogout()}
          logoutButtonText={styles.logOutButtonText}
          settingsButtonStyle={styles.settingsButton}
          settingsButtonText={styles.settingsButtonText}
          backModalButtonStyle={styles.backModalButton}
          backModalButtonOnPress={() => setModalVisible(false)}
        />

        <View style={styles.header}>
          <PressableComponent
            style={styles.optionsIconView}
            onPress={() => setModalVisible(true)}>
            <Icons.AntDesign
              name="appstore1"
              size={15}
              style={styles.optionsIcon}
            />
          </PressableComponent>
          <CustomText.BoldText text="Home" style={styles.headingText} />
          <PressableComponent style={styles.shoppingBagIconView}>
            <Icons.FontAwesome5
              name="shopping-bag"
              size={12}
              style={styles.shoppingBagIcon}
            />
          </PressableComponent>

          <PressableComponent onPress={() => handleUserProfileImage()}>
            <Image
              localImage={Images.userImage}
              imageStyle={styles.userIcon}
              resizeMode={'cover'}
            />
          </PressableComponent>
        </View>

        <View style={styles.searchBar}>
          <TextField
            inputFieldStyle={styles.searchInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="search..."
            value={search}
            onChangeText={s => setSearch(s)}
          />
          <Icons.Ionicons name="search" size={22} style={styles.searchIcon} />
        </View>

        <CarouselCards />

        <FlatList
          data={productCategories}
          renderItem={CategoriesItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: -20}}
        />

        <>
          {Loader ? (
            <View style={styles.loaderIndicatorView}>
              <ActivityIndicator size="large" color={Colors.Primary} />
            </View>
          ) : (
            <View>
              <View style={styles.homeViewImagesCategoryText}>
                <PressableComponent
                  style={
                    viewPopularProducts
                      ? styles.popularTextButtonPressed
                      : styles.popularTextButton
                  }
                  onPress={handlePopularButton}>
                  <CustomText.BoldText
                    style={
                      viewPopularProducts
                        ? styles.popularButtonSelectedText
                        : styles.popularButtonText
                    }
                    text="Popular"
                  />
                </PressableComponent>

                <PressableComponent
                  style={
                    viewAllProducts
                      ? styles.viewAllTextButtonPressed
                      : styles.viewAllTextButton
                  }
                  onPress={handleViewAllProductsButton}>
                  <CustomText.BoldText
                    style={
                      viewAllProducts
                        ? styles.viewAllButtonSelectedText
                        : styles.viewAllButtonText
                    }
                    text="View All"
                  />
                </PressableComponent>
              </View>

              {viewPopularProducts ? (
                <FlatList
                  data={popularProducts}
                  renderItem={popularProductsItem}
                  contentContainerStyle={styles.list}
                  numColumns={2}
                  columnWrapperStyle={styles.column}
                />
              ) : loading ? (
                <ActivityIndicator size="large" color={Colors.Primary} />
              ) : viewAllProducts ? (
                <FlatList
                  data={allProducts}
                  renderItem={allProductsItem}
                  contentContainerStyle={styles.list}
                  numColumns={2}
                  columnWrapperStyle={styles.column}
                />
              ) : 
                <FlatList
                  data={categoricalProducts}
                  renderItem={allProductsItem}
                  contentContainerStyle={styles.list}
                  numColumns={2}
                  columnWrapperStyle={styles.column}
                />
              }
            </View>
          )}
        </>
      </ScrollView>

      <BottomNavigator
        navigationBarView={styles.navigationBarView}
        wishlistLength={wishlist?.length}
        wishlistIconPress={handleHeartIcon}
        wishlistQuanitityView={styles.wishlistQuanitityView}
        wishlistQuanitityText={styles.wishlistQuanitity}
        wishlistIconSizeInNavbar={20}
        wishlistIconStyleInNavBar={styles.heartIconInNavBar}
        homeIconButtonStyleInNavBar={styles.homeIconButtonStyleInNavBar}
        homeIconSizeInNavbar={25}
        homeIconStyleInNavBar={styles.homeIconStyleInNavBar}
        cartLength={addToCart?.length}
        cartIconPress={handleCartIcon}
        cartQuantityView={styles.addToCartQuantityView}
        cartQuantityText={styles.addToCartQuantity}
        cartIconSizeInNavbar={20}
        cartIconStyleInNavBar={styles.cartIconStyleInNavBar}
      />
    </View>
  );
};

export default Home;

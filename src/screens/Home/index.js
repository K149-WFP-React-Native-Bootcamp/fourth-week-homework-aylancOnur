import React, {useEffect} from 'react';
import {FlatList, Image, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {addCart, requestAllProducts} from '../../redux/actions/app';

// import {FlashList} from '@shopify/flash-list';
import PropTypes from 'prop-types';
import styles from './styles';

const mapStateToProps = state => {
  return {app: state.app};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  // useEffect(() => {
  //   storage.clearAll();
  // }, []);
  const cart = props.app.cart;

  const handleCart = item => {
    const newCart = [
      ...cart,
      {
        item,
      },
    ];
    props.dispatch(addCart(newCart));
  };

  useEffect(() => {
    props.dispatch(requestAllProducts());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={props.app.products.products}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image style={styles.image} source={{uri: item.thumbnail}} />
            <Text style={styles.price}>{item.price} TL</Text>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleCart(item)}>
              <Text>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        )}
        estimatedItemSize={200}
        numColumns={2}
      />
    </View>
  );
});

Home.defaultProps = {
  extraData: 'Data is undefined',
};

Home.propTypes = {
  extraData: PropTypes.string,
};

export {Home};

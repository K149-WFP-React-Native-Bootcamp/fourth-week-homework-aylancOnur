import React from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const mapStateToProps = state => {
  return {app: state.app};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const cart = props.app.cart;

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(d, i) => i + ''}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image style={styles.image} source={{uri: item.item.thumbnail}} />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.title}>{item.item.title}</Text>
              <Text style={styles.price}>{item.item.price} TL</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity>
                <Text style={styles.icon}>
                  <Icon name="plus" size={20} color="#ff6600" />
                </Text>
                <Text style={{fontWeight: 'bold', textAlign: 'center'}}>1</Text>
                <Text style={styles.icon}>
                  <Icon name="minus" size={20} color="#ff6600" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        estimatedItemSize={200}
      />
    </View>
  );
});

export {Cart};

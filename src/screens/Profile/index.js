import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {logoutUserWithFB} from '../../redux/actions/app';

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const Profile = connect(mapDispatchToProps)(props => {
  return (
    <View>
      <TouchableOpacity
        style={{
          borderRadius: 8,
          backgroundColor: '#ff6600',
          padding: 10,
          alignItems: 'center',
        }}
        onPress={() => props.dispatch(logoutUserWithFB())}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
});

export {Profile};

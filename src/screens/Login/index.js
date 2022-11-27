import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {MyButton} from '../../components/MyButton';

import {connect} from 'react-redux';

import {createUserWithFB, loginUserWithFB, setApp} from '../../redux/actions';

import styles from './styles';

// const mapStateToProps = ({ app }) => ({ app });
const mapStateToProps = states => ({app: states.app});

const mapDispatchToProps = dispatch => ({dispatch});
//const mapDispatchToProps = asdasdasd => ({ dispatch: asdasdasd });

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const [email, setEmail] = useState('email@mail.com');
  const [password, setPassword] = useState('password');

  const {dispatch, app} = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={app.username}
        onChangeText={d => dispatch(setApp('username', d))}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        value={app.password}
        onChangeText={d => dispatch(setApp('password', d))}
      />
      <MyButton
        backgroundColor={true}
        handlePress={() => dispatch(loginUserWithFB())}
        buttonText={'Login'}
      />
      <MyButton
        handlePress={() => dispatch(createUserWithFB())}
        buttonText={'Signup'}
      />
    </View>
  );
});

export {Login};

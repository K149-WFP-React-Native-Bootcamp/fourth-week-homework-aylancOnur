import React from 'react';
// import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Home, Login, Cart} from './screens';

import store from './redux';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator activeColor="red" barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Products"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={HomeTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

// const styles = StyleSheet.create({});

export default App;

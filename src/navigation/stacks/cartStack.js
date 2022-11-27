import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Cart} from '../../screens';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
};

export {CartStack};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../../screens';

import {Icon} from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        options={{
          headerShown: true,
          title: 'home',
          headerTitleAlign: 'center',
          headerRight: () => <MaterialCommunityIcons name="logout" size={28} />,
        }}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export {MainStack};

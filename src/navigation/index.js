import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {LoginStack} from './stacks/loginStack';
import {MainStack} from './tabs/mainStack';
import {connect} from 'react-redux';

const Navigation = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  console.log('LOGIN STATUS', props.app.loginStatus);
  return useMemo(
    () => (
      <NavigationContainer>
        {props.app.loginStatus ? <MainStack /> : <LoginStack />}
      </NavigationContainer>
    ),
    [props.app.loginStatus],
  );
});

export {Navigation};

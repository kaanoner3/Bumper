import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createSharedElementStackNavigator,
} from 'react-navigation-shared-element';


import EnterCodePage from '../modules/pages/EnterCodePage';
import SignUpPage from '../modules/pages/SignUpPage';
import { Routes } from './routes';

const Stack = createSharedElementStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={Routes.ENTER_CODE_SCREEN} mode="modal">
        <Stack.Screen name={Routes.ENTER_CODE_SCREEN} component={EnterCodePage} />
        <Stack.Screen
          options={() => ({            
            useNativeDriver: true,
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: 'timing', config: { duration: 300 } },
              close: { animation: 'timing', config: { duration: 300 } },
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
                return {
                cardStyle: {
                  opacity: progress,
                  
                },
              };
            },
          })}
          name={Routes.SIGNUP_SCREEN}
          component={SignUpPage as any}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

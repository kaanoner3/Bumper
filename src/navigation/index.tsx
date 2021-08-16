import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnterCodePage from '../modules/pages/EnterCodePage';


const Stack = createNativeStackNavigator();

const RootNavigator = () => { 
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={EnterCodePage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default RootNavigator
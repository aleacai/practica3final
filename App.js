import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';

import Libreriaprovider from './Context/LibreriaContext'

export default function App() {
  return (
    <Libreriaprovider>
      <NavigationContainer>
        <BottomTabNavigator1 />
      </NavigationContainer>
    </Libreriaprovider>
  );
}
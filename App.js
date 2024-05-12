// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from "@react-navigation/native"
import { Cart } from "./src/screens/Cart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductStack from "./src/navigation/ProductStack";




const Tab = createBottomTabNavigator()



export default function App() {
  return (


  <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Products" 
          component={ProductStack} 
          options={{
            tabBarLabel: 'Products',
            // tabBarIcon: ({ color, size }) => (<MaterialIcons name="category" size={size} color={color} />)
          }}
        />
        <Tab.Screen 
          name="Cart" 
          component={Cart} 
          options={{
            tabBarLabel: 'My Cart',
            // tabBarIcon: ({ color, size }) => (<MaterialIcons name="shopping-cart" size={size} color={color} />)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
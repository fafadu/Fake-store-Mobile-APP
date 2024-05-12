import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; // 确保已安装 @expo/vector-icons
import ProductStack from './ProductStack';
import { Cart } from '../screens/Cart';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Products" 
        component={ProductStack} 
        options={{
          tabBarLabel: 'Product',
          tabBarIcon: ({ color, size }) => (<MaterialIcons name="home" size={size} color={color} />)
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={Cart} 
        options={{
          tabBarLabel: 'My Cart',
          tabBarIcon: ({ color, size }) => (<MaterialIcons name="shopping-cart" size={size} color={color} />)
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { CustomDrawer } from './components/CustomDrawer'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import { HomeScreen, SearchScreen, AccountDetailScreen } from './pages'
import { createStackNavigator } from '@react-navigation/stack';

import configureStore from "./redux/store";

import Login from './pages/auth/Login'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const store = configureStore();

export function DrawerRoute({ navigation }) {
  return (
        <Drawer.Navigator
          initialRouteName="Anasayfa"
          screenOptions={{ headerShown: false }}
          drawerContent={(props) => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Anasayfa" component={Home} />
          <Drawer.Screen name="Hesaplarım" component={SearchScreen} />
          <Drawer.Screen name="Kartlarım" component={SearchScreen} />
          <Drawer.Screen name="Para Transferleri" component={SearchScreen} />
          <Drawer.Screen name="Yatırımlar" component={SearchScreen} />
          <Drawer.Screen name="Ödemeler" component={SearchScreen} />
          <Drawer.Screen name="Krediler" component={SearchScreen} />
          <Drawer.Screen name="Sigortalar" component={SearchScreen} />
          <Drawer.Screen name="Diğer İşlemler" component={SearchScreen} />
        </Drawer.Navigator>
  );
}
export function Home({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="AccountDetailScreen" component={AccountDetailScreen} />
    </Stack.Navigator>
  );
}
export default function LoginScreen({ navigation }) {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="DrawerRoute" component={DrawerRoute} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

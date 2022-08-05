import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Divider } from 'react-native-elements';

import Drawer from './Icons/Drawer';
import Search from './Icons/Search';
import Mail from './Icons/Mail';
import Exit from './Icons/Exit';

export function Header({ navigation }) {
  
  return (
    <View style={styles.header}>
    <StatusBar style="light"  translucent  backgroundColor='#282828' />
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={styles.touch}>
      <Drawer style={styles.divider} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchScreen')}
      style={styles.search}>
      <Search />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchScreen')}
      style={styles.touch}>
      <Mail />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchScreen')}
      style={styles.touch}>
      <Exit />
    </TouchableOpacity>
  </View>  
  );
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#282828',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
  },
  touch: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    height: '100%',
    flex: 6,
  },
});

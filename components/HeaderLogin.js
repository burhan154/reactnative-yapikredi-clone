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
  Image,
  StatusBar
} from 'react-native';

import Drawer from './Icons/Drawer';
import Exit from './Icons/Exit';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export function HeaderLogin({ navigation }) {
  
  return (
    <View style={styles.header}>
    
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={styles.touch}>
      <FontAwesome5 name="globe" size={26} color="#ddd" />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchScreen')}
      style={styles.search}>
      
       <Image
          source={require("../assets/yapikredi.png")}
          style={{
            resizeMode: "contain",
            width: 130,
            marginTop: 10,
          }}
        />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchScreen')}
      style={styles.touch}>
      <FontAwesome5 name="user-circle" size={26} color="#ddd" />
    </TouchableOpacity>
  </View>  
  );
}


const styles = StyleSheet.create({
  header: {
    
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'row',
  },
});

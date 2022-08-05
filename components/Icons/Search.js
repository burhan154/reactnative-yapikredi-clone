import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Glass from './Glass';

export default function Search({ navigation }) {
  return (
    <View style={styles.search}>
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <Glass/>
      </View>
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{ color: 'white', width: '100%', marginLeft: 50 }}>Yapı Kredi Mobil'de Ara</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    borderRadius: 20,
    backgroundColor: 'black',
    marginTop: 10,
    marginHorizontal:5,
    flexDirection: 'row',
    height:30,
  },
});

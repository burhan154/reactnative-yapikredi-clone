import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  StatusBar,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
import Glass from '../components/Icons/Glass';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HeaderDetail, ButtonComp } from '../components';

export function SearchScreen({ navigation, route }) {
  {
    route ? console.log(route.params) : null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="#282828" />
      <View style={styles.search}>
        <Glass />
        <TextInput
          style={styles.textInput}
          placeholder="Ara"
          placeholderTextColor="#bbb"
          autoFocus
        />
      </View>
      <View style={styles.mid}>
       <FontAwesome5
            name="search"
            size={146}
            light
            style={{

              color: 'grey',
              marginBottom: 3,
              alignSelf: 'center',
            }}
          />
        <Text style={{color:'white',fontSize:20,textAlign:'center',}}>
          İşlemleri, akıllı rehber kayıtlarınızı, ödeme yapmak istediğiniz
          faturaların kurumlarını arayabilirsiniz ve arama sonuçlarından işlem
          yapabilrisiniz.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#282828',
  },
  search: {
    height: 45,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInput: { 
    width: '90%',
    height: '100%',
    color: 'white',
    fontSize: 16,
  },
  mid: {

    textAlign:'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    justifyContent: 'center',
    flexDirection: 'column',
    height:'100%',
  },
});

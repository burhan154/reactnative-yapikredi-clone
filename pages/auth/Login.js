import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  ImageBackground, Image,
  StatusBar
} from 'react-native';
import Constants from 'expo-constants';

import { BottomSheet, LastLogin, Activities, Plans, HeaderLogin, Operations, Cards, Accounts } from '../../components';

import {
  myAccounts,
  myOperations,
  myCards,
  myPlans,
  myActivities,
  myLastLogin,
} from '../../data/myAccounts';
import { Password } from '../../components/Password';

export default function Login({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="black" />
      <HeaderLogin navigation={navigation} />
      <ImageBackground style={{marginTop:80, paddingVertical: 5, flexDirection: 'column',justifyContent:'center',alignItems:'center',height:220 }}>
        <Image
          source={{
            uri: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          }}
          style={{
            height: 140,
            width: 140,
            borderRadius: 70,
            margin: 10,
          }}
        />
        <View style={{ flex: 1, justifyContent: 'center',alignItems:'center' }}>
          <Text style={{ color: '#ddd', fontSize: 20,textAlign:'center' }}>Sağlıklı Günler, Hüseyin Burhan Başaran</Text>
        </View>
      </ImageBackground>
      <Password data={myAccounts} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
  },
});

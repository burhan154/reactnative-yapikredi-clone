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
import { Provider } from 'react-native-paper';

import {BottomSheet,LastLogin,Activities,Plans,Header,Operations,Cards,Accounts} from '../components';

import {
  myAccounts,
  myOperations,
  myCards,
  myPlans,
  myActivities,
  myLastLogin,
} from '../data/myAccounts';

export function HomeScreen({ navigation }) {
  const datas = [{ name: "Kolay Adres Tanımlama" }, { name: "Favori Hesap Tanımlama" }, { name: "IBAN Paylaş" }, { name: "Başka Hesaba Havale / EFT" }, { name: "Kendi Hesabıma Havale" }, { name: "Tüm Hesap İşlemleri" },];

  return (
    <View style={styles.container}>
      <Header navigation={navigation} home/>
      <ScrollView>
        <Accounts data={myAccounts} navigation={navigation} />
        <Cards data={myCards} />
        <Operations data={myOperations} />
        <Activities data={myActivities} />
        <Plans data={myPlans} />
        <LastLogin data={myLastLogin} />
      </ScrollView>
      <Provider>
        <View>
          <BottomSheet enableBackdropDismiss datas={datas}/>
        </View>
      </Provider>
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

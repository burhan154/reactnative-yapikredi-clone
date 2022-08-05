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


import { HeaderDetail, ButtonComp } from '../components';


export function AccountDetailScreen({ navigation, route }) {
    
    const{balances,id ,name ,tur}= route.params.data
    const datas = [{ name: "Kolay Adres Tanımlam" }, { name: "Favori Hesap Tanımlama" }, { name: "IBAN Paylaş" }, { name: "Başka Hesaba Havale / EFT" }, { name: "Kendi Hesabıma Havale" }, { name: "Tüm Hesap İşlemleri" },];

    return (
        <View style={styles.container}>
            <HeaderDetail navigation={navigation} header={"Hesap Detayı"} />

            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{id}</Text>
            <Text style={styles.text}>{tur}</Text>
            <View style={styles.mid}>
                {datas.map((data, index) => (
                    <ButtonComp key={index} title={data.name} backgroundColor={'#0588DA'} borderColor={'#0588DA'} onPress={() => console.log("as")} />
                )
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
    },
    mid: {
        flex: 1,
        marginHorizontal:10,
        alignItems: 'center'
    },
    text: {
       color:'white',
       fontSize:20,
    },
});

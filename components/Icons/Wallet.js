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

export default function Wallet({ title }) {
    return (
        <View style={styles.img}>
            <Text style={styles.name}>{title}</Text>
            <View style={styles.icon}>
                <View style={styles.iconButton}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        color: '#fff',
        fontSize: 20,
    },
    img: {
        width: 65,
        margin: 10,
        backgroundColor: '#0588DA',
        justifyContent: 'center',
        borderRadius: 5,
        paddingLeft: 8,
    },
    icon: {
        width: 20,
        height: 14,
        right: -6,
        backgroundColor: '#0072BB',
        borderRadius: 7,
        position: 'absolute',
    },
    iconButton: {
        marginTop: 4,
        width: 5,
        height: 5,
        right: 11,
        backgroundColor: '#fff',
        borderRadius: 5,
        position: 'absolute',
    },
});

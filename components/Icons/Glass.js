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

export default function Glass() {
    return (
        <View style={styles.glass}>
            <View style={styles.circle}>
                <View style={styles.circleInside} />
            </View>
            <View style={styles.stick} />
        </View>
    );
}

const styles = StyleSheet.create({
    glass: {
        
    },
    circle: {
        backgroundColor: 'transparent',
        borderColor:'#0588DA',
        borderWidth:1,
        height: 13,
        width: 13,
        borderRadius: 13,
        marginBottom: 6,
        marginLeft: 15,
        marginTop: 4,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleInside: {
        backgroundColor: 'transparent',
        height: 10,
        width: 10,
        borderRadius: 10,
    },
    stick: {
        backgroundColor: '#0588DA',
        height: 2,
        width: 6,
        borderRadius: 2,
        transform: [{ skewY: '-45deg' }],
        position: 'absolute',
        left: 12,
        top: 17,
    },
});

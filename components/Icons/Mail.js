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

export default function Mail({ navigation }) {
  return (
    <View style={styles.mail}>
      <View style={styles.top} />
      <View style={styles.left} />
      <View style={styles.leftDeg} />
      <View style={styles.rightDeg} />
      <View style={styles.right} />
      <View style={styles.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  mail: {
    justifyContent: 'center',
    left:-14, 
  },
  top: {
    backgroundColor: '#0588DA',
    top: -10,
    height: 2,
    width: 28,
    borderRadius: 2,
    position: 'absolute',
  },
  left: {
    backgroundColor: '#0588DA',
    height: 20,
    width: 2,
    borderRadius: 2,
    position: 'absolute',
  },
  right: {
    backgroundColor: '#0588DA',
    height: 20,
    width: 2,
    borderRadius: 2,
    position: 'absolute',
    left: 26,
  },
  bottom: {
    backgroundColor: '#0588DA',
    top: 10,
    height: 2,
    width: 28,
    borderRadius: 2,
    position: 'absolute',
  },
  leftDeg: {
    backgroundColor: '#0588DA',
    transform: [{ skewY: '45deg' }],
    top:-4,
    height: 2,
    width: 14,
    borderRadius: 2,
    position: 'absolute',
  },
  rightDeg: {
    backgroundColor: '#0588DA',
    top:-4,
    left: 13,
    height: 2,
    width: 14,
    borderRadius: 2,
    position: 'absolute',
    transform: [{ skewY: '-45deg' }],
  },
});

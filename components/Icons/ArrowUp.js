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

export function ArrowUp({ navigation }) {
  return (
    <View style={styles.mail}>
      <View style={styles.rightDeg} />
      <View style={styles.leftDeg} />
    </View>
  );
}
export function ArrowDown({ navigation }) {
  return (
    <View style={styles.mail}>
      <View style={styles.leftDegDown} />
      <View style={styles.rightDegDown} />
    </View>
  );
}
const styles = StyleSheet.create({
  mail: {
    flex: 1,
    justifyContent: 'center',
    margin: 1,
    paddingRight: 8,
  },
  leftDeg: {
    backgroundColor: 'white',
    transform: [{ skewY: '-45deg' }],
    height: 2,
    width: 10,
    borderRadius: 2,
  },
  rightDeg: {
    backgroundColor: 'white',
    top: 2,
    left: 10,
    height: 2,
    width: 10,
    borderRadius: 2,
    transform: [{ skewY: '45deg' }],
  },
  leftDegDown: {
    backgroundColor: 'white',
    transform: [{ skewY: '45deg' }],
    height: 2,
    width: 10,
    borderRadius: 2,
  },
  rightDegDown: {
    backgroundColor: 'white',
    top: -2,
    left: 10,
    height: 2,
    width: 10,
    borderRadius: 2,
    transform: [{ skewY: '-45deg' }],
  },
});

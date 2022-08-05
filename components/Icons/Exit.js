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

export default function Exit({ navigation }) {
  return (
    <View style={styles.mail}>
      <View style={styles.circle}>
        <View style={styles.circleInside} />
      </View>
      <View style={styles.stickOutside}><View style={styles.stick} /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mail: {
    justifyContent: 'center',
    left:-14,
    top:2,  
      
  },
  circle: {
    backgroundColor: '#0588DA',
    height: 22,
    width: 22,
    borderRadius: 22,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInside: {
    backgroundColor: '#282828',
    height: 18,
    width: 18,
    borderRadius: 18,
    position: 'absolute',
  },
  stickOutside: {
    backgroundColor: '#282828',
    left: 5,
    height: 20,
    width: 12,
    top: -15,
    borderRadius: 2,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stick: {
    backgroundColor: '#0588DA',
    top:2,
    height: 10,
    width: 2,
    borderRadius: 2,
    position: 'absolute',
  },
});

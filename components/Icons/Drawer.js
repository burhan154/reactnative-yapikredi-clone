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

export default function Drawer({ navigation }) {
  return (
    <View style={styles.drawer} onPress={() => navigation.toggleDrawer()}>
      <View style={styles.divider} />
      <View style={styles.divider} />
      <View style={styles.dividerHalf} />
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    justifyContent: 'center',
    paddingTop: 5,
  },
  divider: {
    backgroundColor: '#0588DA',
    height: 2,
    width: 22,
    borderRadius: 2,
    marginBottom: 6,
  },
  dividerHalf: {
    backgroundColor: '#0588DA',
    height: 2,
    width: 15,
    borderRadius: 2,
    marginBottom: 6,
  },
});

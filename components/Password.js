import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export function Password({ navigation }) {
  //const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  const navigateDrawer = () => navigation.navigate('DrawerRoute');

  useEffect(() => {
    if (number.length === 6) {
      navigateDrawer();
    }
    if(number.length>0)
      setIsOpen(true);
  }, [number]);

  //console.log(number.length);
  return (
    <TouchableWithoutFeedback
      onPress={() => (setIsOpen(false), onChangeNumber(''))}>
      <View style={styles.header}>
        <FontAwesome5
            name="lock"
            size={16}
            style={{
              position:'absolute',
              left:16,
              color: 'grey',
              marginBottom: 3,
              alignSelf: 'center',
            }}
          />
        <TextInput
          onPressIn={() => setIsOpen(true)}
          onEndEditing={() => (setIsOpen(false), onChangeNumber(''))}
          clearTextOnFocus
          maxLength={6}
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          password
          secureTextEntry
          placeholder="Şifre"
          keyboardType="numeric"
          passwordRules={'*'}
        />
        {isOpen ? (
          <View style={styles.pass}>
            {[...Array(6)].map((e, i) => (
              <View key={i}>
                {i < parseInt(number.length) ? (
                  <View key={i} style={styles.circle} />
                ) : (
                  <View key={i} style={styles.circleEmpty} />
                )}
              </View>
            ))}
          </View>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  input: {
    height: '100%',
    width: '100%',
    fontSize: 14,
    textAlign: 'center',
  },
  pass: {
    height: '100%',
    width: '70%',
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: '#fff',
    position: 'absolute', 
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: '#0588DA',
    marginHorizontal: 2,
  },
  circleEmpty: {
    width: 15,
    height: 15,
    borderRadius: 15,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#0588DA',
  },
});

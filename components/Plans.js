import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { ArrowUp, ArrowDown } from './Icons/ArrowUp';

const { width } = Dimensions.get('window');

export function Plans (props)  {
  const [isOpen, setIsOpen] = useState(false);
  const { name, id, data } = props.data;
  return (
    <View style={styles.plan}>
      <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
        <View style={styles.container}>
          <Text style={styles.text}>{name}</Text>
          <View style={styles.down}>
            {isOpen ? <ArrowUp /> : <ArrowDown />}
          </View>
        </View>
      </TouchableWithoutFeedback>
      {isOpen ? <Plan data={data} /> : null}
    </View>
  );
}

const Plan = (props) => {
  return (
    <View style={styles.open}>
      <View style={styles.data}>
        <Text style={styles.nameText}>{props.data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  down: {
    left: -30,
  },
  plan: {
    marginVertical: 5,
  },
  container: {
    backgroundColor: '#0588DA',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 999,
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 20,
  },
  open: {
    flex: 1,
    backgroundColor: '#282828',
    borderRadius: 10,
    marginHorizontal: 15,
    justifyContent: 'center',
    top: -20,
    paddingBottom: 5,
    paddingTop: 20,
  },
  data: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: '#282828',
    width: width - 30,
    borderRadius: 10,
    justifyContent:"center",
    alignItems:"center",
  },
  nameText: {
    color: 'white',
    fontSize: 14,
  },
});

export default Plans;

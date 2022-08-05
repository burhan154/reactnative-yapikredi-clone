import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function ButtonComp({ navigation, onPress ,textColor, borderColor,backgroundColor, title}) {

  return (
    <TouchableOpacity style={styles.header} onPress={onPress}>
      <View style={[styles.header2,{borderColor:borderColor},{backgroundColor:backgroundColor}]}>
        <Text style={[styles.text,{color:textColor}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

ButtonComp.defaultProps = {
  textColor: '#ddd',
  borderColor: '#ddd',
  backgroundColor:'trasnparent',  
}

ButtonComp.blueProps = {
  textColor: '#ddd',
  borderColor: '#0588DA',
  backgroundColor:'#0588DA',  
}
const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical:10,
    borderRadius: 30,
    backgroundColor:'trasnparent',  
  },
  header2: {
    height:'100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor:'trasnparent',  
  },
  text: {
    color: '#ddd',
    fontSize: 22,
  },
});

export default ButtonComp;
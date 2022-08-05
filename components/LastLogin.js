import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
  Image,
} from 'react-native';
import { Divider } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window');

export function LastLogin  (props)  {
  return (
    <View style={styles.view}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <FontAwesome5
            name="unlock-alt"
            size={16}
            style={{
              marginRight:5,
              color: '#0588DA',
              marginBottom: 3,
              alignSelf: 'center',
            }}
          />
          <Text style={styles.left}>Son Başarılı Giriş:</Text>
        </View>
        <Text style={styles.left}>{props.data.successful}</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <FontAwesome5
            name="lock"
            size={16}
            style={{
              marginRight:5,
              color: '#ddd',
              marginBottom: 3,
              alignSelf: 'center',
            }}
          />
          <Text style={styles.left}>Son Başarısız Giriş:</Text>
        </View>
        <Text style={styles.left}>{props.data.unsuccessful}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: width - 30,
    marginHorizontal: 15,
    marginTop:10
  },
  view2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  view3: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  left: {
    color: '#ddd',
    fontSize: 14,
  },
});

export default LastLogin;

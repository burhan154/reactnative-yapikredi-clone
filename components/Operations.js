import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';
import { Divider } from 'react-native-elements';
const { width } = Dimensions.get('window');

export function Operations  (props)  {
  return (
    <View style={styles.container}>
      <ScrollView
        ref={(scrollView) => {
          this.scrollView = scrollView;
        }}
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={'normal'}
        snapToInterval={width - 20}
        snapToAlignment={'center'}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}>
        {props.data.map((item, index) => (
          <View key={index}
            style={
              index === 0
                ? styles.view
                : index === props.data.length - 1
                ? styles.view3
                : styles.view2
            }>
            <Operation data={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const Operation = (props) => {
  const { name, id, balances, tur } = props.data;
  return (
    <View style={styles.right}>
      <View style={styles.top}></View>
      <View style={styles.bottom}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 5 },
  view: {
    backgroundColor: '#282828',
    width: 80,
    height: 80,
    marginLeft: 15,
    marginRight: 5,
    borderRadius: 10,
    flexDirection: 'row',
  },
  view2: {
    backgroundColor: '#282828',
    width: 80,
    height: 80,
    marginLeft: 5,
    marginRight: 5, 
    borderRadius: 10,
    flexDirection: 'row',
  },
  view3: {
    backgroundColor: '#282828',
    width: 80,
    height: 80,
    marginLeft: 5,
    marginRight: 15,
    borderRadius: 10,
    flexDirection: 'row',
  },
  bottom: {
    backgroundColor: '#1c1c1c',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  top: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 2,
  },
  right: {
    flex: 1,
  },
  name: {
    color: 'white',
  },
});

export default Operations;

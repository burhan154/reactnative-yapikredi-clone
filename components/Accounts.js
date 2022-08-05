import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  bottomOpen, bottomClose
} from '../redux/modules/bottom/actions';

import { Divider } from 'react-native-elements';
import Wallet from './Icons/Wallet';
const { width } = Dimensions.get('window');

export function Accounts(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            fontWeight: 'bold',
            marginLeft: 18,
          }}>
          Hesaplarım
        </Text>
      </View>
      <ScrollView
        ref={(scrollView) => {
          this.scrollView = scrollView;
        }}
        style={styles.container}
        //pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={width - 20}
        snapToAlignment={'center'}
        contentInset={{
          top: 0,
          left: 300,
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
            <Account data={item} navigation={navigation} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const Account = (props) => {
  const { navigation } = props;
  const { name, id, balances, tur } = props.data;
  const dispatch = useDispatch();

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('AccountDetailScreen', { data: props.data })}
      onLongPress={() => dispatch(bottomOpen())} >
      <View style={styles.container2}>
        <View style={styles.left} />
        <View style={styles.right}>
          <View style={styles.top}>
            <Wallet title={tur} />
            <View style={styles.topMid}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.subName}>{id}</Text>
            </View>
          </View>
          <View style={styles.bottomRow}>
            <View style={styles.ballance}>
              <View style={styles.rowBallance}>
                <Text style={styles.money}>
                  {balances.available.split(',')[0]}
                </Text>
                <Text style={styles.penny}>
                  {','}
                  {balances.available.split(',')[1]}
                  {' ' + tur}
                </Text>
              </View>
              <Text style={styles.subBallanceName}>Kullanılabilir Bakiye</Text>
            </View>

            <Divider
              style={styles.divider}
              orientation="vertical"
              width={1}
              color="gray"
            />

            <View style={styles.ballance}>
              <View style={styles.rowBallance}>
                <Text style={styles.money}>
                  {balances.current.split(',')[0]}
                </Text>
                <Text style={styles.penny}>
                  {','}
                  {balances.current.split(',')[1]}
                  {' ' + tur}
                </Text>
              </View>
              <Text style={styles.subBallanceName}>Güncel Bakiye</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight >
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 5 },
  container2: {
    height: 130,
    borderRadius: 10,
    flexDirection: 'row',
    width: width - 30,
    backgroundColor: '#282828',
  },
  view: {
    marginLeft: 15,
    marginRight: 5,
    borderRadius: 10,
  },
  view2: {
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
  },
  view3: {
    marginLeft: 5,
    marginRight: 15,
    borderRadius: 5,
  },
  name: {
    color: '#fff',
    fontSize: 20,
  },
  money: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  penny: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  subName: {
    color: 'grey',
    fontSize: 15,
  },
  subBallanceName: {
    color: '#ddd',
    fontSize: 14,
  },
  left: {
    backgroundColor: '#0588DA',
    width: 5,

    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  top: {
    height: '50%',
    flexDirection: 'row',
    flex: 1,
  },
  bottomRow: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  right: {
    flex: 1,
  },
  topMid: {
    margin: 10,
  },
  ballance: {
    alignItems: 'center',
  },
  rowBallance: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  divider: {
    marginVertical: 18,
  },
});

export default Accounts;

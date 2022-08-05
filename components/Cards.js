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
const { width } = Dimensions.get('window');

export function Cards (props)  {
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
          Kartlarım
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
            <Card data={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const Card = (props) => {
  const { name, id, balances, tur } = props.data;
  return (
    <>
      <View style={styles.left} />
      <View style={styles.right}>
        <View style={styles.top}>
          <View style={styles.img}>
            <Image style={styles.logo} source={require('../assets/card.jpg')} />
          </View>
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
            <Text style={styles.subBallanceName}>Güncel Borç</Text>
          </View>

          <Divider
            style={styles.divider}
            orientation="vertical"
            width={1}
            color="gray"
          />

          <View style={styles.ballance}>
            <View style={styles.rowBallance}>
              <Text style={styles.money}>{balances.current.split(',')[0]}</Text>
              <Text style={styles.penny}>
                {','}
                {balances.current.split(',')[1]}
                {' ' + tur}
              </Text>
            </View>
            <Text style={styles.subBallanceName}>Kullanılabilir Limit</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 5 },
  view: {
    backgroundColor: '#282828',
    width: width - 30,
    marginLeft: 15,
    marginRight: 5,
    height: 130,
    borderRadius: 10,
    flexDirection: 'row',
  },
  view2: {
    backgroundColor: '#282828',
    width: width - 30,
    marginLeft: 5,
    marginRight: 5,
    height: 130,
    borderRadius: 10,
    flexDirection: 'row',
  },
  view3: {
    backgroundColor: '#282828',
    width: width - 30,
    marginLeft: 5,
    marginRight: 15,
    height: 130,
    borderRadius: 10,
    flexDirection: 'row',
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
  img: {
    width: 65,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  logo: {
    width: 65,
    resizeMode: 'contain',
  },
  topMid: {
    margin: 10,
  },
  ballance: {
    alignItems: 'center',
  },
  divider: {
    marginVertical: 18,
  },
   rowBallance: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Cards;

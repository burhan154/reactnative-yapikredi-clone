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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window');

export function Activities(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { name, id, screens } = props.data;
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
      {isOpen ? <Activity data={screens} /> : null}
    </View>
  );
}

const Activity = (props) => {
  const [stick, setStick] = useState(0);
  const [active, setActive] = useState(true);

  const toRight = () => {
    this.scrollview_ref.scrollTo({
      x: width - 30,
    });
  };

  const toLeft = () => {
    this.scrollview_ref.scrollTo({
      x: 0,
    });
  };

  return (
    <View style={styles.open}>
      <View style={{ borderBottomWidth: 1, borderColor: 'grey' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableWithoutFeedback onPress={() => toLeft()}>
            <View style={styles.names}>
              <Text style={active ? styles.activeNameText : styles.nameText}>
                {props.data.firstScreen.name}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => toRight()}>
            <View style={styles.names}>
              <Text style={active ? styles.nameText : styles.activeNameText}>
                {props.data.secondScreen.name}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={[styles.line, { left: stick / 2 }]} />
      <ScrollView
        ref={(scrollView) => {
          this.scrollview_ref = scrollView;
        }}
        onScroll={(event) => {
          setStick(event.nativeEvent.contentOffset.x);
          stick < width / 2 - 15 ? setActive(true) : setActive(false);
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={'normal'}
        snapToInterval={width}
        snapToAlignment={'center'}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 0,
        }}>
        <Left data={props.data.firstScreen.data} />
        <Left data={props.data.secondScreen.data} />
      </ScrollView>
    </View>
  );
};

const Left = (props) => {
  return (
    <View style={styles.data}>
      {props.data.map((datas, index) => (
        <View key={index}>
          <Text style={styles.dateText}>{datas.date}</Text>
          {datas.data.map((data, index2) => (
            <Data key={index2} data={data} />
          ))}
        </View>
      ))}
    </View>
  );
};

const Data = (props) => {
  const { isReceive, name, subName, amount } = props.data;
  return (
    <View style={styles.actions}>
      <View style={styles.left}>
        {isReceive ? (
          <FontAwesome5
            name="arrow-right"
            size={16}
            style={{
              marginRight: 10,
              color: '#ddd',
            }}
          />
        ) : (
          <FontAwesome5
            name="arrow-left"
            size={16}
            style={{
              marginRight: 10,
              color: '#ddd',
            }}
          />
        )}
      </View>
      <View style={styles.mid}>
        <View style={styles.midLeft}>
          <Text style={styles.dataText}>{name}</Text>
        </View>
        <View style={styles.midRight}>
          <Text style={styles.dataText}>{subName}</Text>
        </View>
      </View>
      <View style={styles.right}>
        {isReceive ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.amountReceiveText}>
              {amount.split(',')[0] + ','}
            </Text>
            <Text style={styles.amountReceiveSmallText}>
              {amount.split(',')[1]} TL
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.amountNotReceiveText}>
              {'-' + amount.split(',')[0] + ','}
            </Text>
            <Text style={styles.amountNotReceiveSmallText}>
              {amount.split(',')[1]} TL
            </Text>
          </View>
        )}
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
    paddingBottom: 10,
  },
  data: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: '#282828',
    width: width - 30,
    borderRadius: 10,

    paddingHorizontal: 20,
  },
  names: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#282828',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: 'white',
    fontSize: 18,
  },
  nameText: {
    color: 'white',
    fontSize: 15,
  },
  amountReceiveText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  amountReceiveSmallText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  amountNotReceiveText: {
    color: '#FF5738',
    fontSize: 18,
    fontWeight: 'bold',
  },
  amountNotReceiveSmallText: {
    color: '#FF5738',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dataText: {
    color: '#ddd',
    fontSize: 14,
  },
  activeNameText: {
    color: '#0588DA',
    fontSize: 15,
  },
  line: {
    backgroundColor: '#0588DA',
    width: width / 2 - 15,
    height: 3,
    left: 30 / 2 - 15,
  },
  actions: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  mid: {
    flexDirection: 'column',
    width: '70%',
    justifyContent: 'center',
  },
  left: {
    width: '10%',
    justifyContent: 'center',
  },
  right: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default Activities;

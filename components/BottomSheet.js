import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { IconButton, Portal } from 'react-native-paper';
import ButtonComp from './ButtonComp';
import { useSelector, useDispatch } from 'react-redux';
import { bottomOpen, bottomClose } from '../redux/modules/bottom/actions';

export function BottomSheet({ enableBackdropDismiss, datas }) {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.bottom.isShow);
  const [open, setOpen] = useState(show);

  const bottomSheetHeight = Dimensions.get('window').height * 0.4;

  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

  const onGesture = (event) => {
    if (event.nativeEvent.translationY > 0) {
      bottom.setValue(-event.nativeEvent.translationY);
    }
  };

  const onGestureEnd = (event) => {
    if (event.nativeEvent.translationY > bottomSheetHeight / 4) {
      dispatch(bottomClose());
    } else {
      bottom.setValue(0);
    }
  };

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight * 2,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]);

  if (!open) {
    return null;
  }
  return (
    <Portal>
      <Pressable
        onPress={
          enableBackdropDismiss ? () => dispatch(bottomClose()) : undefined
        }
        style={styles.backDrop}
      />
      <Animated.View
        style={[
          styles.root,
          {
            bottom: bottom,
            shadowOffset: {
              height: -3,
            },
          },
          styles.common,
        ]}>
        <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
          <View
            style={[
              styles.header,
              styles.common,
              {
                position: 'relative',
                shadowOffset: {
                  height: 3,
                },
              },
            ]}>
            <View
              style={{
                width: 80,
                height: 3,
                borderRadius: 1.5,
                top: 8,
                zIndex: 10,
                backgroundColor: 'grey',
              }}
            />
            {/*children*/}
            <Datas datas={datas} />
          </View>
        </PanGestureHandler>
        {/*children*/}
      </Animated.View>
    </Portal>
  );
}

const Datas = ({ datas }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.top}>
      {datas.map((data) => (
        <View key={data.name} style={styles.top2}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.divider} />
        </View>
      ))}
      <ButtonComp title={'İptal'} onPress={() => dispatch(bottomClose())} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#282828',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  header: {
    height: '100%',
    backgroundColor: '#282828',
    alignItems: 'center',
  },
  common: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 80,
    backgroundColor: 'rgba(0,0,0, 0.52)',
  },
  top: {
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  top2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  name: {
    paddingVertical: '2%',
    color: '#0588DA',
    fontSize: 22,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
  },
});

export default BottomSheet;

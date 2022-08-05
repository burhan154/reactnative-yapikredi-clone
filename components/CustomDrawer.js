import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { height } = Dimensions.get('window');


export const CustomDrawer = (props, { navigation }) => {
  const drawerList = props.state.routes.map((route, index) => {
    return (
      <View key={index} style={{
        justifyContent:'center',
        top:0,
        height:(height-200)/10,
      }}>
        {props.state.index === index ? (
          <View
            style={{ 
              width: 5,
              backgroundColor: '#23A9F2',
              height: '100%',
              position: 'absolute',
            }}
          />
        ) : null}
        <DrawerItem 
          style={{padding:0,top:0, }}
          key={route.key}
          activeTintColor="#2196f3"
          activeBackgroundColor="rgba(0, 0, 0, .04)"
          inactiveBackgroundColor="transparent"
          icon={({ color, size }) => (
            <Icon name="home-outline" color={'#0588DA'} size={30} />
          )}
          label={route.name}
          labelStyle={{ color: '#fff', fontSize: 20,fontWeight:'400',position:'absolute',top:-12 }}
          onPress={() => {
            props.navigation.navigate(route.name);
          }}
        />
      </View>
    );
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <ImageBackground style={{ paddingVertical: 30 ,flexDirection:'row'}}>
        <Image
          source={{
            uri: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            margin: 10,
          }}
        />
        <View style={{ flex: 1, justifyContent: 'center', paddingLeft:10 }}>
          <Text style={{ color: '#bbb', fontSize: 17 }}>İyi Günler,</Text>
          <Text style={{ color: '#0588DA', fontSize: 24 }}>Hüseyin Burhan Başaran</Text>
        </View>
        
        <View style={{ flexDirection: 'row' }}></View>
      </ImageBackground>
      {drawerList}
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          width: '100%',
          bottom: 0,
          position: 'absolute',
          backgroundColor: '#282828',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#0588DA', fontSize: 24 }}>Ayarlarım</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'red', fontSize: 24 }}>Çıkış</Text>
        </View>
      </View>
    </View>
  );
};

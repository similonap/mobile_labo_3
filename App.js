import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Rainbow from './Rainbow';
import Footer from './Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Rainbow rainbowStyle={{}} elementHeight={10}/>
      <View style={{flexDirection: 'row', flex: 1, alignItems: 'stretch'}}>
        <Rainbow rainbowStyle={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}} elementWidth={10}/>
        <Rainbow rainbowStyle={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}} elementWidth={50} elementHeight={50}/>
       
      </View>
      <Footer text="Rainbow"/>
      <StatusBar style="auto" hidden/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

import React from 'react';
import { Text, View } from 'react-native';
import rca from 'rainbow-colors-array';
import Letter from './Letter';

export default (props) => {
    let rainbowArray = rca(10, "hex", true);
    return (
      <View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          {[...props.text].map((letter, i) => {
            return <Letter key={letter} letter={letter} color={'#' + rainbowArray[i].hex}/>
          })}
        </Text>
      </View>
    )
  }
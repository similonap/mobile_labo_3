import React from 'react';
import { View } from 'react-native';
import rca from 'rainbow-colors-array';

export default (props) => {
    let rainbowArray = rca(10, "hex", true).slice(0,6);
    return <View style={props.rainbowStyle}>
      {rainbowArray.map((color) => {
        return <View key={color.hex} style={{backgroundColor: '#' + color.hex, width: props.elementWidth, height: props.elementHeight }}/>
      })}
    </View>
  }
  
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default (props) => {
    return <Text style={{fontSize: 30, color: props.color}} key={props.letter}>{props.letter}</Text>;
}
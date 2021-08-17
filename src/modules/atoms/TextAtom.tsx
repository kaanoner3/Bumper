import React, { FC } from 'react';
import { StyleProp, Text, TextStyle, StyleSheet } from 'react-native';

interface TextAtomProps {
  text: string;
  customStyle?: StyleProp<TextStyle>;
}

const TextAtom: FC<TextAtomProps> = ({ customStyle, text }) => {
  return <Text style={[styles.default, customStyle]}>{text}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontSize: 12,
    color: '#fff',
  },
});

export default TextAtom;

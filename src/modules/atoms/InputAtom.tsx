import React, { FC } from 'react';
import {
  StyleProp,
  Text,
  Dimensions,
  TextStyle,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';

interface InputAtomProps {
  placeholder?: string;
  customStyle?: StyleProp<TextStyle>;
}
type InputProps = TextInputProps & InputAtomProps;

const InputAtom: FC<InputProps> = ({
  value,
  customStyle,
  placeholder,
  onChangeText = () => null,
  ...otherProps
}) => {
  return (
    <TextInput
      onChangeText={(text) => onChangeText(text)}
      value={value}
      placeholderTextColor="#fff"
      autoCapitalize="characters"

      maxLength={8}
      placeholder={placeholder}
      style={[styles.default, customStyle]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  default: {
    width: Dimensions.get('window').width - 60,
    height: 50,
    backgroundColor: 'rgba(65, 76,109,1)',
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
  },
});

export default InputAtom;

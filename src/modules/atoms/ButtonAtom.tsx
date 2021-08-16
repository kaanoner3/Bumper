import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import TextAtom from './TextAtom';

interface ButtonAtomProps {
  onPress: () => void;
  text?: string;
  customStyles?: StyleProp<TouchableOpacityProps> & StyleProp<ViewStyle>;
  loading?: boolean;
}


const ButtonAtom: FC<ButtonAtomProps> = ({
  onPress = () => {},
  text = '',
  customStyles = {},
  loading = false,
}) => {
  return (
    <TouchableOpacity style={[styles.default, customStyles]} onPress={onPress}>
      {loading && (
        <ActivityIndicator
          style={styles.loadingStyle}
          size="small"
          color="#fff"
        />
      )}
      <TextAtom customStyle={styles.textStyle} text={text} />
    </TouchableOpacity>
  );
};

export default ButtonAtom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  default: {
    backgroundColor: 'rgba(58,188,85, 1)',
    width: Dimensions.get('window').width - 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    borderRadius: 20,
  },
  loadingStyle: { position: 'absolute', left: 30 },
  textStyle: {
    fontSize: 24,
    fontWeight: '500',
  },
});

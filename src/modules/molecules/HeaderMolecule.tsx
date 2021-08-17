import React, { FC } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import TextAtom from '../atoms/TextAtom';
import LeftIcon from '../../../assets/left-arrow.png';

interface HeaderMoleculeProps {
  title: string;
  leftButtonAction: () => void;
}

const HeaderMolecule: FC<HeaderMoleculeProps> = ({
  title,
  leftButtonAction,
}) => {
  return (
    <View style={styles.defaultContainer}>
      <TouchableOpacity onPress={leftButtonAction}>
        <Image
          source={LeftIcon}
          style={{ width: 24, height: 24, tintColor: '#fff' }}
        />
      </TouchableOpacity>
      <TextAtom
        customStyle={{ fontSize: 20, fontWeight: '700' }}
        text={title}
      />
      <TouchableOpacity disabled={true} />
    </View>
  );
};

export default HeaderMolecule;

const styles = StyleSheet.create({
  defaultContainer: {
    paddingHorizontal: 20,

    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
  },
});

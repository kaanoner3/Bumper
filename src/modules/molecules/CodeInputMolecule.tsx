import React from 'react';
import { View } from 'react-native';
import ButtonAtom from '../atoms/ButtonAtom';
import InputAtom from '../atoms/InputAtom';
import TextAtom from '../atoms/TextAtom';

const CodeInputMolecule = () => {
  return (
    <View>
      <TextAtom text="To get started, add your vehicle reg below" />
      <InputAtom />
      <ButtonAtom onPress={() => console.log('button pressed')} />
    </View>
  );
};

export default CodeInputMolecule;

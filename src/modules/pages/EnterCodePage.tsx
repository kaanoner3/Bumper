import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ButtonAtom from '../atoms/ButtonAtom';
import SvgCarLogo from '../atoms/CarLogoAtom';
import InputAtom from '../atoms/InputAtom';
import TextAtom from '../atoms/TextAtom';

const EnterCodePage = () => {
  return (
    <View style={styles.container}>
      <SvgCarLogo />
      <TextAtom text="To get started, add your vehicle reg below" />
      <InputAtom placeholder="ENTER REG" customStyle={styles.inputStyle}/>
      <ButtonAtom customStyles={styles.buttonStyle} text="Submit" onPress={() => console.log('button pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgba(91,106,139,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle:{
      marginTop:20
  },
  inputStyle:{
      marginTop:10
  }
});

export default EnterCodePage;

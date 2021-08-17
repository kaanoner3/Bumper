import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import FadeAwayContainer from '../../hoc/FadeAwayContainer';
import ButtonAtom from '../atoms/ButtonAtom';
import InputAtom from '../atoms/InputAtom';
import TextAtom from '../atoms/TextAtom';

interface SignUpFormMoleculeProps {
  shouldHideForm: boolean;
}

const SignUpFormMolecule = ({ shouldHideForm = true }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  return (
    <FadeAwayContainer duration={125} shouldHideChildren={shouldHideForm}>
      <View style={styles.textView}>
        <TextAtom
          customStyle={styles.largeText}
          text="Who drives this vecihle?"
        />
        <TextAtom
          customStyle={styles.smallText}
          text="You can change this later"
        />
      </View>
      <View>
        <InputAtom
          value={name}
          onChangeText={(value) => setName(value)}
          placeholder="First Name"
          textAlign="left"
          customStyle={styles.inputStyle}
        />
        <InputAtom
          value={surname}
          onChangeText={(value) => {
            console.log(value);
            setSurname(value);
          }}
          textAlign="left"
          placeholder="Last Name"
          customStyle={styles.inputStyle}
        />
        <ButtonAtom
          customStyles={styles.buttonStyle}
          text="Submit"
          onPress={() => null}
        />
      </View>
    </FadeAwayContainer>
  );
};

export default SignUpFormMolecule;

const styles = StyleSheet.create({
  largeText: {
    marginTop: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'left',
  },
  buttonStyle: {
    marginTop: 20,
    width: Dimensions.get('window').width - 40,

  },
  textView: {
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  smallText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  inputStyle: {
    width: Dimensions.get('window').width - 40,
    borderRadius: 20,
    paddingLeft: 10,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});

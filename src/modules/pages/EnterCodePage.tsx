import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, Dimensions, Animated } from 'react-native';
import ButtonAtom from '../atoms/ButtonAtom';
import SvgCarLogo from '../atoms/CarLogoAtom';
import InputAtom from '../atoms/InputAtom';
import TextAtom from '../atoms/TextAtom';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FadeAwayContainer from '../../hoc/FadeAwayContainer';

const EnterCodePage = ({}) => {
  const [code, setCode] = useState('');
  const [hideView, setHideView] = useState(true);
  const [shouldTranslateLogo, setShouldTranslateLogo] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  useEffect(() => {
    if (shouldTranslateLogo) {
      Animated.timing(translateY, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {});
    }
  }, [shouldTranslateLogo]);

  useEffect(() => {
    setTimeout(() => {
      setShouldTranslateLogo(true);
    }, 500);
    setTimeout(() => {
      setHideView(false);
    }, 750);
  }, []);

  const position = {

    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [0, 1],
          outputRange: [Dimensions.get('window').height / 6, 0],
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={position}>
        <SvgCarLogo />
      </Animated.View>
      <View>
        <FadeAwayContainer
          height={200}
          width={Dimensions.get('window').width}
          shouldHideChildren={hideView}
        >
          <TextAtom text="To get started, add your vehicle reg below" />
          <SharedElement id="input-atom">
            
            <InputAtom
              onChangeText={(val) => setCode(val)}
              placeholder="ENTER REG"
              customStyle={styles.inputStyle}
            />
          </SharedElement>

          <ButtonAtom
            customStyles={styles.buttonStyle}
            text="Submit"
            onPress={() => navigation.navigate('SignUp', { text: code })}
          />
        </FadeAwayContainer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(91,106,139,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 20,
  },
  inputStyle: {
    marginTop: 10,
  },
});

export default EnterCodePage;

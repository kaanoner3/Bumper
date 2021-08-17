import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import InputAtom from '../atoms/InputAtom';
import { SharedElement } from 'react-navigation-shared-element';
import TextAtom from '../atoms/TextAtom';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderMolecule from '../molecules/HeaderMolecule';
import { useNavigation, useRoute } from '@react-navigation/native';
import CarLogo from '../../../assets/car-example.png';
import ButtonAtom from '../atoms/ButtonAtom';
import SignUpFormMolecule from '../molecules/SignUpFormMolecule';
import useKeyboardVisible from '../../hooks/useKeyboardVisible';

const SignUpPage = ({}) => {
  const navigation = useNavigation();
  const [shouldStartAimate, setShouldStartAnimate] = useState(false);
  const [shouldHideForm, setShouldHideForm] = useState(true);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedValueForKeyobard = useRef(new Animated.Value(0)).current;

  const keyboardVisible = useKeyboardVisible();

  const route = useRoute();
  const { text } = route.params;

  useEffect(() => {
    console.log(keyboardVisible)
    if (keyboardVisible) {
      Animated.timing(animatedValueForKeyobard, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValueForKeyobard, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [keyboardVisible]);

  useEffect(() => {
    if (shouldStartAimate) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setShouldHideForm(false));
    }
  }, [shouldStartAimate]);

  let animatedHeight = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [450, 250],
  });
  const positionDisappear = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        }),
      },
    ],
  };
  const scaleImage = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.8],
        }),
      },
    ],
  };
  const translateY = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -40],
        }),
      },
    ],
  };
  const translateImageView = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 70],
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 20],
        }),
      },
    ],
  };
  const translateScreen = {
    transform: [
      {
        translateY: animatedValueForKeyobard.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -150],
        }),
      },
    ],
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <HeaderMolecule
        title="Sign Up"
        leftButtonAction={() => navigation.goBack()}
      />
      <Animated.View style={translateScreen}>
        <Animated.View style={[styles.contentView, { height: animatedHeight }]}>
          <View style={{ flex: 1, padding: 10 }}>
            <SharedElement id="input-atom">
              <InputAtom
                editable={false}
                value={text}
                placeholder="ENTER REG"
                customStyle={styles.inputStyle}
              />
            </SharedElement>
            <Animated.View style={positionDisappear}>
              <TextAtom
                customStyle={{ marginTop: 10, fontSize: 16 }}
                text="Is this your vehicle?"
              />
            </Animated.View>
            <View style={[{ flex: 1 }]}>
              <Animated.View>
                <Animated.Text style={[styles.largeText, translateY]}>
                  Scirocco 2019
                </Animated.Text>
                <Animated.Text style={[styles.smallText, translateY]}>
                  Volkswagen
                </Animated.Text>
              </Animated.View>
              <Animated.View style={[styles.imageView, translateImageView]}>
                <Animated.Image
                  source={CarLogo}
                  style={[styles.imageStyle, scaleImage]}
                />
              </Animated.View>
            </View>
          </View>

          <Animated.View style={[styles.buttonGroupView, positionDisappear]}>
            <ButtonAtom
              customStyles={styles.leftButtonStyle}
              text="No"
              buttonTextStyle={{ fontSize: 14 }}
              onPress={() => navigation.goBack()}
            />
            <ButtonAtom
              customStyles={styles.rightButtonStyle}
              text="Yes Let's Go"
              buttonTextStyle={{ fontSize: 14 }}
              onPress={() => setShouldStartAnimate(true)}
            />
          </Animated.View>
        </Animated.View>
        <SignUpFormMolecule shouldHideForm={shouldHideForm} />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  middleText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '800',
  },
  imageView: {
    flex: 1,

    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  largeText: {
    marginTop: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  smallText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  imageStyle: {
    position: 'absolute',
    bottom: 0,
    resizeMode: 'contain',
    height: 150,
    width: 250,
    right: -50,
  },
  buttonGroupView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  leftButtonStyle: {
    width: 80,
    height: 40,
    backgroundColor: '#000',
  },
  rightButtonStyle: {
    width: 160,
    height: 40,
  },
  inputStyle: {
    marginTop: 10,
  },
  contentView: {
    backgroundColor: 'rgba(91,106,139,1)',
    height: 400,
    borderRadius: 20,
    overflow: 'hidden',
    width: Dimensions.get('window').width - 40,
  },
});

SignUpPage.sharedElements = () => {
  return [{ id: 'input-atom', animation: 'move' }];
};

export default SignUpPage;

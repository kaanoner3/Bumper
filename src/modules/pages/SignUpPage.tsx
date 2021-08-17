import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
} from 'react-native';
import InputAtom from '../atoms/InputAtom';
import { SharedElement } from 'react-navigation-shared-element';
import TextAtom from '../atoms/TextAtom';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderMolecule from '../molecules/HeaderMolecule';
import { useNavigation, useRoute } from '@react-navigation/native';
import CarLogo from '../../../assets/car-example.png';
import ButtonAtom from '../atoms/ButtonAtom';

const SignUpPage = ({}) => {
  const navigation = useNavigation();
  const [shouldStartAimate, setShouldStartAnimate] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const route = useRoute();
  const { text } = route.params;

  useEffect(() => {
    if (shouldStartAimate) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [shouldStartAimate]);

  let animatedHeight = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 200],
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
  const scaleSmaller = {
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
  const translateYImageView = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 80],
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
  const translateX = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 300],
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
              <Animated.Text
                style={[
                  {
                    marginTop: 20,
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: '700',
                  },
                  translateY,
                ]}
              >
                Scirocco 2019
              </Animated.Text>
              <Animated.Text
                style={[
                  {
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: '500',
                    marginTop: 5,
                  },
                  translateY,
                ]}
              >
                Volkswagen
              </Animated.Text>
            </Animated.View>
            <Animated.View style={[styles.imageView, translateYImageView]}>
              <Animated.Image
                source={CarLogo}
                style={[styles.imageStyle, scaleSmaller]}
              />
            </Animated.View>
          </View>
        </View>

        <Animated.View style={[styles.buttonGroupView, positionDisappear]}>
          <ButtonAtom
            customStyles={styles.leftButtonStyle}
            text="No"
            buttonTextStyle={{ fontSize: 14 }}
            onPress={() => null}
          />
          <ButtonAtom
            customStyles={styles.rightButtonStyle}
            text="Yes Let's Go"
            buttonTextStyle={{ fontSize: 14 }}
            onPress={() => setShouldStartAnimate(true)}
          />
        </Animated.View>
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
    height: 30,
    backgroundColor: '#000',
  },
  rightButtonStyle: {
    width: 160,
    height: 30,
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

import React, { FC, useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

interface FadeAwayContainerProps {
  height?: number;
  width?: number;
  shouldHideChildren: boolean;
  duration?: number
}

const FadeAwayContainer: FC<FadeAwayContainerProps> = ({
  children,
  width,
  height,
  duration = 500,
  shouldHideChildren = true,
}) => {
  const contentOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!shouldHideChildren) {
      Animated.timing(contentOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {});
    }
  }, [shouldHideChildren]);

  return (
    <Animated.View
      style={[styles.default, { width, height, opacity: contentOpacity }]}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  default: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FadeAwayContainer;

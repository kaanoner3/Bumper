import { useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';

const useKeyboardVisible = (): boolean => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardWllShowListener = Keyboard.addListener('keyboardWillShow', () => {
      if (Platform.OS === 'ios') setKeyboardVisible(true);
    });
    const keyboarWillHideListener = Keyboard.addListener('keyboardWillHide', () => {
      if (Platform.OS === 'ios') setKeyboardVisible(false);
    });
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', () => {
      if (Platform.OS === 'android') setKeyboardVisible(false);
    });
    const keyboarDidHideListener = Keyboard.addListener('keyboardDidShow', () => {
      if (Platform.OS === 'android') setKeyboardVisible(true);
    });
    return () => {
      keyboardWllShowListener.remove();
      keyboarWillHideListener.remove();
      keyboarDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return keyboardVisible;
};

export default useKeyboardVisible;
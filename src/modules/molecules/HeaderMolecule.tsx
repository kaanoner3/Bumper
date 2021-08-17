import React, { FC } from 'react';
import { TouchableOpacity, View,StyleSheet,Dimensions } from 'react-native';
import TextAtom from '../atoms/TextAtom';

interface HeaderMoleculeProps {
  title: string;
  leftButtonAction: () => void;
}

const HeaderMolecule: FC<HeaderMoleculeProps> = ({title, leftButtonAction}) => {
  return (
    <View style={styles.defaultContainer}>
      <TouchableOpacity onPress={leftButtonAction}>
        <TextAtom customStyle={{fontSize:20, fontWeight:'700'}} text="G" />
      </TouchableOpacity>
      <TextAtom customStyle={{fontSize:20, fontWeight:'700'}} text={title} />
      <TouchableOpacity disabled={true} />
    </View>
  );
};

export default HeaderMolecule;


const styles = StyleSheet.create({
    defaultContainer:{
        paddingHorizontal:20,
        
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        height:80
    }
})
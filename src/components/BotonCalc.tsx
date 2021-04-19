import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  texto: string;
  color?: '#2d2d2d' | '#9b9b9b' | '#ff9427';
  colorTexto?: 'white' | 'black';
}

export const BotonCalc = ({
  texto,
  color = '#2d2d2d',
  colorTexto = 'white',
}: Props) => {
  return (
    <View style={{...styles.boton, backgroundColor: color}}>
      <Text style={{...styles.botonTexto, color: colorTexto}}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  botonTexto: {
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
  },
});

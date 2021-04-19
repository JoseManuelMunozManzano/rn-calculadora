import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  texto: string;
  color?: '#2d2d2d' | '#9b9b9b' | '#ff9427';
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  texto,
  color = '#2d2d2d',
  ancho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 160 : 70,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 70,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
  },
  botonAncho: {},
});

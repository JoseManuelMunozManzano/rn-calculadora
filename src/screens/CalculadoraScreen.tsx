import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';

import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>

      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="C" color="#9b9b9b" colorTexto="black" />
        <BotonCalc texto="+/-" color="#9b9b9b" colorTexto="black" />
        <BotonCalc texto="del" color="#9b9b9b" colorTexto="black" />
        <BotonCalc texto="/" color="#ff9427" />
      </View>
    </View>
  );
};

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    alignSelf: 'flex-end',
  },
  resultadoPequeno: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    alignSelf: 'flex-end',
  },

  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#9b9b9b',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonTexto: {
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '300',
  },
});

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  square: {
    width: 15,
    height: 15,
    marginLeft: 3,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box: {
    maxWidth: 80,
    marginTop: 15,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default styles;

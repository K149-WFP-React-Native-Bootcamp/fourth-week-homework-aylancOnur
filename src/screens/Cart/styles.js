import {StyleSheet} from 'react-native';
import {H, W} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: W(4),
  },
  card: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: H(15),
    borderRadius: 8,
    margin: W(1),
    marginBottom: W(5),
  },
  image: {
    height: H(10),
    width: W(20),
    borderRadius: 8,
    resizeMode: 'contain',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6600',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    maxWidth: W(60),
  },
  buttons: {
    alignItems: 'center',
  },
  icon: {
    borderWidth: 0.5,
    borderColor: '#333333',
    borderRadius: 50,
  },
  button: {
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    fontWeight: 'bold',
  },
});

export default styles;

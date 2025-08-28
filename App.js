import { StyleSheet, Text, View } from 'react-native';
import MainStack from './Navigator/MainStack'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './Redux/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <MainStack/>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

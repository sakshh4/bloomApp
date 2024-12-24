import React from 'react';
import {NativeBaseProvider} from 'native-base';
import AppStack from './src/navigation/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <NativeBaseProvider>
        <AppStack />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};
export default App;
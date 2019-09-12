import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import AuthContainer from './src/containers/AuthContainer'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AuthContainer />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;

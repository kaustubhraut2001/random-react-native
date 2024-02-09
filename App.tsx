import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <StatusBar />

      <Text style={styles.button}> Press Me</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  status: {
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'blue',
  },
});

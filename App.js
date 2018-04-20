import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDo from './ToDo.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ToDo style={styles.list}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEBD7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1
  }
});

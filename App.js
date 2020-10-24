import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from './app/components/Header';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './app/reducers/index';
import LibraryList from './app/components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <Header title="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

import React from 'react';
import {StyleSheet, FlatList, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

const LibraryList = ({libraries}) => {
  return (
    <ScrollView>
      <FlatList
        data={libraries}
        style={styles.container}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <ListItem data={item} />;
        }}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);

import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import * as actions from '../actions';
import {connect} from 'react-redux';
import AppText from './AppText';

const ListItem = ({data, selectedLibrary, expanded}) => {
  const {id, title, description} = data;

  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  });

  return (
    <TouchableWithoutFeedback onPress={() => selectedLibrary(id)}>
      <View style={styles.container}>
        <AppText style={styles.titleStyle}>{title}</AppText>
        {expanded ? <AppText style={styles.desc}>{description}</AppText> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    elevation: 5,
    width: `100%`,
    backgroundColor: '#1e90ff',
    marginVertical: 5,
    borderRadius: 10,
  },
  titleStyle: {
    fontSize: 18,
    paddingVertical: 15,
    paddingLeft: 15,
    color: '#ffffff',
  },
  desc: {
    fontSize: 14,
    paddingHorizontal: 15,
    paddingBottom: 15,
    color: '#ffffff',
  },
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.data.id;
  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);

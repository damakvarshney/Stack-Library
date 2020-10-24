import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = ({title, titleStyle}) => {
  return (
    <View style={styles.container}>
      <Text style={[titleStyle, styles.title]}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: `100%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
});

export default Header;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import AppBarTab from './AppBarTab';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    paddingLeft: 10,
  },
});

const AppBar = () => {
    return (
      <View style={styles.container}>
        <Link to="/" component={View}>
          <AppBarTab title="Repositories" />
        </Link>
        <Link to="/signin" component={View}>
          <AppBarTab title="Sign In" />
        </Link>
      </View>
    );
  };

export default AppBar;
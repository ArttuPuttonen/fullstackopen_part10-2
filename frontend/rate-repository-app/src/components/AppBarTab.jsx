import React from 'react';
import { View } from 'react-native';
import Text from './Text';

const AppBarTab = ({ title }) => {
  return (
    <View>
      <Text color="white" fontWeight="bold" fontSize="subheading">
        {title}
      </Text>
    </View>
  );
};

export default AppBarTab;

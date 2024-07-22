import React from 'react';
import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ title }) => {
  return (
    <Pressable>
      <Text color="white" fontWeight="bold" fontSize="subheading">
        {title}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;

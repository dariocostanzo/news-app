import React from 'react';
import News from '../components/News';
import { View } from 'react-native';

const NewsScreen = props => {
  return (
    <View>
      <News props={props} />
    </View>
  );
};

export default NewsScreen;

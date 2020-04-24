import React from 'react';
import News from '../components/News';
import { View } from 'react-native';

// The second page will be displayed after selecting an article.
// It will show the title, the content, the date and the name of the author.
const NewsScreen = props => {
  return (
    <View>
      <News props={props} />
    </View>
  );
};

export default NewsScreen;

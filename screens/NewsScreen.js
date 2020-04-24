import React from 'react';
import News from '../components/News';
import { View, Text, StyleSheet, Button } from 'react-native';

// The second page will be displayed after selecting an article.
// It will show the title, the content, the date and the name of the author.
const NewsScreen = props => {
  console.log(props);
  return (
    <View>
      <News props={props} />
      {/* <Button
        title='Go to Article'
        onPress={() => {
          props.navigation.navigate({ routeName: 'Article' });
        }}
      /> */}
    </View>
  );
};

export default NewsScreen;

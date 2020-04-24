// export default ArticleScreen;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';

// The second page will be displayed after selecting an article.
// It will show the title, the content, the date and the name of the author.
const ArticleScreen = props => {
  return (
    <Card>
      <View style={styles.screen}>
        <Text style={styles.title}>{props.navigation.getParam('title')}</Text>
        <Text style={styles.content}>
          {props.navigation.getParam('content')}
        </Text>
        <Text>{props.navigation.getParam('author')}</Text>
        <Text style={styles.date}>{props.navigation.getParam('date')}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    marginTop: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  },
  content: {
    marginBottom: 5
  },
  date: {
    textAlign: 'right',
    color: 'grey'
  }
});
export default ArticleScreen;

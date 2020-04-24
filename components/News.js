import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const News = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const Item = ({ title, date, thumbnail }) => {
    return (
      <TouchableOpacity
        style={styles.screen}
        onPress={() => {
          props['props'].navigation.navigate({ routeName: 'Article' });
        }}
      >
        <View style={styles.articleWrapper}>
          <Image style={styles.thumbnail} source={{ uri: thumbnail }} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>
              {title}
            </Text>
            <View>
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const API_URL =
    'https://newsapi.org/v2/top-headlines?category=Entertainment&apiKey=';
  const API_KEY = '87ec908411c64892a4c17ad677fb8684';

  useEffect(() => {
    fetch(API_URL + API_KEY)
      .then(response => response.json())
      .then(json => setData(json.articles))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            // <TouchableOpacity
            // onPress={() => {
            //   props['props'].navigation.navigate({ routeName: 'Article' });
            // }}
            // >
            <Item
              title={item.title}
              date={format(new Date(item.publishedAt), `do MMM yyyy - HH:mm`)}
              thumbnail={item.urlToImage}
              prop={props}
            />
            // </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 40,
    marginTop: 5
  },
  thumbnail: {
    padding: 40,
    width: 40,
    height: 40
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    textAlign: 'right',
    color: 'grey'
  },
  articleWrapper: { flexDirection: 'row' },
  titleWrapper: { flex: 1, paddingLeft: 2 }
});
export default News;

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

export default News = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const Item = ({ title, date, thumbnail }) => {
    return (
      <TouchableOpacity style={styles.screen}>
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

  const openArticle = direction => {
    if (direction === 'lower') {
      Alert.alert(item.title);
    }
  };

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
            <Item
              title={item.title}
              date={format(new Date(item.publishedAt), `do MMM yyyy - HH:mm`)}
              thumbnail={item.urlToImage}
            />
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

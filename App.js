import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, View, Image, Button } from "react-native";

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItem: {
    padding: 5,
    marginVertical: 10,
  },
  thumbnail: {
    flex: 1,
    padding: 40,
    width: 40,
    height: 40,
  },
  title: {
    fontWeight: "bold",
  },
  text: {
    flex: 1,
  },
});

export default App = () => {
  const [data, setData] = useState([]);
  const API_URL =
    "https://newsapi.org/v2/top-headlines?category=Entertainment&apiKey=";
  const API_KEY = "a984065f40434476bbdf54c45eebba7c";

  useEffect(() => {
    fetch(API_URL + API_KEY)
      .then((response) => response.json())
      .then((json) => setData(json.articles));
  });

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <View style={styles.listItem}>
              <Image
                style={styles.thumbnail}
                source={{
                  uri: item.urlToImage,
                }}
              />
            </View>

            <View style={styles.text}>
              <Text style={styles.title}> {item.title} </Text>
              <Text> {"Date: " + item.publishedAt}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

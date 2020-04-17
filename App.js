import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
  },
  listItem: {
    padding: 10,
    backgroundColor: "#add8e6",
    marginVertical: 10,
  },
  thumbnail: {
    padding: 50,
    width: 40,
    height: 40,
  },
});

export default App = () => {
  const [data, setData] = useState([]);
  const API_URL =
    "https://newsapi.org/v2/top-headlines?category=Entertainment&apiKey=";
  const API_KEY = "a984065f40434476bbdf54c45eebba7c";

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    );
  }

  function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push("Details")}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

  const Stack = createStackNavigator();

  useEffect(() => {
    fetch(API_URL + API_KEY)
      .then((response) => response.json())
      .then((json) => setData(json.articles));
  });

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
      <View style={styles.screen}>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.screen}>
              <View style={styles.inputContainer}>
                <Image
                  style={styles.thumbnail}
                  source={{
                    uri: item.urlToImage,
                  }}
                />
              </View>
              <View style={styles.listItem}>
                <Text> {"Title: " + item.title} </Text>
                <Text> {"Data: " + item.publishedAt}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </NavigationContainer>
  );
};

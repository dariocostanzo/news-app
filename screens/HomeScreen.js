import React, { Fragment } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Dimensions
} from 'react-native';

// The second page will be displayed after selecting an article.
// It will show the title, the content, the date and the name of the author.

const HomeScreen = props => {
  //   return <WebView source={PolicyHTML} style={{ marginTop: 20 }} />;
  return (
    <Fragment>
      <View style={styles.buttonsContainer}>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate({ routeName: 'Legal' });
          }}
        >
          <View style={styles.buttonDecline}>
            <Text style={styles.text}>View Document</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </Fragment>
  );
  //   <WebView source={require('../assets/demopage.html')} />;

  //return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderRadius: 25,
    marginVertical: 50
  },
  buttonDecline: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: Dimensions.get('window').width / 1.5
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default HomeScreen;

import React, { Fragment } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Dimensions
} from 'react-native';
import { WebView } from 'react-native-webview';

// The second page will be displayed after selecting an article.
// It will show the title, the content, the date and the name of the author.

const LegalScreen = props => {
  //   return <WebView source={PolicyHTML} style={{ marginTop: 20 }} />;
  return (
    <Fragment>
      <WebView
        source={{
          uri: 'https://dariocostanzo.github.io/demopage.html'
        }}
        style={styles.webview}
      />
      <View style={styles.buttonsContainer}>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate({ routeName: 'Home' });
          }}
        >
          <View style={styles.buttonDecline}>
            <Text style={styles.text}>Decline</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate({ routeName: 'News' });
          }}
        >
          <View style={styles.buttonAccept}>
            <Text style={styles.text}>Accept</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </Fragment>
  );
  //   <WebView source={require('../assets/demopage.html')} />;

  //return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
};

const styles = StyleSheet.create({
  webview: {
    marginTop: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden',
    paddingHorizontal: 20,
    padding: 20
  },
  buttonDecline: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: Dimensions.get('window').width / 3.5
  },
  buttonAccept: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: Dimensions.get('window').width / 3.5
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default LegalScreen;

import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => {
  //The spread operator pulls all the key:value pairs of the object, out of that object
  //and adds it to a new surrounding object, we copy all the styles card
  //I add another set of key:values pair where I take all the styles defined in props.style
  //and merge them into this object, and since I do "...props.style" this will override any
  //key:value set up in ...styles.card, and when we add additional styles outside of the component
  //it will also merge them in and consider it.
  //With that we can also assign our own styles for from outside of the card component when we use the card
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5, //elevation only works android instead of shadow
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10
  }
});

export default Card;

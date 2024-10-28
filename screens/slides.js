import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const slides = [
  'Slide 1',
  'Slide 2',
  'Slide 3',
  'Slide 4',
  'Slide 5',
];

const Slides = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{slides[index]}</Text>
      {index < slides.length - 1 && (
        <Button title="Next" onPress={() => setIndex(index + 1)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Slides;

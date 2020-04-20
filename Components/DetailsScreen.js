import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function DetailScreen(props) {
  async function fetchWeatherWith(url) {
    const jsonData = await fetch(url);
    const data = await jsonData.json();
    return data;
  }

  const getWeatherData = async capital => {
    const URL =
      'http://api.weatherstack.com/current?access_key=adbddd35e7e0facf7c5777c12eba7c64&query=' +
      capital;
    const weahter = await fetchWeatherWith(URL);
  };

  return (
    <View style={styles.container}>
      <Text>I'm MyComponent</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

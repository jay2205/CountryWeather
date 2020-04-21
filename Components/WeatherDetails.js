import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import _ from 'lodash';

const WeatherDetails = ({details}) => {
  const {current} = details;
  return (
    <View style={styles.container}>
      <Text style={styles.subheading}> WeatherDetails </Text>
      {_.isEmpty(current.weather_icons)
        ? null
        : current.weather_icons.map((icon, index) => (
            <Image source={{uri: icon}} style={styles.image} key={index} />
          ))}
      <Text style={styles.info}>
        Temparature : {details.current.temperature}° Celcius
      </Text>
      <Text style={styles.info}>
        Cloud Cover : {details.current.cloudcover}
      </Text>
      <Text style={styles.info}>
        Condition :
        {details.current.weather_descriptions.map((description, index) => (
          <Text style={styles.info} key={index}>
            {description}
          </Text>
        ))}
      </Text>
      <Text style={styles.info}>Wind spedd : {details.current.wind_speed}</Text>
      <Text style={styles.info}>
        Wind Direction : {details.current.wind_dir}
      </Text>
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600',
  },
  info: {
    fontWeight: '400',
    fontSize: 18,
    paddingStart: 10,
    paddingTop: 2,
  },
  image: {
    justifyContent: 'center',
    height: 60,
    width: 60,
    margin: 10,
  },
});

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import _ from 'lodash';
import CountryDtails from './CountryDetails';
import WeatherDetails from './WeatherDetails';

export default function DetailsScreen(props) {
  const [weatherDetails, setWeatherDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const country = props.route.params;

  async function fetchWeatherWith(url) {
    const jsonData = await fetch(url);
    const data = await jsonData.json();
    return data;
  }

  useEffect(() => {
    const capital = country.capital;
    const URL =
      'http://api.weatherstack.com/current?access_key=adbddd35e7e0facf7c5777c12eba7c64&query=' +
      capital;
    if (_.isEmpty(weatherDetails)) {
      setLoading(true);
      fetchWeatherWith(URL).then(data => {
        setWeatherDetails(data);
        setLoading(false);
      });
      console.log(weatherDetails);
    }
  }, [country.capital, props.route.params.capital, setLoading, weatherDetails]);

  return (
    <View style={styles.container}>
      <CountryDtails country={country} />
      <View style={styles.content}>
        {!_.isEmpty(weatherDetails) ? (
          <WeatherDetails details={weatherDetails} />
        ) : loading ? (
          <Text>Loading data</Text>
        ) : (
          <Text>No data found</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
});

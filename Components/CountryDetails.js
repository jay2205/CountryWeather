/* @flow weak */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CountryDtails = ({country}) => (
  <View style={styles.container}>
    <Text style={styles.heading}>{country.name}</Text>
    <Text style={styles.info}>Capital: {country.capital}</Text>
    <Text style={styles.info}>Population: {country.population}</Text>
    <Text style={styles.info}>Region: {country.region}</Text>
    <Text style={styles.info}>Subregion: {country.subregion}</Text>
  </View>
);

export default CountryDtails;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  info: {
    fontWeight: '400',
    fontSize: 18,
    paddingStart: 10,
    paddingTop: 2,
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    padding: 10,
  },
});

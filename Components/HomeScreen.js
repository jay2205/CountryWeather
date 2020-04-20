/* @flow */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CountriesList from './CountriesList';

export default function HomeScreen({navigation}) {
  const [inputValue, setInputValue] = useState('');
  const [countriesList, setCountriesList] = useState('');

  const onChangeInputText = text => {
    setInputValue(text);
  };
  const onButtonPressHandler = async () => {
    const URL = 'https://restcountries.eu/rest/v2/name/' + inputValue;
    const list = await fetchCountriesWith(URL);
    setCountriesList(list);
  };

  const onPressItem = item => {
    navigation.navigate('Details', item);
  };

  async function fetchCountriesWith(url) {
    const jsonData = await fetch(url);
    const data = await jsonData.json();
    return data;
  }

  return (
    <View style={{margin: 10, flex: 1}}>
      <Text style={styles.sectionTitle}>Countries & Weather </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeInputText}
        value={inputValue}
        placeholder={'Enter Country'}
      />
      <Button
        sytle={styles.button}
        onPress={onButtonPressHandler}
        title="Submit"
        disabled={inputValue === ''}
      />
      <CountriesList
        list={countriesList}
        onPressItem={item => onPressItem(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    borderColor: Colors.black,
    borderWidth: 0.5,
    margin: 10,
  },
  button: {
    margin: 10,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.black,
    padding: 10,
    marginTop: 30,
    textAlign: 'center',
  },
});

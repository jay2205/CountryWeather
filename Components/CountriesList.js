import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Item = props => {
  const {name, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={{marginTop: 30}}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default function CountriesList(props) {
  const {list} = props;

  function renderCounriesList() {
    return (
      <FlatList
        data={list}
        renderItem={({item}) => (
          <Item name={item.name} onPress={props.onPressItem(item)} />
        )}
        keyExtractor={item => item.numericCode}
        extraData={props}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {list.length > 0 ? (
        renderCounriesList()
      ) : (
        <Text>No countries found </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const Item = props => {
  const {name, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Text styles={styles.info}>{name}</Text>
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
          <Item name={item.name} onPress={() => props.onPressItem(item)} />
        )}
        keyExtractor={item => item.numericCode}
        extraData={props}
      />
    );
  }

  return (
    <View style={styles.container}>
      {list.length > 0 ? (
        renderCounriesList()
      ) : (
        <Text>No countries found </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    marginTop: 30,
  },
  info: {
    fontSize: 30,
    fontWeight: '600',
    padding: 10,
  },
});

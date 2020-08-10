import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Character from '../components/Character';

const API = 'https://rickandmortyapi.com/api/character/';
const HomeScreen = () => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((val) => setList(val.results));
  }, []);
  const renderRow = ({item}) => <Character char={item} />;
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.title}>Rick and Morty Character List</Text>
        <Text style={styles.total}>Total: {list.length} </Text>
      </View>
      <FlatList
        data={list}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={styles.list}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#817F7D',
    borderRadius: 5,
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});

export default HomeScreen;

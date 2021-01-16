import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  ActivityIndicator,
  TextInput,
 } from 'react-native';
 import filter from 'lodash.filter';

 const API_ENDPOINT = `https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/master/breweries.json`;

export default function App() {
  // set state
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

// fetch data from API
  useEffect(() => {
    setIsLoading(true);

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(results => {
        setData(results);
        setFullData(results);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18}}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  // Helper Functions
  function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoFocus={true}
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="City Name"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = fullData.filter(brewery => brewery.city.toLowerCase().startsWith(formattedQuery)
    )
    console.log(filteredData);
    setData(filteredData);
    setQuery(text);
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Breweries</Text>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={data}
        keyExtractor={item => item.first}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.metaInfo}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.title}>{item.city}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700'
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%'
  },
  listItemText: {
    fontSize: 18
  }
});

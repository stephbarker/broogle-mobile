import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  ActivityIndicator,
  Image
 } from 'react-native';

 const API_ENDPOINT = `https://api.openbrewerydb.org/breweries?by_city=san_diego`;

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(results => {
        setData(results);
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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Breweries</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.first}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.metaInfo}>
              <Text style={styles.title}>{item.name}</Text>
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

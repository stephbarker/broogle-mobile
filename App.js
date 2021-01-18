import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator,
 } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';


import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';

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

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = fullData.filter(brewery => brewery.city.toLowerCase().startsWith(formattedQuery)
    )
    console.log(filteredData);
    setData(filteredData);
    setQuery(text);
  };
  

  return (
    <NativeRouter>
    <View  style={styles.home}>
      <Switch>
        <Route exact path ="/" render={(props) =>
          <HomeScreen query={query} handleSearch={handleSearch} /> 
        }/>
        <Route exact path="/results" render={(props) =>
          <ResultScreen data={data} />
        }/>
      </Switch>
    </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

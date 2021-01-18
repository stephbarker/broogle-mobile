import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'react-router-native';

function ResultScreen (props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Breweries</Text>
        <FlatList
        data={props.data}
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
      <Link to="/">
          <Text>Back</Text>
      </Link>
      </SafeAreaView>
    )
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

export default ResultScreen;


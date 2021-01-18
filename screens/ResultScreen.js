import { SafeAreaView, View, Text, FlatList, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'react-router-native';

function ResultScreen (props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Breweries</Text>
        <FlatList
        style={styles.list}
        data={props.data}
        keyExtractor={item => item.first}
        renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={1} backgroundColor="FFF" onPress={() => Linking.openURL(item.website_url)}>
          <View style={styles.listItem}>
            <View style={styles.listItemText}>
              <Text style={styles.listItemTitle}>{item.name}</Text>
              <Text style={styles.listItemText}>{item.city}, {item.state}</Text>
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.footer}>
      <Link to="/" underlayColor="transparent">
          <Text style={styles.back}>Back</Text> 
      </Link>
      
      </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      marginTop: -30,
    },
    list: {
        marginTop: 20

    },
    text: {
      fontSize: 30,
      color: '#101010',
      marginTop: 60,
      fontWeight: '700'
    },
    listItem: {
      marginTop: 10,
      marginBottom: 15,
      padding: 18,
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
      width: '100%',
      borderColor: 'gold',
      borderWidth: 3,
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
	   width: 0,
	   height: 2,
      },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     elevation: 5,
    },
    listItemTitle: {
      fontSize: 18,
      alignItems: 'center'
    },
    listItemText: {
      fontSize: 14,
      alignItems: 'center',
      marginTop: 4,
      padding: 2
    },
    back: {
        fontSize: 20,
        alignItems: 'center',
    },
  });

export default ResultScreen;


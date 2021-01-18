import React from 'react';
import { View, TextInput, SafeAreaView, Text, StyleSheet, Image, LogBox } from 'react-native';
import { Link } from 'react-router-native'

function HomeScreen (props) {
    return (
        <SafeAreaView 
        style={styles.container}
    >
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.tagline}>The Search for Local Breweries</Text>
        </View>
      <TextInput
        autoCapitalize="none"
        autoFocus={true}
        autoCorrect={false}
        clearButtonMode="always"
        value={props.query}
        onChangeText={queryText => props.handleSearch(queryText)}
        placeholder="City Name"
        style={styles.input}
      />
      <View style={styles.link}>
      <Link to="/results">
          <Text>Cheers!</Text>
      </Link>
      </View>
      
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 100,
        borderRadius: 20
      },
    link: {
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'azure', 
        paddingHorizontal: 20

    },
    logoContainer: {
        marginVertical: 125,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 125,
        width: 340,
    }

})

export default HomeScreen;
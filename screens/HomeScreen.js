import React from 'react';
import { View, TextInput, SafeAreaView, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'react-router-native'

function HomeScreen (props) {
    return (
        <SafeAreaView 
        style={styles.container}
    >
       <ScrollView>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.tagline}>The Search for Local Breweries</Text>
        </View>
        <View style={styles.search}>
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
      <Link to="/results" underlayColor="grey">
          <Text style={styles.cheers}>Cheers!</Text>
      </Link>
      </View>
      </View>
      </ScrollView> 
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
      },
    link: {
        justifyContent: 'center',
        margin: 25,
        backgroundColor: 'gainsboro',
        padding: 5
    },
    cheers: {
        fontSize: 15,
        color: 'black'

    },
    input: {
        backgroundColor: 'azure', 
        paddingHorizontal: 20,
        width: 320,
        height: 25,
        borderRadius: 20

    },
    logoContainer: {
        marginVertical: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 125,
        width: 340,
    },
    search: {
        marginVertical: -120,
        alignItems: 'center',
    }

})

export default HomeScreen;
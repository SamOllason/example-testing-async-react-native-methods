/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(){
    super();

    this.state = {
      person1: '...'
    };

    this.updateFirstPerson = this.updateFirstPerson.bind(this);
  }

  updateFirstPerson = async ()  => {

    const person1  = await this.getPersonData();

    this.setState({
      person1: person1
    });
  };

  getPersonData = async ()  => {
    try {
      const response = await fetch(
          'https://www.swapi.co/api/people/'
      );

      const result = await response.json();

      const person1 = result.results[0].name;

      return person1;

    } catch(err){
      console.log(`Error: ${err}`);
      return err;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Star Wars Edition!</Text>
        <Text style={styles.instructions}>To get started, grab your lightsaber and edit App.js</Text>
        <Text style={styles.person}>First Person: {this.state.person1}</Text>

        <Button
            onPress={this.updateFirstPerson}
            title="Get first person in database"
            accessibilityLabel="Click here to set first person"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  person: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20 ,
  },
});


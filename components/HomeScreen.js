import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Avatar} from 'react-native-paper';
import {StackActions} from '@react-navigation/native';

import {AuthContext} from '../context/AuthContext';

const HomeScreen = ({navigation}) => {
  const {loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn === false) {
      navigation.dispatch(StackActions.replace('Sign In'));
    }
  }, [loggedIn]);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.textContainer]}>What will you learn to day</Text>
      <Button
        title={'Analytics'}
        onPress={() => navigation.navigate('Analytics')}
      />
      <Button
        title={'Chat'}
        onPress={() => navigation.navigate('Chat')}
      />
      <Button
        title={'Wiki'}
        onPress={() => navigation.navigate('Wiki')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

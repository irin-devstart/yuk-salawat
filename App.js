import React from 'react';
import Main from './app/components/Main';
import { Font } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'font-text': require('./assets/fonts/font_sand.ttf'),
      'font-count': require('./assets/fonts/Quicksand-Medium.ttf'),
      'font-arabic': require('./assets/fonts/Amiri-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    
    if (!this.state.fontLoaded) return null;
    return (
      <Main /> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

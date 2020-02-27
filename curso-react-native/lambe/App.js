import React, {Component} from 'react';
import {View, Text} from 'react-native';
 
import Header from './src/components/Header';
import Post from './src/components/Post';

export default class App extends Component {
  render() {
    const comments = [
      {
        nickname: 'Patricia Oliveira',
        comment: 'Que linda foto',
      },
      {
        nickname: 'Marcos Aurelio',
        comment: 'Obrigado, amor!!!',
      },
    ];
    return (
      <View style={{flex: 1}}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
      </View>
    );
  }
}

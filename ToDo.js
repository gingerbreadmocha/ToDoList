import React, { Component } from 'react';
import { Text, TextInput, View, Button, FlatList, Keyboard, StyleSheet, Image } from 'react-native';

export default class ToDo extends Component{
  constructor(props){
    console.log('RAWR');
    super(props);
    this.state = {text:'', toDos: []};
    this.addItem = this.addItem.bind(this);
    this.poopItem = this.poopItem.bind(this);
  }

  addItem(){
    console.log('adding item');
    let currentToDos = this.state.toDos.slice(0);
    currentToDos.push(this.state.text);
    this.setState({toDos: currentToDos});
    this.textInput.clear();
    Keyboard.dismiss();
  }

  poopItem(){
    console.log('POOP U');
  }

  _renderItem = ({item}) => (
    <Text
    >{item}</Text>
  );

  render(){
    return(
      <View style={styles.everything}>
        <Text style={styles.title}>To do: </Text>
        <TextInput style={[styles.toDoBox, styles.fullWidth]}
        placeholder="USAGI U PUNK!!!!!" 
        underlineColorAndroid='transparent'
        ref={input => { this.textInput = input }} 
        onChangeText={(text) => {
          console.log('asdfdsasdf', text, this);
          this.setState({text: text})}}
        value={this.state.text}/>
        <Button title="Add item" onPress={_=>this.poopItem()}/>
        <FlatList 
          data={this.state.toDos}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <Image source={require('./piske.png')} />
      </View>
    );
  }
}

 const styles = StyleSheet.create({
  toDoBox:{
    height: 50, 
    borderColor: '#CD5C5C',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#FFA07A'
  },
  title:{
    fontSize:14,
    marginTop:30,
    width:100
  },
  everything:{
/*     flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', */
    backgroundColor:'#FAEBD7',
    flex:3
  },
  fullWidth:{
/*     flexDirection: 'row' */
      flex: 1
  }
}); 
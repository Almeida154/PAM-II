import React, { Component, useState } from 'react';

import{
  View,
  Text,
  image,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Button,
} from 'react-native';

import MyStyle from './css/style.js';

export default class Main extends Component{

  constructor(props){
    super(props)
    this.state = {
      p1: '',
      p2: '',
      p3: '',
      res: '',
    }
  }

  onPress = () =>{

    if(this.state.p1 == '' 
      || this.state.p2 == '' 
      || this.state.p3 == ''){
        this.setState({res: 'Preencha todos os campos'})
        return
      }

    var a = parseFloat(this.state.p1)
    var b = parseFloat(this.state.p2)
    var c = parseFloat(this.state.p3)

    {/*
    
      p1 = Maior
      p2 = Meio termo
      p3 = Menor

    */}

    var p1 = Math.max(a, Math.max(b, c))
    var p2 = 0;
    var p3 = 0;

    if(p1 == a){
      p2 = Math.max(b, c)
      p3 = Math.min(b, c)
    } else if(p1 == b){
      p2 = Math.max(a, c)
      p3 = Math.min(a, c)
    } else if(p1 == c){
      p2 = Math.max(b, a)
      p3 = Math.min(b, a)
    }

    if(p1 >= p2 + p3){
      this.setState({res: 'Não forma triângulo'})
      return
    }

    if(a == b && b == c){
      this.setState({res: 'Triângulo Equilatero'})
      return
    }
    
    if(p1 != p2 && p2 != p3 && p1 != p3) {
      this.setState({res: 'Triângulo Escaleno'})
      return
    }

    if(p1 == p2 && p2 != p3 
      || p1 ==  p3 && p1 != p2 
      || p2 == p3 && p2 != p1) {
      this.setState({res: 'Triângulo Isósceles'})
      return
    }
  }

  render(){ 
    
    const MyButton = ({title}) => (
      <TouchableOpacity onPress={this.onPress} style={MyStyle.btn}>
        <Text style={MyStyle.text}>{title}</Text>
      </TouchableOpacity>
    )

    return(
    
      <ScrollView style={MyStyle.body}>

        <StatusBar backgroundColor = "#716A5C"/>

        {/* Header */}

        <View style={MyStyle.container}>
          <Text style={MyStyle.title}>Forma triângulo?</Text>

          {/* Radius Circle */}

          <View style={MyStyle.containerRadius}>
            <Image style={MyStyle.image} source={require('./images/math.png')}/>
          </View>
        </View>

        {/* Content */}

        <View style={MyStyle.containerContent}>
          <TextInput
            style={MyStyle.input}
            returnKeyType='next'
            placeholder='P1'
            keyboardType='numeric'
            onChangeText={(value) => this.setState({p1: value})}/>

          <TextInput
            style={MyStyle.input}
            returnKeyType='next'
            placeholder='P2'
            keyboardType='numeric'
            onChangeText={(value) => this.setState({p2: value})}/>

          <TextInput
            style={MyStyle.input}
            placeholder='P3'
            keyboardType='numeric'
            onChangeText={(value) => this.setState({p3: value})}/>

          <MyButton title='Calcular'></MyButton>
          <Text style={MyStyle.res}>{this.state.res}</Text>

        </View>

      </ScrollView>
    )
  }
}
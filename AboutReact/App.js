
import React, {Component} from 'react';
import MyStyle from './css/style.js'
import {
  View,
  Text, 
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';

export default class Main extends Component{

  render(){
    return(

      <ScrollView style={MyStyle.body}>
        <StatusBar backgroundColor = "#0D0C1D"/>

        {/* Header */}

        <View style={MyStyle.container}>
          <Text style={MyStyle.title}>REACT NATIVE</Text>

          {/* Radius Circle */}

          <View style={MyStyle.containerRadius}>
            <Image style={MyStyle.image} source={require('./images/reactIcon.png')}/>
          </View>
        </View>

        {/* Content */}

        <View style={MyStyle.containerContent}>
        
          {/* Strengths */}
        
          <Text style={MyStyle.subTitle}>Pontos Positivos</Text>
          <Text style={MyStyle.paragraph}>
            - Alto desempenho: o React Native é útil para aprimorar 
            o desempenho do aplicativo por meio de módulos e controle 
            nativo;
          </Text>
          <Text style={MyStyle.paragraph}>
            - Atualizações mais rápidas: ele agiliza o processo de 
            atualização de aplicativos. Isso reduz drasticamente o 
            tempo necessário para publicar atualizações;
          </Text>
          <Text style={MyStyle.paragraph}>
            - Alteração imediata: o recarregamento a quente do React
            permite que os desenvolvedores recebam um feedback imediato,
            tornando o processo mais rápido;
          </Text>
          <Text style={MyStyle.paragraph}>
            - Aprimorar app existente: os aplicativos existentes podem 
            ser aprimorados usando o React Native. Seus componentes de 
            IU podem ser inseridos em um aplicativo atual sem a 
            necessidade de reescrevê-lo.
          </Text>

          {/* Frailty */}

          <Text style={MyStyle.subTitle}>Pontos Negativos</Text>
          <Text style={MyStyle.paragraph}>
            - Ainda faltam componentes; 
          </Text>
          <Text style={MyStyle.paragraph}>
            - Está em BETA; 
          </Text>
          <Text style={MyStyle.paragraph}>
            - Ainda precisa de desenvolvedores nativos;
          </Text>

        </View>
      </ScrollView> 

    )
  }

}

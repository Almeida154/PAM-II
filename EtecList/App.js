import React, {useEffect, useState} from 'react'
import {
  View, Text, StatusBar, FlatList, StyleSheet, ActivityIndicator
} from 'react-native'

export default () => {

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(async () => {
    try {
      var req = await fetch('http://allanvidal.com/json-categoria.php')
      var res = await req.json()
      setData(res.categorias)
    } catch (error) { alert('Something was wrong!') }
    finally { setLoading(false) }
    
  }, [])

  return(
    <View style={style.containerMaster}>
      <StatusBar backgroundColor="#242038"/>
      <View style={style.containerHeader}>
        <Text style={style.title(30)}>Categorias</Text>
        <Text style={style.desc}>Consumindo o json: allanvidal.com/json-categoria.php</Text>
      </View>
        {
          isLoading &&
          <View style={style.containerList}>
            <ActivityIndicator size='large' color='#CAC4CE'/>
            <Text style={style.loading}>Loading</Text>
          </View>
        }
      <FlatList
        style={{paddingVertical: 15}}
        data={data}
        keyExtractor={item => item.idCategoria}
        renderItem={({item}) =>
          <View style={style.cell}>
            <Text style={style.title(20)}>
              {item.categoria.charAt(0).toUpperCase() + item.categoria.slice(1)}
            </Text>
            <Text style={style.cellDesc}>Id: {item.idCategoria}</Text>
          </View>
        }/>
    </View>
  )
}

const style = StyleSheet.create({
  containerMaster: {
    backgroundColor: '#242038',
    width: '100%',
    height: '100%',
    padding: 20
  },
  containerHeader: {
    backgroundColor: '#4B3D7D',
    width: '100%',
    height: 150,
    padding: 20,
    borderRadius: 20,
    elevation: 15,
    justifyContent: 'center'
  },
  title: (size) => ({
    fontSize: size,
    color: '#242038',
    fontFamily: 'Poppins-Bold'
  }),
  desc: {
    fontSize: 14,
    marginTop: -10,
    color: '#242038',
    fontFamily: 'Poppins-Regular'
  },
  loading: {
    color: '#8D86C9',
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginTop: 20
  },
  containerList: {
    alignSelf: 'center',
    height: '100%',
    justifyContent: 'center',
    marginTop: -100
  },
  cell: {
    backgroundColor: '#8D86C9',
    width: '100%',
    height: 80,
    padding: 10,
    borderRadius: 10,
    elevation: 15,
    marginVertical: 5,
    justifyContent: 'center'
  },
  cellDesc: {
    fontSize: 18,
    marginTop: -5,
    color: '#4B3D7D',
    fontFamily: 'Poppins-Regular'
  }
})
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

export default ({navigation}) => {

    const [users, setUsers] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(async () => {
        let req = await fetch('https://jsonplaceholder.typicode.com/users')
        let res = await req.json()
        setUsers(res)
        setLoading(false)
    }, [])

    return(
        <View style={{backgroundColor: '#F6F6F6', height: '100%', width: '100%'}}>
            <View style={{backgroundColor: '#FFF', height: 100, width: '100%', elevation: 16, justifyContent: 'center'}}>
                <Text style={{fontSize: 26, fontFamily: 'Poppins-Bold', paddingLeft: 20}}>Your contacts</Text>
            </View>

            { isLoading &&
                <View style={{alignSelf: 'center', height: '100%', justifyContent: 'center', marginTop: -100}}>
                    <ActivityIndicator size='large' color='#E8871E'/>
                    <Text style={{color: '#343234', fontSize: 22, fontFamily: 'Poppins-Bold', marginTop: 20}}>
                        Loading
                    </Text>
                </View>
            }

            <FlatList style={{paddingVertical: 5}}
                data={users}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                    <View style={{backgroundColor: '#FFF', height: 100, width: '95%',
                        alignSelf: 'center', elevation: 6, marginVertical: 5,
                        borderRadius: 8, padding: 12, flexDirection: 'row', flex: 1}}>

                        <View style={{width: '18%', justifyContent: 'center'}}>
                            <View style={{backgroundColor: '#E8871E', height: '80%', width: 60, borderRadius: 100, justifyContent: 'center'}}>
                                <Text style={{alignSelf: 'center', fontSize: 20, color: '#f7f7f7',
                                fontFamily: 'Poppins-Bold'}}>
                                {item.name.charAt(0)}
                                </Text>
                            </View>
                        </View>

                        <View style={{width: '70%', paddingHorizontal: 10}}>
                            <Text style={{fontSize: 18, fontFamily: 'Poppins-Bold', marginBottom: -10}}>{item.name}</Text>
                            <Text style={{fontSize: 16, fontFamily: 'Poppins-Regular', marginBottom: -10}}>Id: {item.id}</Text>
                            <Text style={{fontSize: 16, fontFamily: 'Poppins-Regular', marginBottom: -10}}>User: {item.username}</Text>
                            <Text style={{fontSize: 16, fontFamily: 'Poppins-Regular', marginBottom: -10}}>City: {item.address.city}</Text>
                        </View>

                        <TouchableOpacity
                            style={{width: '13%', justifyContent: 'center'}}
                            onPress={() => navigation.navigate('View', {key: item.id})}>
                            <Text style={{alignSelf: 'center', fontSize: 35, fontFamily: 'Poppins-Thin', color: '#ADADAD'}}>{'>'}</Text>
                        </TouchableOpacity>

                    </View>
                }
            />
        </View>
    )
}
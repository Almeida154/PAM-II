import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

export default ({route, navigation}) => {

    const [user, setUser] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(async () => {
        let req = await fetch(`https://jsonplaceholder.typicode.com/users/${route.params.key}`)
        let res = await req.json()
        setUser(res)
        setLoading(false)
    }, [])

    const MyText = (props) => {
        return(
            <View style={{flexDirection: 'row'}}>
                <Text style={{flexWrap: 'wrap', flexWrap: 'wrap', flexShrink: 1}}>
                    <Text style={{marginBottom: -5, fontSize: 16, fontFamily: 'Poppins-Bold'}}>{props.label}: </Text>
                    <Text style={{marginBottom: -5, fontSize: 16, fontFamily: 'Poppins-Regular'}}>{props.data}</Text>
                </Text>
            </View>
        )
    }

    return(
        <View style={{backgroundColor: '#F6F6F6', height: '100%', width: '100%', alignItems: 'center'}}>

            <View style={{backgroundColor: '#fff', width: '100%', height: 250, elevation: 16, padding: 15}}>
                <View style={{flexDirection: 'row'}}>
                    <Text
                        style={{fontSize: 30, fontFamily: 'Poppins-Thin', color: '#343234'}}
                        onPress={() => navigation.navigate('Home')}>
                        {'<'}
                    </Text>
                    <Text style={{fontSize: 20, fontFamily: 'Poppins-Bold', marginTop: 5, marginLeft: 20}}>Details</Text>
                </View>
                <MyText label='Id' data={user.id}/>
                <MyText label='Name' data={user.name}/>
                <MyText label='Username' data={user.username}/>
                <MyText label='Email' data={user.email}/>
                <MyText label='Phone' data={user.phone}/>
                <MyText label='Website' data={user.website}/>
            </View>

            { isLoading &&
                <View style={{alignSelf: 'center', height: '100%', justifyContent: 'center', marginTop: -100}}>
                    <ActivityIndicator size='large' color='#E8871E'/>
                    <Text style={{color: '#343234', fontSize: 22, fontFamily: 'Poppins-Bold', marginTop: 20}}>
                        Loading
                    </Text>
                </View>
            }

            <View style={{backgroundColor: '#fff', marginTop: 25, borderRadius: 20,
                width: '90%', height: 170, elevation: 16, padding: 15}}>
                <Text style={{fontSize: 20, fontFamily: 'Poppins-Bold', color: '#E8871E'}}>Address</Text>
                <MyText label='Street' data={user.address?.street}/>
                <MyText label='Suite' data={user.address?.suite}/>
                <MyText label='City' data={user.address?.city}/>
                <MyText label='Zip-Code' data={user.address?.zipcode}/>
            </View>

            <View style={{backgroundColor: '#fff', marginTop: 20, borderRadius: 25,
                width: '90%', height: 170, elevation: 16, padding: 15}}>
                <Text style={{fontSize: 20, fontFamily: 'Poppins-Bold', color: '#E8871E'}}>Company</Text>
                <MyText label='Name' data={user.company?.name}/>
                <MyText label='Catch Phrase' data={`"${user.company?.catchPhrase}"`}/>
                <MyText label='Bs' data={user.company?.bs}/>
            </View>

        </View>
    )
}
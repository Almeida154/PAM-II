import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react'
import Style from '../assets/css/detail'

import {
    View, Text, SafeAreaView, StatusBar, ActivityIndicator, FlatList
} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

export default ({route, navigation}) => {

    const [isLoading, setLoading] = useState(true)
    const [technicality, setTechnicality] = useState([])
    const [categories, setCategories] = useState([])

    async function getTechnicality(url) {
        try {
            let req = await fetch(url)
            let res = await req.json()
            setTechnicality(res)
            setCategories(res.categories)
            console.log(res)
        }
        catch (error) { console.log(error) }
        finally {setLoading(false)}
    }

    useEffect(() => {
        getTechnicality(`http://192.168.0.17:8000/api/technicality/${route.params.id}`)
    }, [])

    return(
        <View style={Style.container}>
            <StatusBar backgroundColor='#FF9633'/>
            {isLoading &&
                <View style={Style.loadingContainer}>
                    <ActivityIndicator size='large' color='#B85900'/>
                    <Text style={Style.loadingText}>Loading</Text>
                </View>
            }
            <View style={{flexDirection: 'row'}}>
                <Text
                    style={Style.back}
                    onPress={() => navigation.navigate('Dashboard')}>
                    {'<'}
                </Text>
                <Text style={Style.title}>{technicality.technicality}</Text>
            </View>
            <Text style={Style.desc}>{technicality.description}</Text>
            <Text style={Style.tagsText}>Tags:</Text>
            {categories.map(categ => (
                <View style={Style.categoryContainer}>
                    <FontAwesomeIcon icon={faHandPointRight} color='#B85900' size={25} />
                    <Text style={Style.categoryText}>{categ}</Text>
                </View>
            ))}
        </View>
    )
}
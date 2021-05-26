import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import Style from '../assets/css/dashboard'

import {
    View, Text, FlatList, StatusBar, ActivityIndicator, SafeAreaView, TouchableOpacity
} from 'react-native'

import { Searchbar } from 'react-native-paper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

export default ({navigation}) => {

    const [isLoading, setLoading] = useState(true)
    const [technicalities, setTechnicalities] = useState([])
    
    async function getTechnicalities(url) {
        try {
            let req = await fetch(url)
            let res = await req.json()
            setTechnicalities(res)
            console.log(typeof technicalities)
        } 
        catch (error) { console.log(error) }
        finally { setLoading(false) }
    }

    useEffect(() => {
        getTechnicalities('http://192.168.0.17:8000/api/technicalities')
    }, [])

    return(
        <SafeAreaView style={Style.container}>
            <StatusBar backgroundColor='#054A91' />
            <View style={Style.header}>
                <Text style={Style.title}>ServeX</Text>
                <Searchbar 
                    style={Style.search}
                    theme={{colors: {text: "#f6f6f6", primary: "#FFA957", placeholder: "#12253F"}}}
                    iconColor='#FFA046'
                    placeholder='Search'
                    clearIcon={() => (
                        <FontAwesomeIcon icon={ faTimes } color='#fff' />
                    )} />
            </View>

            <View style={Style.cardsContainer}>
                {isLoading && 
                    <View style={Style.containerLoader}>
                        <ActivityIndicator size='large' color='#E8871E'/>
                        <Text style={Style.loadingText}>Loading</Text>
                    </View>
                }
                <FlatList 
                    style={Style.flatList}
                    data={technicalities}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => 
                        <TouchableOpacity 
                            activeOpacity={.8}
                            style={Style.card}
                            onPress={() => navigation.navigate('Detail', {id: item.id})}>    
                            <Text numberOfLines={1} style={Style.titleCard}>{item.technicality}</Text>
                            <Text numberOfLines={2} style={Style.descriptionCard}>{item.description}</Text>
                            <View style={Style.tagsContainer}>
                                <FontAwesomeIcon icon={faHandPointRight} color='#254A7E' size={20}/>
                                <Text numberOfLines={1} style={Style.tagsCard}>
                                    {item.categories.map((categ, index, array) => index === array.length -1 ? categ : `${categ}, `)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }
                    ListHeaderComponent={() => <Text style={Style.headerCards}>Technicalities</Text>}
                    ListFooterComponent={() => <Text style={Style.footerCards}>by mtec blinders</Text>}/>
            </View>
        </SafeAreaView>
    )
}
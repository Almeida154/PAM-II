import 'react-native-gesture-handler'
import React, { useState, useEffect, useRef } from 'react'

// Components

import {
    View, Text, FlatList, StatusBar, ActivityIndicator, SafeAreaView, TouchableOpacity
} from 'react-native'

import { Searchbar } from 'react-native-paper'
import { FAB } from 'react-native-paper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Picker } from '@react-native-picker/picker'

// Icons

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

import Style from '../assets/css/dashboard'
import NotFound from '../assets/svg/notfound.svg'

export default ({ navigation }) => {

    // Variables

    const [isLoading, setLoading] = useState(true)
    const [technicalitiesActual, setTechnicalitiesActual] = useState([])
    const [technicalitiesTags, setTechnicalitiesTags] = useState([])

    const [categories, setCategories] = useState([])
    const [selectedItem, setSelectedItem] = useState(0)

    const [search, setSearch] = useState('')

    // Functions - get all technicalities from our Laravel's API

    async function getTechnicalities(url) {
        try {
            let req = await fetch(url)
            let res = await req.json()

            setTechnicalitiesTags(res)
            setTechnicalitiesActual(res)
            SearchByTerms(res)
        }
        catch (error) { console.log(error) }
        finally { setLoading(false) }
    }

    // Functions - get all categories from our Laravel's API

    async function getCategories(url) {
        try {
            let req = await fetch(url)
            let res = await req.json()

            setCategories(res)
        }
        catch (error) { console.log(error) }
        finally { setLoading(false) }
    }

    // Functions - Search routine

    const SearchByTerms = total => {
        let buscados = []

        if (search == '') {
            buscados = total
        } else {
            total.map((item) => {
                if (item.technicality.toUpperCase().indexOf(search.toUpperCase()) !== -1) {
                    buscados.push(item)
                } else if (item.description.toUpperCase().indexOf(search.toUpperCase()) !== -1) {
                    buscados.push(item)
                }
            })
        }
        setTechnicalitiesActual(buscados)
    }

    const onChangeSearch = text => {
        let buscados = []
        
        setSearch(text)
        if (text == '') {
            buscados = technicalitiesTags
        } else {
            technicalitiesTags.map((item) => {
                if (item.technicality.toUpperCase().indexOf(text.toUpperCase()) !== -1) {
                    buscados.push(item)
                } else if (item.description.toUpperCase().indexOf(text.toUpperCase()) !== -1) {
                    buscados.push(item)
                }
            })
        }
        setTechnicalitiesActual(buscados)
    }

    // Functions - Picker routine

    const onChangePicker = selItem => {
        setSelectedItem(selItem)
        setLoading(true)
        if (selItem === 0) {
            getTechnicalities('http://192.168.0.17:8000/api/technicalities')
        } else {
            const url = 'http://192.168.0.17:8000/api/technicalities/' + selItem
            getTags(url)
        }
    }

    async function getTags(url) {
        try {
            let req = await fetch(url)
            let res = await req.json()

            setTechnicalitiesTags(res)
            SearchByTerms(res)
            setLoading(false)
        }
        catch (error) { console.log(error) }
    }

    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    useEffect(() => {
        getTechnicalities('http://192.168.0.17:8000/api/technicalities')
        getCategories('http://192.168.0.17:8000/api/categories')
        setSelectedItem(0)
    }, [])

    return (
        <SafeAreaView style={Style.container}>
            <StatusBar backgroundColor='#054A91' />

            <View style={Style.header}>
                <Text style={Style.title}>ServeX</Text>
                <Searchbar
                    placeholderTextColor='gray'
                    style={Style.search}
                    theme={{ colors: { text: "#f6f6f6", primary: "#FFA957", placeholder: "#12253F" } }}
                    iconColor='#FFA046'
                    placeholder='Search'
                    onChangeText={onChangeSearch}
                    value={search}
                    clearIcon={() => (
                        <FontAwesomeIcon 
                            icon={faTimes}
                            color='#fff'
                            onPress={() => {
                                setSearch('')
                                onChangeSearch('')
                            }}/>
                    )} />

                <View style={Style.containerPicker}>
                    <Picker
                        style={{color: 'white'}}
                        ref={pickerRef}
                        selectedValue={selectedItem}
                        onValueChange={onChangePicker}>
                        
                        <Picker.Item style={{color: '#B85900'}} label='Filter by category' value={0} />

                        {categories.map(item => {
                            return <Picker.Item key={item.id} label={item.category} value={item.category} />
                        })}
                    </Picker>
                </View>
            </View>

            <View style={Style.cardsContainer}>
                {isLoading &&
                    <View style={Style.containerLoader}>
                        <ActivityIndicator size='large' color='#E8871E' />
                        <Text style={Style.loadingText}>Loading</Text>
                    </View>
                }
                {(technicalitiesActual.length == 0) &&
                    <NotFound style={Style.iconNotFound} width={150} height={150}/>  
                }
                <FlatList
                    data={technicalitiesActual}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            key={item.id}
                            activeOpacity={.8}
                            style={Style.card}
                            onPress={() => navigation.navigate('Detail', { id: item.id })}>
                            <Text numberOfLines={1} style={Style.titleCard}>{item.technicality}</Text>
                            <Text numberOfLines={2} style={Style.descriptionCard}>{item.description}</Text>
                            <View style={Style.tagsContainer}>
                                <FontAwesomeIcon icon={faHandPointRight} color='#254A7E' size={20} />
                                <Text numberOfLines={1} style={Style.tagsCard}>
                                    {item.categories.map((categ, index, array) =>
                                        index === array.length - 1 ? categ : `${categ}, `
                                    )}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }
                    ListHeaderComponent={() => technicalitiesActual.length > 0 ? <Text style={Style.headerCards}>Technicalities</Text> : <View></View>}
                    ListFooterComponent={() => <View style={Style.footerCards}/>} />
                <FAB
                    style={Style.fab}
                    icon='plus'
                    onPress={() => navigation.navigate('Add')}/>
            </View>
        </SafeAreaView >
    )
}
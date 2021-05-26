import 'react-native-gesture-handler';
import React from 'react'
import {
    View, Text, StyleSheet, StatusBar
} from 'react-native'

export default ({navigation}) => {

    const splash = () => {
        setTimeout(() => {
            navigation.navigate('Dashboard')
        }, 3000) // Seconds
    }

    return(
        <View style={Style.background}>
            {splash()}
            <StatusBar backgroundColor='#F17300'/>
            <View style={Style.container('80%')}>
                <Text style={Style.text}>ServeX</Text>
            </View>
            <View style={Style.container('20%')}>
                <Text style={Style.credit}>Developed by mTec Blinderz</Text>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    background: {
        backgroundColor: '#F17300',
        flex: 1
    },
    text: {
        fontFamily: 'Poppins-Bold',
        fontSize: 60,
        color: '#A34F00'
    },
    container: height => ({
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    }),
    credit: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#A34F00',
        textAlign: 'center',
        opacity: .3
    }
})
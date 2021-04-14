import 'react-native-gesture-handler';
import React, {useState} from 'react'

import {View, Text, StatusBar} from 'react-native'
import {TextInput, Button} from 'react-native-paper';

import AwesomeAlert from 'react-native-awesome-alerts';

import MyStyle from '../assets/css/style'

export default ({route, navigation}) => {
    const [seconds, setSeconds] = useState(null)
    const [res, setRes] = useState(null)
    const [hasError, setError] = useState(false)
    const [hasResult, setResult] = useState(false)

    const convert = seconds => {
        let hours = parseInt(seconds / 3600)
        let mins = parseInt((seconds % 3600) / 60)
        let secs = parseInt((seconds % 3600) % 60 / 1)
        setRes(`${hours}:${mins}:${secs}`)
        setResult(true)
    }

    return(
        <View style={MyStyle.containerMain}>
            <StatusBar backgroundColor='#3F8EFC'/>

            <View style={MyStyle.header}>
                <Text style={MyStyle.txtHome}>Hi there, welcome :)</Text>
                <Text style={MyStyle.subTxtHome}>Hey {route.params.username}, I'm glad you're here. I'm an URI Exercise. Go ahead and test my functionality.</Text>
            </View>

            <View style={MyStyle.containerForm}>
                <Text style={MyStyle.txtInstruction('#87BFFF')}>Here! Fill the input below and submit.</Text>

                <TextInput
                    style={{backgroundColor: '#05002D'}}
                    mode='outlined'
                    label='Seconds'
                    keyboardType='number-pad'
                    theme={{colors: {
                        text: "#2667FF",
                        primary: "#3B28CC",
                        placeholder: "#3B28CC"}}}
                    onChangeText={txt => setSeconds(txt)}
                    ref={ref => this.iptSeconds = ref}
                    value={seconds}/>

                <Button
                    style={MyStyle.btn(false)}
                    mode='contained'
                    onPress={() => {
                        if(seconds != null) return convert(seconds)
                        setError(true)
                    }}>
                    Verify
                </Button>
            </View>

            <Text
                style={MyStyle.back}
                onPress={() => {
                    setSeconds(null)
                    this.iptSeconds.clear()
                    navigation.navigate('Splash')
                }}>
            Back to start</Text>

            <AwesomeAlert
                show={hasError || hasResult}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText='Ok'
                message={hasError ? 'Fill in the seconds input text!' : res}
                title={hasError ? 'Error' : 'Converted'}
                onConfirmPressed={() => {
                    setError(false)
                    setResult(false)
                    setSeconds(null)
                    this.iptSeconds.clear()
                }}
                titleStyle={MyStyle.alertTitle}
                contentContainerStyle={MyStyle.alertContainer}
                messageStyle={MyStyle.alertMessage}
                confirmButtonStyle={MyStyle.alertConfirmBtn}
                confirmButtonTextStyle={MyStyle.alertConfirmTxt}
                overlayStyle={MyStyle.alertOverlay}/>
        </View>
    )
}
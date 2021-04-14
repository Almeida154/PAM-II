import 'react-native-gesture-handler';
import React, {useState} from 'react'

import {View, Text, StatusBar} from 'react-native'
import {TextInput, Button} from 'react-native-paper';
// import {Button} from 'react-native-ui-lib';

import AwesomeAlert from 'react-native-awesome-alerts';
import Wave from '../assets/svg/wave.svg'
import Icon from '../assets/svg/icon.svg'

import MyStyle from '../assets/css/style'

export default ({navigation}) => {
    const [username, setUsername] = useState('')
    const [hasError, setError] = useState(false)

    return(
        <View style={MyStyle.containerMain}>
            <StatusBar backgroundColor='#3B28CC'/>

            <View style={MyStyle.containerSplash}>
                <Icon width={150} height={150}/>
                <Text style={MyStyle.txtSplash}>Welcome, here you can convert any quantity of
                    seconds in a real time, with hours and minutes. Try it!</Text>    
            </View>

            <Wave width={531} height={100} style={{alignSelf: 'center'}}/>

            <View style={{padding: 40}}>

                <Text style={MyStyle.txtInstruction('#3B28CC')}>Put your name below.</Text>

                <TextInput
                    mode='outlined'
                    label='Your name'
                    theme={{colors: {
                        text: "#2667FF",
                        primary: "#3B28CC",
                        placeholder: "#3B28CC"}}}
                    onChangeText={txt => setUsername(txt)}
                    ref={ref => this.iptUsername = ref}
                    value={username}/>

                <Button
                    style={MyStyle.btn(true)}
                    mode='contained'
                    onPress={() => {
                        if(username.length > 0){
                            setUsername('')
                            this.iptUsername.clear()
                            return navigation.navigate('Home', {
                                username: username
                            })
                        }
                        setError(true)
                    }}>
                    Go
                </Button>
            </View>

            <AwesomeAlert
                show={hasError}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText='Ok'
                message='Fill in the username input text!'
                title='Error'
                onConfirmPressed={() => setError(false)}
                titleStyle={MyStyle.alertTitle}
                contentContainerStyle={MyStyle.alertContainer}
                messageStyle={MyStyle.alertMessage}
                confirmButtonStyle={MyStyle.alertConfirmBtn}
                confirmButtonTextStyle={MyStyle.alertConfirmTxt}
                overlayStyle={MyStyle.alertOverlay}/>

        </View> 
    )
}
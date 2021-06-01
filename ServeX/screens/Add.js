import React, {useState} from 'react'

import { View, Text, StatusBar, TextInput } from 'react-native'
import { Button } from 'react-native-paper'
import AwesomeAlert from 'react-native-awesome-alerts'

import Style from '../assets/css/add'

export default () => {

    const [technicality, setTechnicality] = useState('')
    const [desc, setDesc] = useState('')
    const [hasError, setError] = useState(false)
    const [hasSuccess, setSuccess] = useState(false)

    async function add() {

        const fields = [technicality, desc]

        for(field of fields) if(field.length < 1){
            setError(true)
            return
        }

        try {
            let req = await fetch('http://192.168.0.17:8000/api/add', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    technicality: technicality,
                    description: desc
                })
            })
    
            let res = await req.json()
            console.log(res)
            setSuccess(true)

        } catch (error) {
            console.log('O ERRO TA AQUI MENÓ: ' + error)
        }
    }

    function clear() {
        setError(false)
        setSuccess(false)
        setTechnicality('')
        setDesc('')
        this.techInput.clear()
        this.descInput.clear()
    }

    return(
        <View style={Style.background}>
            <StatusBar backgroundColor='#183153' />
            <View style={Style.containerIn}>
                <Text style={Style.title}>Create a new thing</Text>
                <TextInput 
                    style={ Style.input } 
                    placeholder='Technicality' 
                    onChangeText={ txt => setTechnicality(txt) }
                    returnKeyType="next"
                    ref={ ref => this.techInput = ref }
                    onSubmitEditing={ () => descInput.focus() } />
                <TextInput 
                    style={ Style.input } 
                    placeholder='Description'
                    onChangeText={ txt => setDesc(txt) }
                    ref={ ref => this.descInput = ref }
                    blurOnSubmit={ true } />
                <Button
                    style={Style.btn}
                    mode='contained'
                    onPress={ () => add() }>
                    Add technicality
                </Button>
            </View>

            <AwesomeAlert
                show={ hasError || hasSuccess }
                closeOnTouchOutside={ true }
                closeOnHardwareBackPress={ false }
                showConfirmButton={ true }
                confirmText='Ok'
                message={hasError ? 'Fill in all fields!' : 'Technicality registered!'}
                title={hasError ? 'Error' : 'Success'}
                onConfirmPressed={ () => clear() }
                titleStyle={ Style.alertTitle(hasError) }
                contentContainerStyle={ Style.alertContainer }
                messageStyle={ Style.alertMessage }
                confirmButtonStyle={ Style.alertConfirmBtn }
                confirmButtonTextStyle={ Style.alertConfirmTxt }
                overlayStyle={ Style.alertOverlay } />

        </View>
    )
}
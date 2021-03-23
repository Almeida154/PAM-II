import React, {useState} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {View, Text, TextInput, TouchableOpacity, StatusBar, ImageBackground} from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
import MyStyle from './css/style.js';

export default app = () => {

  const [showAlert = false, setShowAlert] = useState()
  const [isSuccess, setSuccess] = useState()

  const [alertText, setAlertText] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()

  const MyButton = ({title}) => (
    <TouchableOpacity onPress={onPress} style={MyStyle.btn}>
      <Text style={MyStyle.btnText}>{title}</Text>
    </TouchableOpacity>
  )

  const onPress = () => {
    const fields = [username, email, subject, message]
    for(field of fields) if(typeof(field) == 'undefined') {
      setAlertText('All the fields must be filled.')
      setSuccess(false)
      setShowAlert(true)
      return
    }

    setAlertText(
      `Hi, user! You received a new message! from ${username}\n\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    )

    setSuccess(true)
    setShowAlert(true)
  }

  const clear = () => {
    this.usernameInput.clear()
    this.emailInput.clear()
    this.messageInput.clear()
    this.subjectInput.clear()

    setAlertText(undefined)
    setUsername(undefined)
    setEmail(undefined)
    setSubject(undefined)
    setMessage(undefined)
  }

  return(
    <KeyboardAwareScrollView style={MyStyle.background}>
      <StatusBar backgroundColor='#596e50'/>

      {/* Header | Image and Title */}
      
      <View style={MyStyle.imageContainer}>
        <ImageBackground source={require('./img/wpp.jpg')} 
          style={MyStyle.imageWrapper} >
          <Text style={MyStyle.title}>State and Arrow</Text>
        </ImageBackground>
      </View>

      {/* Body | Content */}

      <View style={MyStyle.contentContainer}>
        <Text style={MyStyle.subTitle}>Fill in the fields below</Text>
        
        <TextInput style={MyStyle.input} placeholder='Name' onChangeText={txt => setUsername(txt)}
          ref={input => {this.usernameInput = input}} returnKeyType="next" blurOnSubmit={false}
          onSubmitEditing={() => {emailInput.focus()}}/>

        <TextInput style={MyStyle.input} placeholder='Email' onChangeText={txt => setEmail(txt)}
          ref={input => {this.emailInput = input}} returnKeyType="next" blurOnSubmit={false}
          onSubmitEditing={() => {subjectInput.focus()}} keyboardType='email-address'/>

        <TextInput style={MyStyle.input} placeholder='Subject' onChangeText={txt => setSubject(txt)}
          ref={input => {this.subjectInput = input}} returnKeyType="next" blurOnSubmit={false}
          onSubmitEditing={() => {messageInput.focus()}}/>

        <TextInput style={MyStyle.input} placeholder='Message' onChangeText={txt => setMessage(txt)}
          ref={input => {this.messageInput = input}} blurOnSubmit={true}/>

        <MyButton title='Send'></MyButton>
      </View>

      <AwesomeAlert
        show={showAlert}
        title={isSuccess ? subject : 'Error!'}
        message={alertText}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="OK"
        onConfirmPressed={() => {
          setShowAlert(false)
          clear()
        }}

        titleStyle={isSuccess ? MyStyle.alertTitleSuccess : MyStyle.alertTitleError}
        contentContainerStyle={MyStyle.alertContainer}
        messageStyle={MyStyle.alertMessage}
        confirmButtonStyle={MyStyle.alertConfirmBtn}
        confirmButtonTextStyle={MyStyle.alertConfirmTxt}
        overlayStyle={MyStyle.alertOverlay}/>

    </KeyboardAwareScrollView>
  )
}
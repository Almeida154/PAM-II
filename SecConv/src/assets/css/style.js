import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    containerMain: {
        backgroundColor: '#F6F6F6',
        width: '100%',
        height: '100%',
    },

    btn: (isSplash) => ({
        backgroundColor: '#3B28CC',
        marginTop: isSplash ? 30 : 15,
        width: isSplash ? '30%' : '100%',
        alignSelf: isSplash ? 'flex-end' : 'center',
        color: 'red',
        borderRadius: 12,
        padding: 7,
    }),

    txtInstruction: color => ({
        color: color,
        fontSize: 20,
        fontFamily: 'Poppins-Light',
        marginBottom: 15
    }),

    // Splash

    containerSplash: {
        backgroundColor: '#3B28CC',
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },

    txtSplash: {
        color: '#3F8EFC',
        marginTop: 50,
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    },

    // Home

    header: {
        width: '100%',
        height: '55%',
        backgroundColor: '#3F8EFC',
        padding: 50,
    },

    txtHome: {
        color: '#3B28CC',
        fontSize: 45,
        fontFamily: 'Poppins-Black',
    },

    containerForm: {
        width: '85%',
        backgroundColor: '#05002D',
        padding: 30,
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: '-20%'
    },

    subTxtHome: {
        color: '#ADD7F6',
        fontSize: 20,
        fontFamily: 'Poppins-Light',
    },

    back: {
        alignSelf: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        marginTop: 60,
        color: '#3F8EFC'
    },

    // Alert

    alertContainer: {
        backgroundColor: '#05002D',
        padding: 20,
        paddingBottom: 30,
        borderRadius: 10,
        width: 300,
    },

    alertTitle:{
        color: '#3F8EFC',
        fontSize: 30,
        fontFamily: 'Poppins-Black'
    },

    alertMessage: {
        color: '#f9f9f9',
        fontSize: 22,
        fontFamily: 'Poppins-Regular'
    },

    alertConfirmBtn: {
        width: 80,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#3B28CC',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },

    alertConfirmTxt: {
        color: '#87BFFF',
        fontFamily: 'Poppins-Black',
        fontSize: 24,
    },

    alertOverlay: {
        backgroundColor: '#000',
        opacity: .7
    }

})
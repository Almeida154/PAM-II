import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    /*

    MintCream: #F1FFFA
    TeaCream: #CCFCCB
    Celadon: #96E6B3
    Amazon: #407855
    RichBlack: #0F1E25
    RichBlackMoreBlack: #0D1B21
    YellowGreen: #C8E690

    */

    background: {
        height: '100%',
        backgroundColor: '#0F1E25',
    },

    imageContainer: {
        paddingBottom: 20,
        backgroundColor: '#0F1E25',
        elevation: 15,
    },

    imageWrapper: {
        width: '100%',
        height: 230,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        color: '#CCFCCB',
        fontSize: 35,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },

    contentContainer: {
        height: '100%',
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },

    subTitle: {
        color: '#96E6B3',
        fontSize: 18,
        fontStyle: 'italic',
        paddingVertical: 40
    },

    input: {
        backgroundColor: '#0d1b21',
        width: 250,
        padding: 12,
        borderRadius: 8,
        marginVertical: 5
    },

    btn: {
        backgroundColor: '#0d1b21',
        width: 250,
        height: 50,
        padding: 12,
        borderRadius: 8,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnText: {
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },

    alertContainer: {
        backgroundColor: '#0F1E25',
        padding: 10,
        borderRadius: 10,
        alignItems: 'flex-end',
    },

    alertTitleSuccess: {
        color: '#CCFCCB',
        fontSize: 22,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    alertTitleError: {
        color: '#EB6359',
        fontSize: 22,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

    alertMessage: {
        color: '#f9f9f9',
        fontSize: 16,
        fontStyle: 'italic',
    },

    alertConfirmBtn: {
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: '#0A151A'
    },

    alertConfirmTxt: {
        color: '#CCFCCB',
        fontWeight: 'bold'
    },

    alertOverlay: {
        backgroundColor: '#000',
        opacity: .5
    }
})
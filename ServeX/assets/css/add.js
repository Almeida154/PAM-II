import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    background: {
        backgroundColor: '#183153',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerIn: {
        backgroundColor: '#FF9633',
        width: '90%',
        height: '90%',
        borderRadius: 20,
        elevation: 20,
        padding: 36
    },
    title: {
        fontFamily: 'Poppins-Black',
        fontSize: 24,
        color: '#B85900',
        marginBottom: 16
    },
    input: {
        backgroundColor: '#FFA957',
        padding: 15,
        borderRadius: 10,
        color: '#B85900',
        marginVertical: 5,
        fontFamily: 'Poppins-Regular',
        fontSize: 16
    },
    btn: {
        backgroundColor: '#D56600',
        marginVertical: 5,
        elevation: 2,
        paddingVertical: 10,
        borderRadius: 10,
    },
    alertContainer: {
        backgroundColor: '#1b0c02',
        padding: 10,
        borderRadius: 10,
        width: 240,
    },
    alertTitle: (isError) => ({
        color: isError ? '#D66823' : '#CCFCCB',
        fontSize: 22,
        fontFamily: 'Poppins-Black'
    }),
    alertMessage: {
        color: '#f9f9f9',
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },
    alertConfirmBtn: {
        width: 60,
        height: 35,
        borderRadius: 10,
        backgroundColor: '#6E310B',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    alertConfirmTxt: {
        color: '#D66823',
        fontFamily: 'Poppins-Black'
    },
    alertOverlay: {
        backgroundColor: '#000',
        opacity: .7
    }
})
import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    body: {
        backgroundColor: '#F1E9DB',
        height: '100%',
    },

    container: {
        backgroundColor: '#716A5C',
        height: 200,
        alignItems: 'center'
    },

    containerRadius: {
        backgroundColor: '#A39B8B',
        height: 150,
        width: 150,
        borderRadius: 150,
        marginTop: 25,
        margin: 'auto',
        elevation: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: 80,
        height: 80
    },

    containerContent: {
        height: '100%',
        paddingVertical: 120,
        paddingHorizontal: 25,
        alignItems: 'center'
    },

    title: {
        fontSize: 35,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Raleway-VariableFont_wght',
        marginTop: 50
    },

    input: {
        borderWidth: 2,
        borderColor: '#716A5C',
        opacity: .6,
        borderRadius: 6,
        padding: 12,
        margin: 10,
        width: 250,
    },

    btn: {
        backgroundColor: '#716A5C',
        borderRadius: 6,
        padding: 18,
        margin: 10,
        width: 250,
    },

    text: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Raleway-VariableFont_wght',
        textAlign: 'center'
    },

    res: {
        marginTop: 30,
        fontSize: 20,
        color: '#716A5C',
    }

})
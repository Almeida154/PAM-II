import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF9633',
        padding: 30
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    loadingText: {
        color: '#B85900',
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        marginTop: 20
    },
    title: {
        fontSize: 26,
        fontFamily: 'Poppins-Black',
        color: '#793a00',
        textTransform: 'uppercase'
    },
    desc: {
        backgroundColor: '#FFA046',
        marginTop: 30,
        borderRadius: 20,
        padding: 30,
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        color: '#793a00',
    },
    tagsText: {
        color: '#b8590042',
        fontSize: 26,
        marginTop: 22,
        marginBottom: 10
    },
    categoryContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    categoryText: {
        fontSize: 18,
        paddingLeft: 10,
        color: '#793a00',
        fontFamily: 'Poppins-Bold'
    },
    back: {
        fontSize: 30,
        fontFamily: 'Poppins-Regular',
        color: '#b8590042',
        paddingRight: 10
    }
})
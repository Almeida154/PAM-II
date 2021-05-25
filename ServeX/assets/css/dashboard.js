import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#054A91',
    },
    header: {
        width: '100%',
        padding: 20,
    },
    title: {
        fontSize: 35,
        color: '#183153',
        fontFamily: 'Poppins-Bold',
    },
    search: {
        alignSelf: 'center',
        width: '80%',
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: '#183153',
        borderRadius: 10,
    },
    cardsContainer: {
        backgroundColor: '#f6f6f6',
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 20,
    },
    flatList: {
        paddingVertical: 20
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        elevation: 6,
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 10
    },
    titleCard: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: '#000',
    },
    descriptionCard: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#000',
        opacity: .6
    },
    tagsContainer: {
        marginTop: 8,
    },
    containerLoader: {
        alignSelf: 'center',
        height: '100%',
        justifyContent: 'center',
    },
    loadingText: {
        color: '#343234',
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        marginTop: 20
    }
})
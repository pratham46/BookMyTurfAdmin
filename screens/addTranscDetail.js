import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity,} from 'react-native'
import {useNavigation} from "@react-navigation/native";

const AddTranscDetail = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Add Transaction Details:
                </Text>
            </View>
            <TouchableOpacity style={[styles.card,styles.elevation]}
                              onPress={() => (navigation.navigate('UpiDetail'))}>
                <View style={styles.absoluteView}>
                    <Text>
                        .
                    </Text>
                </View>
                <Image source={require('../assets/upiLogo.png')} style={styles.cardImage}/>
            </TouchableOpacity>
        </View>
    )
}

export default AddTranscDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    absoluteView: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    cardImage: {
        height: 80,
        width: 230,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    subtitle: {
        fontSize: 20 ,
        fontWeight: '600',
        marginBottom: 7,
        marginTop: 7,
        alignSelf: "center",
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 3,
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        alignContent: "center",
        justifyContent: "center",
    },
    card1: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 28,
    },
    listtitle: {
        fontSize: 25 ,
        fontWeight: '600',
        marginBottom: 7,
        marginTop: 7,
    },
    listsubtitle: {
        fontSize: 15 ,
        fontWeight: '500',
        marginBottom: 7,
    },
    paidProperty: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    paid: {
        color: 'green',
    },
    pending: {
        color: 'red',
    },
    indicationBox: {
        borderRadius: 5,
        marginVertical: 10,
        marginRight: 10,
        marginLeft: 15,
        width: '5%',
        elevation: 10,
        shadowColor: '#4a4a4a',
        height: 20,
    },
    bgred: {
        backgroundColor: 'grey',
    },
    bggreen: {
        backgroundColor: 'white',
    },
    cardText:{
        fontSize: 15 ,
        fontWeight: '600',
        alignSelf: "center",
        paddingBottom: 10,
        paddingTop: 10,
        textShadowColor: 'rgba(107,107,107,0.55)',
        textShadowOffset: {width: 1.5, height: 1.5},
        textShadowRadius: 10
    },
    Bookedcard: {
        backgroundColor: 'grey',
        borderRadius: 5,
        marginVertical: 10,
        flexDirection: 'row',
        marginRight: 15,
        width: '44%',
        elevation: 10,
        shadowColor: '#4a4a4a',
        height: 70,
        alignContent: "center",
        justifyContent: "center",
    },
    NotBookedcard: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
        width: '44%',
        elevation: 10,
        shadowColor: '#4a4a4a',
        height: 70,
        alignContent: "center",
        justifyContent: "center",
    },
    margins: {
        marginLeft: 15,
        marginRight: 17,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        textShadowColor: 'rgba(74,74,74,0.55)',
        textShadowOffset: {width: 1.5, height: 1.5},
        textShadowRadius: 7
    },
    Label: {
        fontSize: 17,
        fontWeight: '600',
        marginLeft: 5,
        marginTop: 6,
    }
})

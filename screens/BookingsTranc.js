import React from 'react'
import {StyleSheet, Text, View, ScrollView,} from 'react-native'
import {Divider} from "react-native-paper";

const BookingTransc = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Slots Booked:
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={[styles.indicationBox, styles.bgred]}></View>
                <Text style={styles.Label}>Timings Booked</Text>
                <View style={[styles.indicationBox, styles.bggreen]}></View>
                <Text style={styles.Label}>Timings Not Booked</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={[styles.NotBookedcard, styles.margins]}>
                    <Text style={styles.cardText}>9:00am-11:00am</Text>
                </View>
                <View style={styles.Bookedcard}>
                    <Text style={styles.cardText}>12:00pm-2:00pm</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={[styles.NotBookedcard, styles.margins]}>
                    <Text style={styles.cardText}>3:00pm-5:00pm</Text>
                </View>
                <View style={styles.NotBookedcard}>
                    <Text style={styles.cardText}>5:00pm-7:00pm</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={[styles.Bookedcard, styles.margins]}>
                    <Text style={styles.cardText}>7:00pm-9:00pm</Text>
                </View>
                <View style={styles.Bookedcard}>
                    <Text style={styles.cardText}>9:00pm-11:00pm</Text>
                </View>
            </View>
            <Divider size={3}/>
            <View style={{marginLeft: 15,marginRight: 15, marginTop: 5, marginBottom: 5}}>
                <Text style={styles.listtitle}>Booking1</Text>
                <Text style={styles.listsubtitle}>Transaction ID: XXXXXXX</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.listsubtitle, {marginTop: 10,}]}>Payment Status:</Text>
                    <Text style={[styles.paidProperty, styles.paid]}>Paid</Text>
                </View>
            </View>
            <Divider size={4} style={{marginTop: 3,marginBottom: 3}}/>
            <View style={{marginLeft: 15,marginRight: 15, marginTop: 5, marginBottom: 5}}>
                <Text style={styles.listtitle}>Booking2</Text>
                <Text style={styles.listsubtitle}>Transaction ID: XXXXXXX</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.listsubtitle, {marginTop: 10,}]}>Payment Status:</Text>
                    <Text style={[styles.paidProperty, styles.pending]}>Pending</Text>
                </View>
            </View>
            <Divider size={3}/>
            <View style={{marginLeft: 15,marginRight: 15, marginTop: 5, marginBottom: 5}}>
                <Text style={styles.listtitle}>Booking2</Text>
                <Text style={styles.listsubtitle}>Transaction ID: XXXXXXX</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.listsubtitle, {marginTop: 10,}]}>Payment Status:</Text>
                    <Text style={[styles.paidProperty, styles.pending]}>Pending</Text>
                </View>
            </View>
            <Divider size={3}/>
        </ScrollView>
    )
}

export default BookingTransc

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

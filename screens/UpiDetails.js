import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView,} from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

const UpiDetails = () => {

    const [id, setid] = useState('')
    const [image, setImage] = useState(null);

    const pickImage = async () => {
// No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Add UPI Details:
                </Text>
            </View>
            <View>
                <Text style={styles.subtitle}>
                    Add UPI scanner(optional)
                </Text>
            </View>
            <View style={styles.imageholder}>

                {image && <Image source={{ uri: image }} style={styles.cardImage} />}
            </View>
            <TouchableOpacity style={[styles.card,styles.elevation]}
                              onPress={() => pickImage()}>
                <View style={styles.absoluteView}>
                    <Text>
                        .
                    </Text>
                </View>
                <MaterialIcons name={'add-a-photo'} color={'grey'} size={80} style={{alignSelf: 'center'}}/>
            </TouchableOpacity>
            <View>
                <Text style={styles.subtitle}>
                    Add UPI ID(required)
                </Text>
                <TextInput
                    placeholder="Example@user.com"
                    value={id}
                    onChangeText={text1 => setid(text1)}
                    style={styles.input}
                />
            </View>
            <View>
            <TouchableOpacity
                onPress={() => (console.log('Pressed'))}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Save Details</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default UpiDetails

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
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    absoluteView: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    cardImage: {
        height: 300,
        width: 300,
        alignSelf: "center",
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
        width: '80%',
        height: '30%',
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: 'center'
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
        height: 150,
        width: 300,
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
    },
    inputContainer: {
        width: '80%',
        marginLeft: 35,
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: 'white',
        width: '90%',
        marginVertical: 10,
        elevation: 20,
        shadowColor: 'rgba(63,63,63,0.8)',
        alignSelf: "center",
    },
})

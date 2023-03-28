import React, {useState , useEffect} from 'react'
import {StyleSheet,ScrollView, Text, View, Image, TouchableOpacity, TextInput,} from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from 'expo-image-picker';

const GalleryImage = () => {

    const [id, setid] = useState('')
    const [image, setImage] = useState(null);

    const pickImage = async () => {
// No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
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
                    Gallery
                </Text>
            </View>
            <View style={styles.imageholder}>
                <Image source={require('../assets/turf1.png')} style={styles.cardImage}/>
            </View>
            <View style={styles.imageholder}>
                <Image source={require('../assets/turf2.png')} style={styles.cardImage}/>
            </View>
            <View style={styles.imageholder}>
                <Image source={require('../assets/turf3.png')} style={styles.cardImage}/>
            </View>

            <View style={styles.imageholder}>

                {image && <Image source={{ uri: image }} style={styles.cardImage} />}
            </View>
                    <View>
                <Text style={styles.subtitle}>
                    Add more images
                </Text>
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
        </ScrollView>
    )
}

export default GalleryImage

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
    },
    absoluteView: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
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
        width: 350,
        height: 250,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: 'center'
    },
    imageholder: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
        width: 350,
        height: 250,
        marginLeft: 15,
        marginRight: 15,
        padding: 2,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: 'center',
        elevation: 20,
        shadowColor: 'grey'
    },
    cardImage: {
        height: 246,
        width: 346,
        borderRadius: 8
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

import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { auth } from '../firebase'
import AvatarImage from "react-native-paper/src/components/Avatar/AvatarImage";
import {Caption, Title} from "react-native-paper";

const AdminDetailsScreen = () => {
    const navigation = useNavigation()
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate('Login')
            })
            .catch(error => alert(error.message))
    }
    return (
        <>
            <View
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.buttonContainer}>
                    <View style={{alignItems: 'center'}}>
                        <AvatarImage source={require('../assets/avatarimage.png')} size={150} style={{elevation: 20, shadowColor: 'rgba(63,63,63,0.8)',}}/>
                    </View>
                    <View style={{marginLeft: -30, marginTop: 60, flexDirection: 'column'}}>
                        <View style={{marginLeft: 15, flexDirection: 'row'}}>
                            <Title style={styles.title}>Name : </Title>
                            <Caption style={styles.caption}>AdminName</Caption>
                        </View>
                        <View style={{marginLeft: 15,marginTop: 15, flexDirection: 'row'}}>
                            <Title style={styles.title}>Email : </Title>
                            <Caption style={styles.caption}>{auth.currentUser?.email}</Caption>
                        </View>
                        <View style={{marginLeft: 15,marginTop: 15, flexDirection: 'row'}}>
                            <Title style={styles.title}>Contact No : </Title>
                            <Caption style={styles.caption}>XXXXX XXXXX</Caption>
                        </View>
                        <View style={{marginLeft: 15,marginTop: 15, flexDirection: 'row'}}>
                            <Title style={styles.title}>Address : </Title>
                            <Caption style={styles.caption}>Address</Caption>
                        </View>
                        <View style={{marginLeft: 15,marginTop: 15, flexDirection: 'row'}}>
                            <Title style={styles.title}>Location : </Title>
                            <Caption style={styles.caption}>Mumbai</Caption>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => {handleSignOut()}}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default AdminDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cccccc',

        alignItems: 'center',
    },
    inputContainer: {
        width: '100%'
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: 'white',
        width: '95%',
        marginVertical: 10,
        elevation: 20,
        shadowColor: 'rgba(63,63,63,0.8)',
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#298a3d',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginTop: 150,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderColor: '#298a3d',
        borderWidth: 2,
        marginTop: 150,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#298a3d',
        fontWeight: '700',
        fontSize: 16,
    },
    text: {
        marginLeft: 10,
        marginTop: 20,
        color: '#2f2f2f',
        fontWeight: "700",
        fontSize: 15,
    },
    image: {
        width: 300,
        height: 200,
        left: 15,
    },
    title: {
        color: '#298a3d',
        fontSize: 30,
        marginTop: 3,
        fontWeight: '800',
    },
    caption: {
        color: '#298a3d',
        fontSize: 20,
        marginTop: 7,
        marginLeft: 20,
    },
})

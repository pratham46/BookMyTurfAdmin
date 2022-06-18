import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native'
import {CircularProgressBase} from "react-native-circular-progress-indicator";

const HomeScreen = () => {
  const navigation = useNavigation()

    const props = {
        activeStrokeWidth: 30,
        inActiveStrokeWidth: 30,
        inActiveStrokeOpacity: 0.2
    };

  return (
    <ScrollView style={styles.container}>
        <TouchableOpacity style={[styles.card,styles.elevation]}
                          onPress={() => (navigation.navigate('TurfSet'))}>
            <View style={styles.absoluteView}>
                <Text>
                    .
                </Text>
            </View>
            <Image source={require('../assets/Turf_settings.jpeg')} style={styles.cardImage}/>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.card1,styles.elevation]}
                              onPress={() => (console.log('Pressed'))}>
                <View style={styles.absoluteView}>
                    <Text>
                        .
                    </Text>
                </View>
                <Image source={require('../assets/image_gallery.jpeg')} style={styles.cardImage1}/>
            </TouchableOpacity>
            <View style={[styles.card,styles.elevation, styles.background]}
                              onPress={() => (console.log('Pressed'))}>
                <CircularProgressBase
                    {...props}
                    value={60}
                    radius={80}
                    activeStrokeColor={'#EB0061'}
                    inActiveStrokeColor={'#EB0061'}
                >
                    <CircularProgressBase
                        {...props}
                        value={70}
                        radius={58}
                        activeStrokeColor={'#52C52E'}
                        inActiveStrokeColor={'#52C52E'}
                    >
                        <CircularProgressBase
                            {...props}
                            value={50}
                            radius={38}
                            activeStrokeColor={'#26C3EA'}
                            inActiveStrokeColor={'#26C3EA'}
                        />
                    </CircularProgressBase>
                </CircularProgressBase>
            </View>
        </View>

            <TouchableOpacity style={[styles.card,styles.elevation]}
                          onPress={() => (navigation.navigate('AddTransc'))}>
                <View style={styles.absoluteView}>
                    <Text>
                        .
                    </Text>
                </View>
                <Image source={require('../assets/transac_details.jpeg')} style={styles.cardImage}/>
            </TouchableOpacity>

        <TouchableOpacity style={[styles.card,styles.elevation]}
                          onPress={() => (navigation.navigate('BookTransc'))}>
            <View style={styles.absoluteView}>
                <Text>
                    .
                </Text>
            </View>
            <Image source={require('../assets/Transac_Booking.jpeg')} style={styles.cardImage}/>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default HomeScreen

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
    heading: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 7,
        marginTop: 7,
    },
    subtitle: {
        fontSize: 15 ,
        fontWeight: '400',
        marginBottom: 7,
        marginTop: 7,
    },
    price: {
        fontSize: 35,
        fontWeight: '400',
        marginBottom: 7,

    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
    },
    card1: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 28,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
    background: {
      backgroundColor: '#f4f4f4'
    },
    absoluteView: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    cardImage: {
        height: 150,
        width: 363,
        borderRadius: 10
    },
    cardImage1: {
        height: 160,
        width: 160,
        borderRadius: 10
    },
})

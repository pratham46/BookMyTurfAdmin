import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./HomeScreen";
import TurfSettings from "./TurfSettings";
import BookingTransc from "./BookingsTranc";
import AddTranscDetail from "./addTranscDetail";
import UpiDetails from "./UpiDetails";
import GalleryImage from "./GalleryImage";


export default function Route({navigation}){

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home1" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="TurfSet" component={TurfSettings} />
            <Stack.Screen options={{ headerShown: false }} name="BookTransc" component={BookingTransc} />
            <Stack.Screen options={{ headerShown: false }} name="AddTransc" component={AddTranscDetail} />
            < Stack.Screen options={{ headerShown: false }} name="UpiDetail" component={UpiDetails} />
            < Stack.Screen options={{ headerShown: false }} name="Gallery" component={GalleryImage} />
        </Stack.Navigator>
    );

}

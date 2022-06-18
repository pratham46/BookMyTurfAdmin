import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerContent1} from "./DrawerContent";
import HomeScreen from "./HomeScreen";
import AdminForm from "./AdminData";
import Route from "./Routes";


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={(props) => <DrawerContent1 {...props} />}>
                <Drawer.Screen
                    name="Home"
                    component={Route}
                    options={{
                        headerTintColor: '#298a3d',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} />
                <Drawer.Screen
                    name="YourInfo"
                    component={AdminForm}
                    options={{
                        headerTintColor: '#298a3d',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} />
            </Drawer.Navigator>
    );
}

import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native'
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Checkbox} from "react-native-paper";


const data = [
    { label: '9:00am-11:00am', value: '1' },
    { label: '12:00pm-2:00pm', value: '2' },
    { label: '2:00pm-4:00pm', value: '3' },
    { label: '3:00pm-5:00pm', value: '4' },
    { label: '5:00pm-7:00pm', value: '5' },
    { label: '4:00pm-6:00pm', value: '6' },
    { label: '6:00pm-8:00pm', value: '7' },
    { label: '7:00pm-9:00pm', value: '8' },
    { label: '9:00pm-11:00pm', value: '9' },
    { label: '11:00pm-1:00am', value: '10' },
];
const data1 = [
    { label: 'FootBall', value: '1' },
    { label: 'Cricket', value: '2' },
    { label: 'BasketBall', value: '3' },
    { label: 'Tennis', value: '4' },
    { label: 'VollyBall', value: '5' },
];

const TurfSettings = () => {
    const navigation = useNavigation()

    const props = {
        activeStrokeWidth: 30,
        inActiveStrokeWidth: 30,
        inActiveStrokeOpacity: 0.2
    };

    const [selected, setSelected] = useState([]);
    const [selected1, setSelected1] = useState([]);
    const [checked, setChecked] = useState(false);
    const [checkedTue, setCheckedTue] = React.useState(false);
    const [checkedWed, setCheckedWed] = React.useState(false);
    const [checkedThu, setCheckedThu] = React.useState(false);
    const [checkedFri, setCheckedFri] = React.useState(false);
    const [checkedSat, setCheckedSat] = React.useState(false);
    const [checkedSun, setCheckedSun] = React.useState(false);

    const renderItem = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.selectedTextStyle}>{item.label}</Text>
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            </View>
        );
    };
    const renderItem1 = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.selectedTextStyle}>{item.label}</Text>
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            </View>
        );
    };

    return (
        <>
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Turf Settings</Text>
            </View>
            <View>
                <Text style={styles.subtitle}>Turf Slots:</Text>
            </View>
            <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                value={selected}
                search
                searchPlaceholder="Search..."
                onChange={item => {
                    setSelected(item);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color="black"
                        name="Safety"
                        size={20}
                    />
                )}
                renderItem={renderItem}
                renderSelectedItem={(item, unSelect) => (
                    <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                        <View style={styles.selectedStyle}>
                            <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            <AntDesign color="black" name="delete" size={17} />
                        </View>
                    </TouchableOpacity>
                )}
            />
            <View style={{marginTop: 20,}}>
                <Text style={styles.subtitle}>Turf Available Sports:</Text>
            </View>
            <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data1}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                value={selected1}
                search
                searchPlaceholder="Search..."
                onChange={item => {
                    setSelected1(item);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color="black"
                        name="Safety"
                        size={20}
                    />
                )}
                renderItem={renderItem}
                renderSelectedItem={(item, unSelect) => (
                    <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                        <View style={styles.selectedStyle}>
                            <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            <AntDesign color="black" name="delete" size={17} />
                        </View>
                    </TouchableOpacity>
                )}
            />
            <View>
                <Text style={styles.subtitle}>Open on Days:</Text>
            </View>
            <View style={styles.checkBoxView}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
                <Text style={styles.checkBoxLabel}>Monday</Text>
            </View>
            <View style={styles.checkBoxView}>
                <Checkbox
                    status={checkedTue ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setCheckedTue(!checkedTue);
                    }}
                />
                <Text style={styles.checkBoxLabel}>Tuesday</Text>
            </View>
            <View style={styles.checkBoxView}>
                <Checkbox
                    status={checkedWed ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setCheckedWed(!checkedWed);
                    }}
                />
                <Text style={styles.checkBoxLabel}>Wednesday</Text>
            </View>
            <View style={styles.checkBoxView}>
                <Checkbox
                    status={checkedThu ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setCheckedThu(!checkedThu);
                    }}
                />
                <Text style={styles.checkBoxLabel}>Thursday</Text>
            </View>
            <View style={styles.checkBoxView}>
                <Checkbox
                    status={checkedFri ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setCheckedFri(!checkedFri);
                    }}
                />
                <Text style={styles.checkBoxLabel}>Friday</Text>
            </View>
            <View style={styles.checkBoxView}>
                <Checkbox
                    status={checkedSat ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setCheckedSat(!checkedSat);
                    }}
                />
                <Text style={styles.checkBoxLabel}>Saturday</Text>
            </View>
            <View style={styles.checkBoxView}>
                <Checkbox
                    status={checkedSun ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setCheckedSun(!checkedSun);

                    }}
                />
                <Text style={styles.checkBoxLabel}>Sunday</Text>
            </View>
        </ScrollView>
        <View style={styles.bottombuttonBg}>
            <TouchableOpacity style={styles.bottomButton}>
                <Text style={styles.subtitle}>Save Settings</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default TurfSettings

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
    bottombuttonBg: {
        height: '10%',
    },
    bottomButton: {
        backgroundColor: '#0bc008',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        justifyContent: "center",
    },
    subtitle: {
        fontSize: 20 ,
        fontWeight: '600',
        marginBottom: 7,
        marginTop: 7,
        alignSelf: "center",
    },
    price: {
        fontSize: 35,
        fontWeight: '400',
        marginBottom: 7,

    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
    },
    card1: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 10,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 7,
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
    },
    dropdown: {
        width: '95%',
        alignSelf: 'center',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textSelectedStyle: {
        marginRight: 5,
        fontSize: 16,
    },
    checkBoxView: {
        marginLeft: 20,
        flexDirection: 'row',
    },
    checkBoxLabel: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 5,
        marginTop: 4,
    }
})

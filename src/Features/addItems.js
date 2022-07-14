import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {TextInput} from 'react-native-paper';

const AddItems = ({addItem}) => {
    const [item,setItem]=useState(null)
    return (
        <View>
            <TextInput style={styles.txtInpStyle} label="enter your item to add..." onChangeText={setItem}/>
            <TouchableOpacity style={styles.btnStyle} onPress={() => addItem(item)}>
                <Text style={styles.btnTextStyle}>+</Text>
            </TouchableOpacity>

        </View>
    )
}

export default AddItems

const styles = StyleSheet.create({
    txtInpStyle: {
        margin: 10
    },
    btnStyle: {
        width: 100,
        height: 50,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    btnTextStyle: {
        fontWeight: "bold",

    }
})
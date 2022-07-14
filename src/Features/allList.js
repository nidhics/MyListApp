import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const AllList = ({ item, showList,  showAll,onback }) => {
    return (
        <View>
            <Text >AllList {showAll}</Text>
            
            <TouchableOpacity style={styles.btnStyle} onPress={() => showList(item)}>
                <Text style={styles.btnTextStyle}>Add</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.btnStyle} onPress={onback}>
                <Text style={styles.btnTextStyle}>Go Back</Text>
            </TouchableOpacity>

        </View>
    )
}

export default AllList

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
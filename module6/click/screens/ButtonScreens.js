import React from "react"
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native"

const ButtonScreen=()=>{
    let counter=100

    return <View>
        <Text>
            Button Screen
        </Text>
        <Button title="Click here"
        color = "purple"
        onPress={()=>console.log("Button Clicked", counter--)}
        />
        <TouchableOpacity style={stili.TouchBtn} onPress={()=>console.log("Clicked Touchable Opacity: ", counter--)}>
            <Text style={stili.btnText}>Click Touchable Element</Text>
        </TouchableOpacity>
    </View>
}
const stili=StyleSheet.create({
    TouchBtn:{
        backgroundColor:"cyan",
        marginVertical:15,
        paddingVertical:20,
        borderRadius:6,
        marginHorizontal:20,

    },
    btnText:{
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight:"bold"
    }
})

export default ButtonScreen;
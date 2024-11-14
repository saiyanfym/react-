import React from "react"
import {Text, StyleSheet, View, FlatList} from "react-native"

const students =[
    {name: "Arianit", age:17},
    {name: "Blerti", age:17},
    {name: "Amari", age:15},
    {name: "Orkidea", age:19},
    {name: "Festimi", age:17},
]
const FlatListExample=()=>{
    return<View> 
        <Text>This is the Flatlist Screen</Text>
        <FlatList
        data={students}
        renderItem={({item})=>{
            return <Text>{item.name} - {item.age}</Text>
        }}/>
        </View>
}
const stili=StyleSheet.create({
    textEdit:{
        fontsize:20,
        backgroundColor:'blue'
    }
})
export default FlatListExample;
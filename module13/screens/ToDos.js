import React, {useEffect, useState} from 'react'
import {Flatlist, Text, View, StyleSheet} from 'react-native'

const ToDos=()=>{
    const [data, setData]=useState([])
   
    const ThirrAPI =async ()=>{
        try{
            const pergjigjja = await fetch("https://jsonplaceholder.typicode.com/todos");
        const json =await pergjigjja.json();
        setData(json);
        }catch(error){
            console.error
        }
    }
    useEffect(()=>{
        ThirrAPI()
    },[])
    const renderItem=({item})=>{
       return(
       <View>
            <Text>{item.title}</Text>
            <Text>{item.completed}</Text>
        </View>
        )
    }
  
    return (
        <View>
            <Flatlist 
            data={data}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={renderItem}
            
            />
        </View>
    )
}

export default ToDos;
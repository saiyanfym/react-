import React,{useEffect,useState} from 'react'
import {View, Text, Stylesheet, Flatlist} from 'react-native'
import { FlatList } from 'react-native-web'

const Post=()=>{
    const [postimet, vendosPostimet]= useState([])
    const [loading, setloading] = useState(true)
    console.log("hapja e postimit")

    const merrTeDhenat = async ()=>{
        console.log('Fetching data started');
        try{
            const pergjigjja= await fetch ("https://jsonplaceholder.typicode.com/posts")
            const resultati= await pergjigjja.json();
            vendosPostimet(resultati)
            console.log(postimet)
        }catch(error){
            console.log("Error fetching Data:",error)
        } finally {
            setloading(false)
        }
    }
}
useEffect(()=>{
    merrTeDhenat();
   
},[])

const Posts =()=>{
    return <View>
        {
            loading ? (<Text>Duke u shfaqur rezultatet</Text>) : postimet.length>0 ?(
                <FlatList
        data={postimet}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>{
            <Text>{item.body}</Text>
        }}
        />
            ):(
                <Text>S'ka postime</Text>
            )
        }
        
    </View>
}
export default Posts
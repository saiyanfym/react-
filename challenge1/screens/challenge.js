import React from 'react';
import { Stylesheet, Text,View, Image, TouchableOpacity,ScrollView} from "react-native";

export default function App() {
    return(
        <View style={Stylesheet.container}>
            <View style ={Stylesheet.header}>
                <image source = {{'C:\Users\PC\Downloads\OIP.jpeg'}}
                style={styles.profileImage} />
                <Text style={styles.name}>JOHN DOE</Text>
            <Text style={styles.role}>UI/UX Designer</Text>
            <Text style={styles.description}>We're passionate about creating beautiful designs for stratups & leading brands</Text>
            <TouchableOpacity style={styles.hireButton}><Text style={styles .hireButtonText}>Hore</Text></TouchableOpacity>
            </View>
            <View style={styles.projectsSection}><Text style={styles.viewAlltextTitle}>PROJECTS</Text></View>
            <TouchableOpacity><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
            
        </View>
    )
}
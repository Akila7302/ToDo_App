import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from "@expo/vector-icons" 
import Colors from "../constants/Colors";

//Button List
const ListButton = ({title, color, navigation}) => {
    return(
        //Boxes List
        <TouchableOpacity 
            onPress={() => {navigation.navigate("ToDoList", {title, color})}} 
            style={[styles.itemContainer,{backgroundColor:color}]}
        >
                <View><Text style = {styles.itemTitle}>{title}</Text></View>
                <View style = {{flexDirection:"row"}}></View>

                    {/*Options*/}
                    <TouchableOpacity onPress={()=>{}}>
                        <Ionicons name= "options-outline" size={24} color="white"/>
                    </TouchableOpacity>

                    {/*Trash*/}
                    <TouchableOpacity onPress={()=>{}}>
                        <Ionicons name= "trash-outline" size={24} color="white"/>
                </TouchableOpacity>
</TouchableOpacity>);
}

export default ({navigation}) => {
    return(
        <View style={styles.container}>
           <FlatList 
            data={[{title:"School", color:Colors.red},{title:"Work", color:Colors.green},{title:"Fun", color:Colors.yellow}]}
            renderItem = {({item:{title, color},index})=>{
                return(
                    <ListButton title={title} color={color} navigation={navigation}/>
                );
            
            }}    
           />
        </View>);
  }

 //Styles
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
        // backgroundColor: Colors.blue
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});  
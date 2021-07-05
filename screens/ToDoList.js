import React, {useState, useLayoutEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import ToDoItem from '../components/ToDoItem';
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

//Add new items when press + button
const renderAddListIcon = (addItem) =>{
    return(
        <TouchableOpacity onPress={()=> addItem({text:"", isChecked: false, isNewItem: true})}>
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
    )
}

export default ({navigation}) => {
    const [toDoItems, setToDoItems] = useState([{text: "hello", isChecked: false}])
    //Add new Item
    const addItemToLists=(item) => {
        toDoItems.push(item);
        setToDoItems([...toDoItems]);
    }

    //Remove Item
    const removeItemFromLists = (index) => {
        toDoItems.splice(index, 1);
        setToDoItems([...toDoItems]);
    }

    //Update Item
    const updateItem = (index, item) => {
        toDoItems[index] = item;
        setToDoItems([...toDoItems]);
    }

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerRight: () => renderAddListIcon(addItemToLists)
        })

    })
    
    return(
    <View style={styles.conntainer}>
        <FlatList 
            data={toDoItems} 
            renderItem={({item: {text, isChecked, isNewItem}, index}) => {
                return <ToDoItem 
                    text={text} 
                    isChecked={isChecked}
                    isNewItem={isNewItem} 
                    onChecked={() => {
                        const toDoItem = toDoItems[index];
                        toDoItem.isChecked = !isChecked;
                        updateItem(index, toDoItem)
                    }}
                    onChangeText={(newText) =>{
                        const toDoItem = toDoItems[index];
                        toDoItem.text = newText;
                        updateItem(index, toDoItem)
                    }}
                    onDelete={() => {
                        removeItemFromLists(index)
                    }}
                    />
            }}
        />
    </View>);
}

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    icon: {
        padding: 5,
        fontSize: 32,
        color: "white",
    },
});

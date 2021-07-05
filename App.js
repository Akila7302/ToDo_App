import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import ToDoList from './screens/ToDoList';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>

    <Stack.Navigator> 
      <Stack.Screen name="Simple ToDo Manager" component={Home}/>
      <Stack.Screen name="ToDoList" 
        component={ToDoList}
        //Display the list's title
        options={({route})=>{
          return({
            title:route.params.title,
            headerStyle: { backgroundColor: route.params.color},
            headerTintColor:"white"
          })
        }}
        />

    </Stack.Navigator>
      
  </NavigationContainer>
    

  );
}



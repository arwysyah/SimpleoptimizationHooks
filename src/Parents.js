import React, {useState,useCallback} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Childs from './Childs';
export default function Parent() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');

//   const updateCounterOpt =()=>setCounter(counter+1)
const updateCounterOpt = useCallback(()=>setCounter(counter+1),[counter])


//every single variable or function will redefine if didnt have a hooks mathode
const newArray = [1,2,3,4]
  return (
    <View style={{paddingHorizontal:30,paddingVertical:40,borderRadius:10}}>
      <TextInput
        style={{color: 'red',backgroundColor:'#cfc7c6'}}
        onChangeText={text => setInput(text)}
        value={input}
      />
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <Text> add +1 </Text>
        <Text>{counter}</Text>
      </TouchableOpacity>
      <Childs counter={counter} 
      updateCounter ={
        //   ()=>setCounter(counter+1)
        updateCounterOpt

        
          }
          arr = {newArray}/>
    </View>
  );
}

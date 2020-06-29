import React,{memo, useMemo} from 'react'
import {View,Text, Button} from 'react-native'
import {isEqual} from 'lodash'
//the three ways
//state changs and will rerender
//the props that received and it will rerender
// when the parent render by default child also rerender



const Childs =(props)=>{
    const {counter,updateCounter,arr} = props


    console.log(`child is rendering ${counter}`)
   const childNumber= useMemo(()=>{
    let output = 0 
    for(let i = 0 ; i< 20000000 ; i++){
       return output++
    }
   },[])

    return(
        <View style={{top:80}}>
            <Text>
              counter =  {counter}
               
            </Text>
            <Text>Child : {childNumber}
               </Text>

               <Text>array : {arr}</Text>
            <Button
            title="button" 
            onPress={updateCounter}>
                
            </Button>
        </View>
    )
}
export default memo(Childs,isEqual)
// export default Childs
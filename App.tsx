import React,{useEffect,useState} from 'react';
import {View,Text, Button} from 'react-native';






function App() {
  const [show,setShow]=useState(false);

  return(
    <View>
      <Text> useState and useEffect exercise</Text>
      <Button title='push' onPress={isShow} />
      {show && <Control/>}

    </View>
  );

  function isShow(){
    setShow(!show);
  }
}

export default App;

function Control(){
  useEffect(()=>{
  console.log('ilkkez çalıştım');

  return(()=>{
    console.log('gidiyorum.')
  });
  },[]);
 
  return(
    <View>
      <Text>gösterilecek text</Text>
    </View>
    
  );

}


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ActivityIndicator } from 'react-native';

import {useState} from 'react'



function getMeDuck(setValue, setIsFetching){

  setIsFetching(true)
  fetch("https://random-d.uk/api/random")
  .then((response) => response.json())
  .then((data) => {
    setValue(data.url)
    setIsFetching(false)
  })
}

export default function App() {

  const [ duck, setDuck ] = useState("")
  const [isFetching , setIsFetching] = useState(false)

  return (
    <View style={styles.container}>
      <Button title ="Look! A duck!" onPress={() =>getMeDuck(setDuck, setIsFetching)}/>

      {
        isFetching ?
        <ActivityIndicator size="large"/> :
        <Image source={{uri:duck}} style={{height:400, width:300}} resizeMode="contain"/>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

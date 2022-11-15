import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,  ScrollView, TouchableOpacity} from 'react-native';
import {useState} from 'react'
export default function App() {
  return (
    <ScrollView>
      <Spacer height={40}/>
      <Card name="Brownies" price="6.49" image="https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-2-1200.jpg"/>
      <Spacer height={40}/>
      <Card name="Milk" price="1.9" image="https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg"/>
    </ScrollView>

  );
}

function KButton({title , onPress}){
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )

}

function Card({name,price,image}){

  const [amount, setAmount] = useState(0)

  return(
    <View style={styles.card}>
      <View style={styles.productsDescription}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>${price}</Text>
      </View>
      <Spacer height={20}/>
      <Image style={styles.image} source={{uri:image}}></Image>
      <Spacer height={20}/>
      <View style={styles.amount}>
        <KButton title="+" onPress={()=>{
          setAmount(amount+1)
        }}/>
        <Text style={styles.text}>{amount}</Text>
        <KButton title="-" onPress={()=>{
          if(amount>0){setAmount(amount-1)}
        }}/>
      </View>
    </View>
  )
}

function Spacer({height=10,width=10}){
  return(
    <View style={{ height: height, width: width}}>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height:350,
    width:'60%',
    backgroundColor:"#f2f3f5",
    marginHorizontal:'20%',
    overflow:'hidden',
    borderRadius:40,
    justifyContent:"center",
    alignItems:"center"
  },

  productsDescription:{
    flexDirection:"row",
    
  },
  amount:{
    flexDirection:"row",
  },
  button:{
    height:40,
    width:40,
    backgroundColor:"#9eb0e6",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:"50%"
  },
  text:{
    fontSize:21,
    fontWeight:"bold",
    paddingHorizontal:15,
  },
  image:{
    padding:90

  }
});
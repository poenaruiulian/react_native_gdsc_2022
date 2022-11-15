import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.notch}></View>
        <View style={styles.profile}>
          <Image style={styles.image} source={require('./profile.jpeg')}/>
        </View>
        <View style={styles.description}>
            <Text style={styles.text}>IULIAN-IOSIF <Text style={styles.textBold}>POENARU</Text></Text>
            <Image style={styles.image} source={require('./gdsc.jpg')}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    height:'100%',
    width:'100%'
  },

  box :{
    height:'65%',
    width:'60%',
    backgroundColor:"#1a126b",
    marginHorizontal:'20%',
    overflow:'hidden',
    borderRadius:40,
  },

  notch:{
    backgroundColor:"#f2f2f2",
    width:"45%",
    height:'6%',
    marginHorizontal:'27.5%',
    marginTop:20,
    borderRadius: "30%"
  },

  profile:{
    marginTop:20,
    alignItems:"center"
  },
  description :{
    width:'100%',
    height:'80%',
    backgroundColor:"#f2f2f2",
    marginTop:"4%",
    alignItems:'center',
    paddingTop:32,
  },
  
  text :{
    fontSize:28,

  },

  textBold: {
    fontWeight: 'bold',
  },
  
  image:{
    marginTop:20,
    borderRadius:"50%",
    padding:40
  }
});

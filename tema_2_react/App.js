import { ScrollView, StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Spacer/>
      <Card extension="PDF" size="5MB" category="Recapitulare functii" name="Tabel recapitulare.pdf"/>
      <Spacer/>
      <Card extension="DOCX" size="10MB" category="Conversie baze de enumeratie" name="Exercitii.docx"/>
      <Spacer/>
      <Card extension="PPT" size="15MB" category="Reciclarea plasticului" name="reciclare.ppt"/>
      <Spacer/>
      <Card extension="PDF" size="5MB" category="Recapitulare matrici" name="Tabel recapitulare.pdf"/>
    </ScrollView>
  );
}

function Card({extension, size, category, name}){
  return(
    <View style={styles.card}>
      <View style={styles.description}>
        <Text style={styles.extension_and_size}>{extension} | {size}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.other}><Image source={require("./download.png")} style={styles.image}/></View>
  </View>
  )
}

function Spacer({height = 40}){
  return(
    <View style = {{height:height}}>
    <Text> </Text>
  </View>
  )
}

const styles = StyleSheet.create({

  background:{
    alignItems:"center",
  },

  card: {
    width:"90%",
    height:100,
    backgroundColor:"#f7f7f7",
    borderRadius:"10%",
    padding:10,
    flexDirection:"row",
    justifyContent:"space-between"
  },

  description:{
    margin:10
  },
  other:{
    hieght:"100%",
    justifyContent:"center",
    padding:5
  },
  category:{
    fontWeight:"bold",
    fontSize:18,
    color:"#161d3b"
  },

  extension_and_size: {
    fontWeight:"bold",
    color:"#65c972",
  },

  name: {
    fontSize:18,
    marginTop:5
  },

  image:{
    padding:1
  }

});

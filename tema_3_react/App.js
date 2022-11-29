import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function Spacer({height}){
  return(
    <View style={{height:height}}>
      <Text> </Text>
    </View>
  )
}

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export function HomeScreen(){
  return (
    <View style={styles.container}>
      <Text style={{fontSize:32, fontWeight:"bold"}}>Welcome!</Text>
      <Spacer height={10}/>
      <Text style={{fontSize:16}}>This app brings you info about cars and books</Text>
      <Spacer height={30}/>
      <Image style={{height:200, width:350}}source={{uri:"https://www.designboom.com/wp-content/uploads/2022/02/the-library-designboom-01.jpg"}}/>
    </View>
  )
}


//Books Screen
export function CButton({src,name,description,author,page,navigation,bookImg,srcImg1,srcImg2}){
  return (
    <View>
      <View>
        <Image style={{height:40, width:40}} source={srcImg1}/>
      </View>
      <TouchableOpacity style={stylesBooks.bookCard} onPress={() => 
        navigation.navigate(page,{
          name:name,
          description:description,
          src:bookImg
        })
      }>
        <Image style={stylesBooks.imageBookCard} source={{uri:src}} />
        <View>
          <Text style={stylesBooks.bookName} >{name}</Text>
          <Text style={stylesBooks.authorName}>{author}</Text>
        </View>
      </TouchableOpacity>
      <View style={{width:"90%",flexDirection:"row",justifyContent:"flex-end"}}>
        <Image style={{height:40, width:40}} source={srcImg2}/>
      </View>
    </View>
  )
}
export function Book({route,navigation}){
  return (
    <View style={styles.container}>
      <View style={stylesBooks.bookPage}>
        <View style={stylesBooks.bookPageHeader}>
          <Button  
          title="Back" 
          onPress={
            () => navigation.navigate("Books")
          }/>
          <Text style={{fontSize:24,fontWeight:'bold'}}>{route.params.name}</Text>
        </View>
        <View style={stylesBooks.bookDescription}>
          <Text>{route.params.description}</Text>
        </View>
        <Spacer height={10}/>
        <Image style={stylesBooks.bookImage} source={{uri:route.params.src}}/>
      </View>
    </View>
  )
}
export function BooksHomeScreen({navigation}){
  return (
    <View style={styles.container}>
      <CButton 
        src="https://amanecemetropolis.net/wp-content/uploads/2019/01/22-11-63-stephen-king.jpg" 
        navigation={navigation} 
        page="JFK" 
        name="11/22/63" 
        author="Stephen King"
        description="
        11/22/63 is a novel by Stephen King about a time traveller who attempts to prevent the assassination of United States President John F. Kennedy, which occurred on November 22, 1963 (the novel's titular date). It is the 60th book published by Stephen King, his 49th novel and the 42nd under his own name. The novel was announced on King's official site on March 2, 2011. A short excerpt was released online on June 1, 2011,and another excerpt was published in the October 28, 2011, issue of Entertainment Weekly. The novel was published on November 8, 2011 and quickly became a number-one bestseller. It stayed on The New York Times Best Seller list for 16 weeks. 11/22/63 won the 2011 Los Angeles Times Book Prize for Best Mystery/Thriller and the 2012 International Thriller Writers Award for Best Novel, and was nominated for the 2012 British Fantasy Award for Best Novel and the 2012 Locus Award for Best Science Fiction Novel.
        "
        bookImg="https://guidelive.imgix.net/1455463994-112263.JPG"
        srcImg1={require('./images/flowers/flower.png')}
        srcImg2={require('./images/flowers/flower2.png')}
      />
      <Spacer height={40}/>
      <CButton 
        src="https://upload.wikimedia.org/wikipedia/en/7/78/It_%28Stephen_King_novel_-_cover_art%29.jpg" 
        navigation={navigation}  
        page="IT" 
        name="It" 
        author="Stephen King"
        description="It is a 1986 horror novel by American author Stephen King. It was his 22nd book and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey. 'It' primarily appears in the form of Pennywise the Dancing Clown to attract its preferred prey of young children."
        bookImg="https://c4.wallpaperflare.com/wallpaper/382/767/758/artwork-pennywise-stephen-king-stephen-kings-it-wallpaper-preview.jpg"
        srcImg1={require('./images/flowers/rose.png')}
        srcImg2={require('./images/flowers/pink-cosmos.png')}
      />
    </View>
  )
}
export function BooksScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen name={"Books"} component={BooksHomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name={"JFK"} component={Book} options={{ headerShown: false }}/>
      <Stack.Screen name={"IT"} component={Book} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

//Cars Screen

export function Specs({srcImg,type,value}){
  return(
    <View style={stylesCars.Specs}>
      <Image style={{height:40, width:40}} source={srcImg}/>
      <Text style={{fontSize:21, fontWeight:'bold'}}>{type}</Text>
      <Text style={{fontSize:21}}>{value}</Text>
    </View>
   
  )
}
export function Car({route}){
  return(
    <View style={styles.container}>

      <View style={stylesCars.carPage}>
        <Text style={stylesCars.header}>{route.params.name}</Text>
        <Image source={{uri:route.params.src}} style={stylesCars.carImage}/>

        <Spacer height={20}/>

        <View style={stylesCars.carSpecs}>
          <Specs srcImg={require("./images/car/fuel.png")} type="Fuel" value={route.params.fuel}/>
          <Spacer height={15} />
          <Specs srcImg={require("./images/car/performance.png")} type="Top-Speed" value={route.params.topSpeed}/>
          <Spacer height={15} />
          <Specs srcImg={require("./images/car/fast.png")} type="Acceleration" value={route.params.acc}/>
          <Spacer height={15} />
          <Specs srcImg={require("./images/car/weight.png")} type="Weight" value={route.params.weight}/>
          <Spacer height={15} />
          <Specs srcImg={require("./images/car/gear-stick.png")} type="Gearbox" value={route.params.gearbox}/>
        </View>
      </View>
      
    </View>
  )
}
export function CarsScreen(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Toyota" component={Car} options={{ headerShown: false,   
        tabBarIcon: ({focused, color, size}) =>
          <Ionicons name={focused ? 'car' : 'car-outline'} size={size} color={color}/>
        }} 
        initialParams={{
          name:'Toyota Supra 1994',
          src:'https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/c51905b0000b639a185eeb080dd879bf007f5604/photos/3BqdydQ5-omxT5WFDQ1-(edit).jpg?t=165478848850',
          fuel:'Gasoline',
          topSpeed:'250 km/h',
          acc:'5.5 sec',
          weight:'3,215 lbs',
          gearbox:'5-speed manual'
        }}/>
      <Tab.Screen name="Honda" component={Car} options={{ headerShown: false,  
        tabBarIcon: ({focused, color, size}) =>
          <Ionicons name={focused ? 'car' : 'car-outline'} size={size} color={color}/> 
        }} 
        initialParams={{
          name:'Honda Civic Type R',
          src: 'https://static.automarket.ro/img/auto_resized/db/article/076/139/438280l-1000x640-b-7a49159e.jpg',
          fuel:'Gasoline',
          topSpeed:'272 km/h',
          acc:'5.8 sec',
          weight:'1760 kg',
          gearbox:'6-speed manual'
        }}/>
        <Tab.Screen name="Lada" component={Car} options={{ headerShown: false,  
        tabBarIcon: ({focused, color, size}) =>
          <Ionicons name={focused ? 'car' : 'car-outline'} size={size} color={color}/> 
        }} 
        initialParams={{
          name:'Lada',
          src: 'https://images.theconversation.com/files/157741/original/image-20170221-18630-1g8n1hm.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
          fuel:'Coal',
          topSpeed:'400 km/h',
          acc:'7 sec',
          weight:'429 kg',
          gearbox:'4-speed manual'
        }}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator screenOptions={{drawerActiveTintColor:"black"}}>
        <Drawer.Screen name={"Home"} component={HomeScreen} 
        options={{ 
          headerStyle: {
            backgroundColor: '#7456c7',
          }}}/>
        <Drawer.Screen name={"Cars"} component={CarsScreen} 
        options={{ 
          headerStyle: {
            backgroundColor: '#3f82e0',
          }}}/>
        <Drawer.Screen name={"Books"} component={BooksScreen}         
        options={{ 
          headerStyle: {
            backgroundColor: '#c79656',
          }}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#f5f5f5',

  },


  
});

const stylesCars = StyleSheet.create({
  carPage:{
    height:"90%",
    width:'90%',
  },

  header:{
    fontSize:24,
    fontWeight:'bold'
  },

  carImage:{
    height:200,
    width:350
  },

  carSpecs:{
    paddingHorizontal:15
  },
  Specs:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
});

const stylesBooks = StyleSheet.create({
  bookCard:{
    flexDirection:'row',
    width:"90%",
    alignItems:'center',
    justifyContent:'space-evenly',
    backgroundColor:"white",
    borderRadius:"30%",
    padding:10,
    shadowColor: "gray",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },

  bookName:{
    fontSize:32,
    fontWeight:"bold"
  },

  authorName:{
    fontSize:24
  },

  bookImage:{
    height:230,
    width:340
  },

  bookPage:{
    width:'90%',
    height:'100%',
    alignItems:'center'
  },

  bookPageHeader:{
    flexDirection:'row',
    justifyContent:"space-between",
    width:'100%'
  },

  bookDescription:{
    alignItems:'center',
    justifyContent:'center'
  },

  imageBookCard:{
    height:130,
    width:80
  }
});
import React from "react";
import {SafeAreaView,Text,View} from "react-native"
import Navbar from "./Navbar";
import Story from "./Story";
import Status from "./Status";


const App =()=>{
  return(
  <SafeAreaView>
    <View>
       <Navbar/>
       <Status/>
       <Story/>

    </View>
  </SafeAreaView>
  )
}



export default App;
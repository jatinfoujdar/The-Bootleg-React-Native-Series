import React from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import FlatCards from "./component/FlatCards";
import CrouselCards from "./component/CrouselCards"


const App = ()=>{
  return(
    <SafeAreaView>
      <ScrollView>
      <FlatCards/>
      <CrouselCards/>
     </ScrollView>
    
    </SafeAreaView>
  
  )
}



export default App;
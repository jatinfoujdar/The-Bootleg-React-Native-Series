import React from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import FlatCards from "./component/FlatCards";
import CrouselCards from "./component/CrouselCards"
import FancyCard from "./component/FancyCard";
import ActionCards from "./component/ActionCards";


const App = ()=>{
  return(
    <SafeAreaView>
      <ScrollView>
      <FlatCards/>
      <CrouselCards/>
      <FancyCard/>
      <ActionCards/>
   
     </ScrollView>
    
    </SafeAreaView>
  
  )
}



export default App;
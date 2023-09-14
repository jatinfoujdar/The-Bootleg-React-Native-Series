import React from "react";
import {SafeAreaView, ScrollView} from "react-native";
import FlatCards from "./component/FlatCards";
import CrouselCards from "./component/CrouselCards"
import FancyCard from "./component/FancyCard";
import ActionCards from "./component/ActionCards";
import ContactList from "./component/ContactList";


const App = ()=>{
  return(
    <SafeAreaView>
      <ScrollView>
      <FlatCards/>
      <CrouselCards/>
      <FancyCard/>
      <ActionCards/>
      <ContactList/>
     </ScrollView>
    
    </SafeAreaView>
  
  )
}



export default App;
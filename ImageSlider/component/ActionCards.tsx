import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog</Text>
      <View style={[styles.card,styles.elevateCard]}>
        <View style={[styles.headingContainer]}>
        <Text style={[styles.headerText]}>
            What's new in JavaScript - ES12
        </Text>
        </View>
        <Image source={{uri:"https://st.depositphotos.com/1518767/4298/i/450/depositphotos_42984257-stock-photo-javascript-against-futuristic-black-and.jpg"}} 
        style={styles.cardImage}/> 
           <View style={styles.cardBody}>
         <Text numberOfLines={3}>The new spec adds new methods for searching and changing arrays, extends the WeakMap API to allow unique symbols, and introduces some standardization for the use of hashbangs.</Text>
      </View>
      <View style={styles.footerContainer}>
         <TouchableOpacity onPress={()=> openWebsite("https://codedamn.com/news/javascript/es2023-new-features")}>
            <Text style={styles.socialLink}> Read More....</Text>
         </TouchableOpacity>
         <TouchableOpacity>
         <Text style={styles.socialLink}> Social's....</Text>
         </TouchableOpacity>
      </View>
      </View>
   
    
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 20,
        paddingHorizontal: 8,
        fontWeight: "bold",
        color: "black",
    },
    card:{ 
        width:340,
        height:370,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal: 16
    },
    elevateCard:{
        backgroundColor: "#02B290",
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1
        }
    },
    headingContainer:{
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    },
    headerText:{
        color: "black",
        fontWeight: "bold"
    },
    cardImage:{
        height: 190,
    },
    cardBody:{
        padding:10,
       
    },
    footerContainer:{
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-evenly',
    },
    socialLink:{
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        backgroundColor: "#CAD5E2",
        borderRadius: 8,
        paddingHorizontal:20,
        paddingVertical:6

    }
})
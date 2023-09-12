import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.innerContainer}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#38CC77",
        
    },
    headingText:{
          fontSize: 24,
    fontWeight: "bold",
    color: "black",
    padding: 8,
    },
    innerContainer:{
      flex: 1,
      flexDirection: "row-reverse",
      padding: 8
    },
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        width:100,
        height:100,
        borderRadius: 4,
        margin: 8
    },
    cardOne:{
        backgroundColor: "#E21717"
    },
    cardTwo:{
        backgroundColor: "#120E43"
    },
    cardThree:{
        backgroundColor: "#3DBE29"
    }
})
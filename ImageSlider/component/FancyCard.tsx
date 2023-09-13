import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
      <Image source= {{uri: "https://theheritageart.com/wp-content/uploads/2022/11/hawa-mahal.jpg"}}
      style={styles.cardImages}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa Mahal</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: "black",
        paddingHorizontal: 8
    },
    card:{
        width: 350,
        height: 360,
        borderRadius: 6, 
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated:{
        padding: 8,
        backgroundColor: "#23C4ED" ,
        elevation: 3,
        shadowOffset:{
            width:1,
            height:1,
        }   
    },
    cardImages:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    cardBody:{
        flex:1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle:{
        fontSize: 20,
        color: "black",
        fontWeight: "bold"
    }
})
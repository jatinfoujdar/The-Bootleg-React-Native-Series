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
    headingText:{},
    card:{},
    cardElevated:{padding: 8,},
    cardImages:{
        height: 180,
    },
    cardBody:{},
    cardTitle:{
        fontSize: 20,
        color: "black",
        fontWeight: "bold"
    }
})
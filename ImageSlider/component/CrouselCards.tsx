import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CrouselCards() {
  return (
    <View>
      <Text style={styles.headingText}>CrouselCards</Text>
      <ScrollView horizontal={true} style={styles.innerContainer}>
        <View style={[styles.card,styles.cardCrousel]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardCrousel]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardCrousel]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardCrousel]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardCrousel]}>
            <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
  fontWeight: "bold",
  color: "black",
  padding: 8,
  },
  innerContainer:{
     
    padding: 8
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 8
  },
  cardCrousel: {
    backgroundColor: "#FF6666"
  }
})
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

export default function Navbar() {
  return (
    <SafeAreaView>
      <View style={styles.navContainer}>
        <Ionicons name="camera" color="black" size={24} />
        <Text style={styles.navText}>Whatsapp</Text>
        <Ionicons name="search" color="black" size={24} />
      </View>
      <View style={styles.line} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    paddingTop: 4,
  },
  navText: {
    color: 'black',
    fontSize: 28,
  },
  line: {
    marginTop: 6,
    borderBottomWidth: 3,
    borderBottomColor: 'gray',
  },
});

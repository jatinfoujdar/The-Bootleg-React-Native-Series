import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const contacts = [
  {
    uid: 1,
    name: 'Hitesh Choudhary',
    status: 'Just an extraordinary teacher',
    imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
  },
  {
    uid: 2,
    name: 'Anurag Tiwari',
    status: 'I ❤️ To Code and Teach!',
    imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
  },
  {
    uid: 3,
    name: 'Sanket Singh',
    status: 'Making your GPay smooth',
    imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
  },
  {
    uid: 4,
    name: 'Anirudh Jwala',
    status: 'Building secure Digital banks',
    imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
  },
];

export default function Status() {
  return (
    <View style={{ padding: 6 }}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.uid.toString()}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.userImage} />
            <View>
              
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 15,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 14,
  },
});

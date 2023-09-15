import { StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import React from 'react'

const PasswordSchema = Yup.object().shape({
  passwordLength : Yup.number()
  .min(4,"Should be min of 4 Characters")
  .min(16,"Should be min of 16 Characters")
  .required("Length is Required"),
  createdOn: Yup.date().default(() => new Date()),
})

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})






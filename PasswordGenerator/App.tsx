import { StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import React, { useState } from 'react'

const PasswordSchema = Yup.object().shape({
  passwordLength : Yup.number()
  .min(4,"Should be min of 4 Characters")
  .min(16,"Should be min of 16 Characters")
  .required("Length is Required"),
  createdOn: Yup.date().default(() => new Date()),
})

export default function App() {

  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [number, useNumbers] = useState(false);
  const [symbols, useSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number)=>{

  }

  const createPassword = (characters: string, passwordLength:number)=>{

  }

  const resetPassword = ()=>{
    
  }


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})






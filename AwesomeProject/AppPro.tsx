import React from "react";

import {View,Text,SafeAreaView,StyleSheet,useColorScheme} from "react-native";


function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === "dark"
    return(
        <View style={styles.container}>
             <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello World!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5dc"
       
    },
    whiteText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: 'bold',
    },
    darkText: {
        color: "#000000",
        fontSize: 20,
        fontWeight: 'bold',
    },
})


export default AppPro;
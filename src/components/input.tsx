import React from 'react';
import { View, TextInput, Text, StyleSheet, TextStyle } from "react-native";

interface IInput {
    title: string,
    holderName: string,
    security: boolean,
    value: string,
    onChangeText: (value:string) => void
}

const Input = ({ title, holderName, security, value, onChangeText }:IInput) => {
  
    return (
        <View style={{marginTop: 10}}>
            <Text style={styles.inputTitle}>{title}</Text>
                <TextInput
                placeholder={holderName}
                placeholderTextColor='#d3d3d3'
                style={styles.input}
                secureTextEntry={security}
                value={value}
                onChangeText={onChangeText}
               />
          </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputTitle: {
        color: "black",
        fontFamily: "Montserrat",
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        height: 40,
        color: '#ffa500',
        textAlign: "center",
        borderRadius: 10,
        fontFamily: "Montserrat"
  },
})
import React from 'react';
import { TouchableOpacity, StyleSheet, Platform, Text } from 'react-native';

interface IButton {
    text: string,
    keyboardHide: () => void
}

const MyButton = ({text, keyboardHide}: IButton) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btn}
            onPress={keyboardHide}>
            <Text style={styles.btnText}>
              {text}
            </Text>
          </TouchableOpacity>
    )
}

export default MyButton;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 8,
    padding: 6,
    alignItems: 'center',
    marginTop: 20,
    height: 40,
    ...Platform.select({
      ios: {
        backgroundColor: 'transparent'
      },
      android: {
        backgroundColor: '#ffa500'
      }
    })
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: "Montserrat",
    fontWeight: 'bold'
  },
})
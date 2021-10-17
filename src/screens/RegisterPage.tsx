import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  SafeAreaView
} from "react-native";
import LottieView from 'lottie-react-native';
import Input from '../components/input';
import Button from '../components/button';

interface IRegister {
  email: string,
  password: string,
  name: string
}

const initialState = {
  email: '',
  password: '',
  name:''
}

export default function RegisterPage() {
  const [state, setState] = useState<IRegister>(initialState);
  const [dimensions, setDimensions] = useState(Dimensions.get('window').width - 20 * 2);
  
  useEffect(() => {
    const onChangeScreen = () => {
      const width = Dimensions.get('window').width - 20 * 2;
      setDimensions(width);
    }
    Dimensions.addEventListener('change', onChangeScreen);
    return () => {
      Dimensions.removeEventListener('change', onChangeScreen);
    }
})

  const keyboardHide = () => {
    Keyboard.dismiss();
    setState(initialState);
    console.log(state);
    };
  
  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height" }
          style={styles.containerBoard}
          >
       <View style={styles.boxAnimation}>
            <LottieView source={require('../../assets/lottieAnimation/load-walking-dog.json')} autoPlay loop />
        </View>
          <Text style={styles.title}>Wellcome to App</Text>
          <View style={{
            ...styles.form,
            marginBottom: 30,
            width: dimensions- 10 * 2
            }}>

              <Input
                title={'Name'}
                holderName={'name'}
                security={false}
                onChangeText={(value:string) => setState((prevState) => ({ ...prevState, name: value }))}
                value={state.name}
              />

              <Input
                title={'Email address'}
                holderName={'email'}
                security={false}
                onChangeText={(value:string) => setState((prevState) => ({ ...prevState, email: value }))}
                value={state.email}
              />
              
              <Input title={'Password'}
                holderName={'password'}
                security={true}
                value={state.password}
                onChangeText={(value:string) => setState((prevState) => ({ ...prevState, password: value }))}
              />

              <Button text={'SIGN UP'} keyboardHide={ keyboardHide}/>
    
           </View>
       </KeyboardAvoidingView>
       </TouchableWithoutFeedback>
      </View>
   </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff0",
    justifyContent: "center",
  },
  containerBoard: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontFamily: "Montserrat",
    fontWeight: 'bold',
    fontSize: 20
  },
  form: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'transparent',
    elevation: 40,
    backgroundColor: '#fffff0',
    width: '90%',
    paddingHorizontal: 10,
    paddingBottom: 10
  },

  boxAnimation: {
    position: 'absolute',
    top: 20,
    width: '80%',
    height: 280,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 200,
    backgroundColor: '#e6e6fa'
  }
});
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
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import LottieView from 'lottie-react-native';
import Input from '../../components/input';
import MyButton from '../../components/button';
import AnimationFile from '../../../assets/lottieAnimation/book.json';
import { useNavigation } from '@react-navigation/native';



interface IRegister {
  email: string,
  password: string
}

const initialState = {
  email: '',
  password: ''
}

export default function RegisterPage({navigation}:any) {
  // const navigation = useNavigation();
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
            <LottieView source={AnimationFile} autoPlay loop />
        </View>
            
        <Text style={styles.title}>Hello again!</Text>
          <View style={{
            ...styles.form,
            marginBottom: 30,
            width: dimensions- 10 * 2
            }}>

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
                onChangeText={(value: string) => setState((prevState) => ({ ...prevState, password: value }))}
              />
              
              <MyButton text={'SIGN IN'} keyboardHide={keyboardHide} />
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}>
                <Text style={{ textAlign: 'center',  color:'#ff8c00', fontSize: 14, marginTop: 10}}>
                  go to register
                </Text>
              </TouchableOpacity>
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
    padding: 10, 
  },

  boxAnimation: {
    position: 'absolute',
    top: 20,
    width: '80%',
    height: 300,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 50,
  }
});
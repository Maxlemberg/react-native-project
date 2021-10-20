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
import AnimationFile from '../../../assets/lottieAnimation/load-walking-dog.json';
import { useNavigation } from '@react-navigation/native';

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

export default function RegisterPage({navigation}:any) {
  // const navigation = useNavigation();
  const [state, setState] = useState<IRegister>(initialState);
  const [isKeyboard, setIsKeyboard] = useState(false);
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
    setIsKeyboard(false);
    console.log(state);
    };
  
  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
          setIsKeyboard(false);
          Keyboard.dismiss()
        }}>
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height" }
          style={styles.containerBoard}
          >
       <View style={styles.boxAnimation}>
            <LottieView source={AnimationFile} autoPlay loop />
        </View>
          <Text style={styles.title}>Wellcome to App</Text>
          <View style={{
            ...styles.form,
            marginBottom: isKeyboard ? 10 : 20,
            width: dimensions- 10 * 2
            }}>

              <Input
                title={'Name'}
                holderName={'name'}
                security={false}
                onChangeText={(value:string) => setState((prevState) => ({ ...prevState, name: value }))}
                value={state.name}
                onFocus={()=> setIsKeyboard(true)}
              />

              <Input
                title={'Email address'}
                holderName={'email'}
                security={false}
                onChangeText={(value:string) => setState((prevState) => ({ ...prevState, email: value }))}
                value={state.email}
                onFocus={()=> setIsKeyboard(true)}
              />
              
              <Input title={'Password'}
                holderName={'password'}
                security={true}
                value={state.password}
                onChangeText={(value: string) => setState((prevState) => ({ ...prevState, password: value }))}
                onFocus={()=> setIsKeyboard(true)}
              />

              <MyButton text={'SIGN UP'} keyboardHide={ keyboardHide}/>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
                <Text style={{ textAlign: 'center',  color:'#ff8c00', fontSize: 14, marginTop: 10}}>
                  go to login
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
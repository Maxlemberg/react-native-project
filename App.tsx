import React, {useState} from "react";
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import useRoute from './src/routes/router'


const loadAplicationFonts = async () => {
  await Font.loadAsync({
    Montserrat: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  })
}


export default function App() {
  const [loaded, setLoaded] = useState(false);
   // const [loaded, error] = useFonts({ Montserrat: require('./assets/fonts/Montserrat-SemiBold.ttf')});
  const routing = useRoute(true);
  if (!loaded) {
    return <AppLoading
      startAsync={loadAplicationFonts}
      onFinish={() => setLoaded(true)}
      onError={console.warn}
    />
  }

  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  )
}


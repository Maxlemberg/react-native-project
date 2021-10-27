import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Image, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';



const Settings = () => {
    const [image, setImage] = useState<string | null>(null);
    

      useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
      }, []);
    
      const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
    
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.box}>
                    <View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.btn}
                        onPress={pickImage} >
                        <Image
                            source={image ? { uri: image } : require('../../../assets/images/avatar.png')}
                            style={styles.avatar} />
                        </TouchableOpacity>
                        <Text style={styles.textButton}>Add your image</Text>
                    </View>
                    <Text style={styles.text}>Name</Text>
                    {/* <AntDesign name="edit" size={28} color="#ffa500" /> */}
                    <MaterialCommunityIcons name="account-edit" size={28} color="#ffa500" />
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Gender</Text>
                    <AntDesign name="edit" size={26} color="#ffa500" />
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Email</Text>
                    <AntDesign name="edit" size={26} color="#ffa500" />
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Number</Text>
                    <AntDesign name="edit" size={26} color="#ffa500" />
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Age</Text>
                    <AntDesign name="edit" size={26} color="#ffa500" />
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Address</Text>
                    <AntDesign name="edit" size={26} color="#ffa500" />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginHorizontal: 10,
    },
    avatar: {
     width: 80,
     height: 80,
     borderWidth: 1,
     borderRadius: 50,
    },
    box: {
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'rgba(255, 255, 240, 1)',
        elevation: 9,
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textButton: {
        color: 'black',
        fontFamily: "Montserrat",
        fontWeight: 'bold',
        fontSize: 12,
    },
    text: {
        color: 'black',
        fontFamily: "Montserrat",
        fontWeight: 'bold',
        fontSize: 18,
    },
    btn: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Settings;
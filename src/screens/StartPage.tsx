import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const StartPage = ({navigation}: any) => {
    return (
        <SafeAreaView>
            <View>
                <Text>
                Homepage
                </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('Register')}>
                    <Text>Registration</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default StartPage;
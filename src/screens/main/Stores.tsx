import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const Stores = () => {
    return (
        <View style={styles.container}>
            <Text>Where can you buy?</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Stores;


import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const Temple = ({navigation}) => {
    const onPress = () => {
        navigation.navigate('Home')
    }

    return (
        <Pressable onPress={onPress}>
            <View style={{ height: "100%", alignItems: "center", backgroundColor: "#E9FFF0" }}>
                <View style={{ flex: 0.95, justifyContent: "center" }}>
                    <Image source={require('../img/BoonBoon.png')} style={{ width: 310, height: 300 }} />
                </View>
                <View style={{ flex: 0.05 }}>
                    <Text style={{ color: "grey" }}>TravelThaiTemple.com</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Temple
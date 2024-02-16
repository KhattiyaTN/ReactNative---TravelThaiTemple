import { View, Text, Image, StyleSheet, ScrollView, Button, Linking } from 'react-native';
import React, { useCallback } from 'react';
import data from './Attractions.json'

const styles = StyleSheet.create({
    BackgroundColor: {
        backgroundColor: "#E9FFF0",
        padding: 10
    },

    TopHeaderItem: {
        TopHeader: "#000000",
        alignItems: "center"
    },

    TopHeader: {
        color: "#000",
        fontSize: 35
    },

    Card: {
        marginVertical: 20
    },

    Name: {
        color: "#000000",
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10
    },

    Description: {
        padding: 10
    },

    CoverImage: {
        width: "100%",
        height: 250,
        marginVertical: 10
    },

    Address: {
        fontSize: 4,
        padding: 10,
        marginBottom: 10
    },

    Map: {
        marginBottom: 50
    }

})

const Detail = ({ navigation, route }) => {
    let d = data.find(o => o.id === route.params.id)
    const handleMap = useCallback(async () => {
        await Linking.openURL('http://maps.google.com/maps?q=' + d.latitude + ',' + d.longitude);
    })

    return (
        <ScrollView style={styles.BackgroundColor}>
            <View style={styles.Card}>
                <Image style={styles.CoverImage} source={{ uri: d.coverImage }} />
                <Text style={styles.Name}>{d.name}</Text>
                <Text style={styles.Description}>{d.deepDetail.subDetail1}</Text>

                <Image style={styles.CoverImage} source={{ uri: d.deepDetail.subImage1 }} />
                <Text style={styles.Description}>{d.deepDetail.subDetail2}</Text>

                <Image style={styles.CoverImage} source={{ uri: d.deepDetail.subImage2 }} />
                <Text style={styles.Description}>{d.deepDetail.subDetail3}</Text>

                <Image style={styles.CoverImage} source={{ uri: d.deepDetail.subImage3 }} />
                <Text style={styles.Description}>{d.deepDetail.subDetail4}</Text>
            </View>
            <View style={styles.Address}>
                <Text>{d.address.location}</Text>
                <Text>{d.address.open}</Text>
                <Text>{d.address.contract}</Text>
            </View>
            <View style={styles.Map}>
                <Button title="Map" onPress={handleMap} />
            </View>
        </ScrollView>
    )
}

export default Detail
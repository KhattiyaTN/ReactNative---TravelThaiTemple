import { View, Text, ScrollView, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
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
        padding: 10,
        marginBottom: -10
    },

    CoverImage: {
        width: "100%",
        height: 250
    }
})

const Home = ({ navigation }) => {
    const pressDetail = (id) => {
        navigation.navigate("Detail", { id: id })
    }
    return (

        <ScrollView style={styles.BackgroundColor}>
            <View style={styles.TopHeaderItem}>
                <Text style={styles.TopHeader}>THAI TEMPLES</Text>
            </View>
            {data.map(d => (
                <View key={d.id} style={styles.Card}>
                    <Pressable onPress={() => pressDetail(d.id)}>
                        <Image
                            source={{ uri: d.coverImage }}
                            style={styles.CoverImage}
                        />
                        <Text style={styles.Name}>{d.name}</Text>
                    </Pressable>
                    <Text style={styles.Description}>{d.detail}</Text>
                </View>
            ))}
        </ScrollView>
    )
}

export default Home
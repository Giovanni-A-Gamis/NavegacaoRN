import React from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";

windowWidth = Dimensions.get("window").width;

export default ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Go Back"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e6e6fa",
    },
    title: {
        fontSize: 26,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: "#dda0dd",
        borderColor: '#ba55d3',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});
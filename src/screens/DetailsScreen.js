import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf0e6',
    },
    title: {
        fontSize: 26,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#ffebcd',
        borderColor: '#deb887',
        borderWidth: 1,
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
})
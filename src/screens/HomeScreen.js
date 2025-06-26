import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backToLogin} onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            })}>
                <Ionicons name="log-out-outline" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles.title}>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
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
        backgroundColor: '#f0f8ff',
    },
    backToLogin: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    title: {
        fontSize: 26,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#add8e6',
        borderColor: '#87ceeb',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
})
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const emailCorreto = 'gio@bentao.com';
const senhaCorreta = 'Dsg123';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const fazerLogin = () => {
        const emailOk = email === emailCorreto;
        const senhaOk = senha === senhaCorreta;

        if (emailOk && senhaOk) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        } else if (!emailOk && !senhaOk) {
            Alert.alert('Erro', 'Email e senha incorretos!');
        } else if (!emailOk) {
            Alert.alert('Erro', 'Email incorreto!');
        } else {
            Alert.alert('Erro', 'Senha incorreta!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Senha"
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <TouchableOpacity style={styles.loginButton} onPress={fazerLogin}>
                <Text style={styles.loginText}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe4e1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        marginBottom: 30,
    },
    input: {
        width: windowWidth * 0.8,
        height: 40,
        borderColor: '#ff69b4',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    loginButton: {
        backgroundColor: '#ff1493',
        paddingVertical: 10,
        width: windowWidth * 0.5,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    loginText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

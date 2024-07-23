import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';
import logoImage from '../assets/valo_icon.png'; // Replace with your logo image path

const LoginScreen = ({ onLogin, onNavigate }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        onLogin(email, password);
    };

    return (
        <ImageBackground 
            source={require('../assets/backgrnd.jpg')} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Image 
                        source={logoImage} // Replace with your logo image
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        value={email}
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={newText => setEmail(newText)}
                    />
                    <TextInput
                        value={password}
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={newText => setPassword(newText)}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Login" color="#6A0DAD" onPress={handleLogin} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Back to Welcome" color="#6A0DAD" onPress={() => onNavigate('Welcome')} />
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent overlay for better text visibility
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    logo: {
        width: 100, // Adjust width as needed
        height: 100, // Adjust height as needed
        marginBottom: 20,
        opacity: 0.8, 
        // Adjust opacity for transparency
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'black', // Change text color for better visibility
        textAlign: 'center', // Center align the text
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'column',
        gap: 10,
        width: '100%',
    },
    button: {
        width: '100%',
        borderRadius: 5,
    },
});

export default LoginScreen;
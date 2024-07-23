import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';

const SignupScreen = ({ onNavigate }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showError, setShowError] = useState(false); // State to manage error display

    const handleSignup = () => {
        if (password === confirmPassword) {
            // Perform signup logic here
            // For example, call an API to create a new user account
            // After successful signup, navigate to Login page
            onNavigate('Login');
        } else {
            setShowError(true); // Display error message
        }
    };

    return (
        <ImageBackground 
            source={require('../assets/img12.jpg')} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Image 
                        source={require('../assets/valo_icon.png')} // Adjust this path as per your logo
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Email" 
                        value={email} 
                        onChangeText={setEmail} 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Password" 
                        secureTextEntry 
                        value={password} 
                        onChangeText={setPassword} 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Confirm Password" 
                        secureTextEntry 
                        value={confirmPassword} 
                        onChangeText={setConfirmPassword} 
                    />
                    {showError && (
                        <View style={styles.errorContainer}>
                            <Image 
                                source={require('../assets/img15.png')} // Placeholder for error icon
                                style={styles.errorIcon}
                            />
                            <Text style={styles.errorText}>Passwords do not match</Text>
                        </View>
                    )}
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button} onPress={handleSignup}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => onNavigate('WelcomeScreen')}>
                            <Text style={styles.buttonText}>Back to Welcome</Text>
                        </Pressable>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent white background
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 15,
        width: '80%',
        alignItems: 'center',
    },
    logo: {
        width: 100, // Adjust width as needed
        height: 100, // Adjust height as needed
        marginBottom: 20,
        opacity: 0.8, // Adjust opacity for transparency
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: 'black', // Text color
    },
    input: {
        height: 50,  
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5, 
        width: '100%', // Ensure input takes full width
    },
    buttonContainer: {
        flexDirection: 'column',
        gap: 10,
        width: '100%',
    },
    button: {
        marginBottom: 10,
        paddingVertical: 15, // Adjust padding for button height
        backgroundColor: '#4B0082', // Dark purple background color
        borderRadius: 10, // Rounded corners
        alignItems: 'center', // Center align the button text
    },
    buttonText: {
        color: 'white', // White text color for better contrast
        fontSize: 16, // Adjust font size as needed
        fontWeight: 'bold', // Bold text for emphasis
    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    errorIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
});

export default SignupScreen;
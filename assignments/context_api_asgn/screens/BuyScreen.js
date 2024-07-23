import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BuyScreen = ({ product, onNavigate }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handlePurchase = () => {
        // Handle purchase logic here
        console.log(`Buying ${product.name}`);
        console.log(`Email: ${email}`);
        console.log(`Name: ${name}`);
        console.log(`Address: ${address}`);
        console.log(`Contact Number: ${contactNumber}`);
        // Example: Navigate back to product list after purchase
        onNavigate('Product');
    };

    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme); // Toggle theme
    };

    return (
        <View style={[styles.container, isDarkTheme && styles.darkTheme]}>
            <View style={styles.content}>
                <Image source={product.image} style={styles.productImage} />
                <Text style={[styles.productName, { color: 'purple' }]}>{product.name}</Text>
                <Text style={[styles.productInfo, { color: 'purple' }]}>{product.info}</Text>
                <View style={styles.transparentContainer}>
                    <View style={styles.form}>
                        <Text style={styles.label}>Enter Your Email:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Your Email"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <Text style={styles.label}>Enter Your Name:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Your Name"
                            value={name}
                            onChangeText={text => setName(text)}
                        />
                        <Text style={styles.label}>Enter Your Address:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Your Address"
                            value={address}
                            onChangeText={text => setAddress(text)}
                        />
                        <Text style={styles.label}>Enter Your Contact Number:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Your Contact Number"
                            value={contactNumber}
                            onChangeText={text => setContactNumber(text)}
                            keyboardType="phone-pad"
                        />
                    </View>
                    <Pressable style={[styles.buyButton, { backgroundColor: 'purple' }]} onPress={handlePurchase}>
                        <Text style={styles.buyButtonText}>Proceed to Buy</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.navigationBar}>
                <Pressable style={styles.iconButton} onPress={() => onNavigate('Product')}>
                    <Icon name="arrow-left" size={20} color="#fff" />
                </Pressable>
                <Pressable style={styles.iconButton} onPress={handleThemeChange}>
                    <Icon name={isDarkTheme ? "sun-o" : "moon-o"} size={20} color="#fff" />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff', // Default light theme background color
    },
    darkTheme: {
        backgroundColor: '#000',
        width: '100%', // Dark theme background color
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        width: 200,
        height: 200,
        borderRadius: 3,
        marginBottom: 0,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000', // Text color for dark theme
    },
    productInfo: {
        fontSize: 18,
        marginBottom: 20,
        color: '#000', // Text color for dark theme
    },
    transparentContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
        borderRadius: 10,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    form: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000', // Text color for dark theme
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#000', // Border color for dark theme
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: '#000', // Text color for dark theme
    },
    buyButton: {
        backgroundColor: 'purple',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    buyButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Touch both ends of the screen
        width: '110%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        paddingVertical: 16,
        paddingHorizontal: 2,
        position: 'absolute',
        bottom: 0,
    },
    iconButton: {
        paddingHorizontal: 15,
    },
});

export default BuyScreen;
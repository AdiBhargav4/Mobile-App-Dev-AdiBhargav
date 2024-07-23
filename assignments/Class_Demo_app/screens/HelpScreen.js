import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library you prefer

const HelpScreen = ({ onNavigate }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const handleGoBack = () => {
        onNavigate('Product'); // Navigate back to Product screen
    };

    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={[styles.container, isDarkTheme ? styles.darkContainer : null]}>
            <View style={styles.content}>
                <Text style={styles.helpText}>Welcome to Our Help Desk!
Frequently Asked Questions (FAQs)
1. How do I place an order?

To place an order, browse our catalog, select the items you wish to purchase, and proceed to checkout. Follow the prompts to enter your shipping and payment information to complete your order.
2. Can I track my order?

Yes, you can track your order status by logging into your account and navigating to the 'Order History' section. Alternatively, you will receive email updates with tracking information once your order has shipped.
3. What payment methods do you accept?

We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment methods available at checkout.
4. How do I return or exchange an item?

For information on returns or exchanges, please visit our Returns & Exchanges Policy page for detailed instructions. You can also contact our customer support team for assistance.</Text>
                {/* Add your help content here */}
            </View>
            <View style={styles.navBar}>
                <Pressable style={styles.navButton} onPress={handleGoBack}>
                    <Icon name="arrow-left" size={20} color="#fff" />
                </Pressable>
                <Pressable style={styles.navButton} onPress={toggleTheme}>
                    <Icon name={isDarkTheme ? 'sun-o' : 'moon-o'} size={20} color="#fff" />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Default light theme background
    },
    darkContainer: {
        backgroundColor: '#000',
        width:'100%' // Dark theme background
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
        position: 'absolute',
        bottom: 0, // Position it at the bottom
        width: '100%',
    },
    navButton: {
        padding: 10,
    },
    helpText: {
        color: '#FFD700', // Yellow color
        fontSize: 18,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 60, // Space for the navigation bar
    },
});

export default HelpScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useFavorites } from './FavoritesContext';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon library

const emptyStateImage = require('../assets/img21.png'); // Adjust path as per your project
const logoImage = require('../assets/img22.png'); // Replace with your logo image path

const Favorite = ({ onNavigate }) => {
    const { favorites, toggleFavorite } = useFavorites();
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    // Check if favorites array is empty
    const isEmptyFavorites = favorites.length === 0;

    return (
        <SafeAreaView style={[styles.container, isDarkTheme ? styles.darkContainer : null]}>
            {/* Main content */}
            <View style={styles.content}>
                {isEmptyFavorites ? (
                    <View style={styles.emptyFavoritesContainer}>
                        <Image source={emptyStateImage} style={styles.emptyStateImage} />
                        <Text style={styles.emptyFavoritesText}>No favorites selected</Text>
                    </View>
                ) : (
                    <View style={styles.picksContainer}>
                        <Text style={styles.picksText}>Your Picks</Text>
                        <FlatList
                            data={favorites}
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    <TouchableOpacity
                                        style={styles.logoContainer}
                                        onPress={() => toggleFavorite(item)} // Toggle favorite on logo press
                                    >
                                        <Image source={logoImage} style={styles.logo} />
                                    </TouchableOpacity>
                                    <Image source={item.image} style={styles.cardImage} />
                                    <Text style={styles.cardName}>{item.name}</Text>
                                    <Text style={styles.cardInfo}>{item.info}</Text>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={styles.cardsContainer}
                        />
                    </View>
                )}
            </View>

            {/* Transparent navigation bar */}
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => onNavigate('Product')} style={styles.navButton}>
                    <Icon name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleTheme} style={styles.navButton}>
                    <Icon name={isDarkTheme ? 'sun-o' : 'moon-o'} size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Default light theme background
    },
    darkContainer: {
        backgroundColor: '#000', // Dark theme background
    },
    content: {
        flex: 1,
        marginBottom: 60, // Space for the navigation bar
    },
    emptyFavoritesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyStateImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    emptyFavoritesText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'purple',
        textAlign: 'center',
    },
    picksContainer: {
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    picksText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'purple',
        textAlign: 'center',
        marginBottom: 20, // Space between title and list
    },
    cardsContainer: {
        paddingVertical: 20,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
        width: '100%',
        position: 'relative', // To position the logo container absolutely
    },
    cardImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    cardName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    cardInfo: {
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1, // Ensures the logo is on top of other elements
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    navBar: {
        position: 'row',
        bottom: 0,
        width: '100%',
        height: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Transparent background
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    navButton: {
        padding: 10,
    },
});

export default Favorite;
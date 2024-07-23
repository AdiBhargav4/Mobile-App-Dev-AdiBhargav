import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import AnotherWelcomeScreen from './screens/Product';
import SignupScreen from './screens/SignupScreen';
import HelpScreen from './screens/HelpScreen';
import FavoritesScreen from './screens/Favorite';
import BuyScreen from './screens/BuyScreen'; 
import { FavoritesProvider } from './screens/FavoritesContext'; 

const App = () => {
    const [page, setPage] = useState('Welcome');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const loadInitialData = async () => {
            const storedPage = await AsyncStorage.getItem('page');
            const storedLoginStatus = await AsyncStorage.getItem('isLoggedIn');

            if (storedPage) setPage(storedPage);
            if (storedLoginStatus) setIsLoggedIn(JSON.parse(storedLoginStatus));
        };

        loadInitialData();
    }, []);

    const handleLogin = async (email, password) => {
        if (email === 'adi@123' && password === 'abcd') {
            setIsLoggedIn(true);
            setPage('Product');
            await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
            await AsyncStorage.setItem('page', 'Product');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    const handleLogout = async () => {
        setIsLoggedIn(false);
        setPage('Welcome'); 
        await AsyncStorage.setItem('isLoggedIn', JSON.stringify(false));
        await AsyncStorage.setItem('page', 'Welcome');
    };

    const handleNavigation = async (destination, data) => {
        setPage(destination);
        if (destination === 'Buy') {
            setProductData(data.product);
            await AsyncStorage.setItem('productData', JSON.stringify(data.product));
        }
        await AsyncStorage.setItem('page', destination);
    };

    const renderScreen = () => {
        switch (page) {
            case 'Welcome':
                return <WelcomeScreen onNavigate={setPage} />;
            case 'Login':
                return <LoginScreen onLogin={handleLogin} onNavigate={setPage} />;
            case 'Product':
                return <AnotherWelcomeScreen onSignOut={handleLogout} onNavigate={handleNavigation} />;
            case 'Signup':
                return <SignupScreen onNavigate={setPage} />;
            case 'Help':
                return <HelpScreen onNavigate={setPage} />;
            case 'Favorites':
                return <FavoritesScreen onNavigate={setPage} />;
            case 'Buy':
                return <BuyScreen product={productData} onNavigate={handleNavigation} />; 
            default:
                return <WelcomeScreen onNavigate={setPage} />;
        }
    };

    return (
        <FavoritesProvider>
            <View style={styles.container}>
                {renderScreen()}
            </View>
        </FavoritesProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
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

    const handleLogin = (email, password) => {
       
        if (email === 'adi@123' && password === 'abcd') {
            setIsLoggedIn(true);
            setPage('Product');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setPage('Welcome'); 
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
                return <BuyScreen product={productData} onNavigate={handleNavigation} />; // Pass product data to BuyScreen
            default:
                return <WelcomeScreen onNavigate={setPage} />;
        }
    };

    // Function to handle navigation and set product data for BuyScreen
    const handleNavigation = (destination, data) => {
        setPage(destination);
        if (destination === 'Buy') {
            setProductData(data.product);
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